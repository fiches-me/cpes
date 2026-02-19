/**
 * Markdown-it plugin for enhanced task checkboxes with custom states
 * Handles custom states like [/], [!], [>], etc.
 * Should run AFTER markdown-it-task-lists
 */
export function taskCheckboxPlugin(md) {
  // Valid custom task states (beyond standard [ ] and [x])
  const customTasks = [
    '/',                // in progress
    '>', '<',           // rescheduled, scheduled
    '!',                // important
    '-',                // cancelled
    '?', '*',           // question, star
    'n', 'l',           // note, location
    'i', 'S',           // info, amount
    '"', 'I',           // quote, idea
    'p', 'c',           // pro, con
    'b', 'f',           // bookmark, fire
    'w', 'k',           // win, key
    'u', 'd',           // up, down
    'r', 'L',           // law, language
    't', 'T',           // time, telephone
  ];

  md.core.ruler.after('inline', 'custom-task-checkboxes', (state) => {
    const tokens = state.tokens;
    
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'inline') continue;
      
      const inlineTokens = tokens[i].children;
      if (!inlineTokens || inlineTokens.length === 0) continue;
      
      // Check if we're in a list item
      let listItemIndex = -1;
      for (let j = i - 1; j >= 0; j--) {
        if (tokens[j].type === 'list_item_open') {
          listItemIndex = j;
          break;
        }
        if (tokens[j].type === 'bullet_list_close' || tokens[j].type === 'ordered_list_close') {
          break;
        }
      }
      
      if (listItemIndex === -1) continue;
      
      // Look for custom checkbox pattern at the start: [/], [!], etc.
      let taskChar = null;
      let checkboxIndex = -1;
      
      for (let j = 0; j < inlineTokens.length; j++) {
        const token = inlineTokens[j];
        if (token.type === 'text') {
          // Match custom task patterns
          const match = token.content.match(/^\[(.)\]\s*/);
          if (match && customTasks.includes(match[1])) {
            taskChar = match[1];
            checkboxIndex = j;
            
            // Remove the checkbox markdown from the text
            token.content = token.content.substring(match[0].length);
            break;
          }
        }
      }
      
      if (checkboxIndex === -1) continue;
      
      // Add attributes to list item
      const listItem = tokens[listItemIndex];
      const existingClass = listItem.attrGet('class');
      const classes = existingClass ? existingClass + ' task-list-item' : 'task-list-item';
      listItem.attrSet('class', classes);
      listItem.attrSet('data-task', taskChar);
      
      // Create checkbox input HTML
      const checkboxHtml = `<input type="checkbox" class="task-list-item-checkbox" checked data-task="${taskChar}" />`;
      
      // Insert or replace with checkbox
      if (inlineTokens[checkboxIndex].content === '') {
        inlineTokens[checkboxIndex].type = 'html_inline';
        inlineTokens[checkboxIndex].content = checkboxHtml;
      } else {
        const newToken = new state.Token('html_inline', '', 0);
        newToken.content = checkboxHtml;
        inlineTokens.splice(checkboxIndex, 0, newToken);
      }
    }
    
    return true;
  });
}
