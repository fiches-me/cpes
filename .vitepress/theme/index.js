import DefaultTheme from 'vitepress/theme'
import './fonts.css'
import './callouts.css'
import './colors.css'
import './checkboxes.css'
import './progress.css'
import './layout.css'

import '../../.obsidian/snippets/utils.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Add checkbox interactivity on route changes
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        // Multiple attempts with increasing delays to catch content
        setTimeout(() => processCheckboxes(), 50)
        setTimeout(() => processCheckboxes(), 200)
        setTimeout(() => processCheckboxes(), 500)
      }
    }
  },
  setup() {
    // Run on component mount
    if (typeof window !== 'undefined') {
      setTimeout(() => processCheckboxes(), 100)
      setTimeout(() => processCheckboxes(), 300)
      setTimeout(() => processCheckboxes(), 600)
    }
  }
}

function processCheckboxes() {
  parseCustomCheckboxes()
  // Only initialize click handler once
  if (!window.__checkboxHandlerInitialized) {
    initCheckboxes()
    window.__checkboxHandlerInitialized = true
  }
}

function parseCustomCheckboxes() {
  if (typeof document === 'undefined') return
  
  // Try multiple content selectors
  const contentSelectors = ['.vp-doc', '.content', 'main', 'article']
  let container = null
  
  for (const selector of contentSelectors) {
    container = document.querySelector(selector)
    if (container) {
      break
    }
  }
  
  if (!container) {
    container = document
  }
  
  // Find all list items
  const listItems = container.querySelectorAll('li')
  
  if (listItems.length === 0) {
    return
  }
  
  let processed = 0
  
  listItems.forEach((li) => {
    // Skip if already processed
    if (li.dataset.checkboxProcessed === 'true') {
      return
    }
    
    const text = li.textContent.trim()
    
    // Check if starts with ANY checkbox pattern like [.] where . is any character
    const match = text.match(/^\[(.)\]/)
    
    if (match) {
      const taskChar = match[1]
      
      // Skip if it's already a task item with checkbox
      if (li.querySelector('input[type="checkbox"]')) {
        const checkbox = li.querySelector('input[type="checkbox"]')
        
        // Update existing checkbox with custom state
        if (taskChar !== ' ' && taskChar !== 'x' && taskChar !== 'X') {
          checkbox.checked = true
          checkbox.dataset.task = taskChar
          li.classList.add('task-list-item')
          li.dataset.task = taskChar
        }
        li.dataset.checkboxProcessed = 'true'
        processed++
        return
      }
      
      // Create checkbox if it doesn't exist
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.className = 'task-list-item-checkbox'
      
      // Set checked state
      if (taskChar !== ' ') {
        checkbox.checked = true
        if (taskChar !== 'x' && taskChar !== 'X') {
          checkbox.dataset.task = taskChar
          li.dataset.task = taskChar
        }
      }
      
      li.classList.add('task-list-item')
      
      // Find the text node and remove [char] from it
      const walker = document.createTreeWalker(li, NodeFilter.SHOW_TEXT, null)
      let textNode = walker.nextNode()
      
      if (textNode) {
        textNode.textContent = textNode.textContent.replace(/^\[(.)\]\s*/, '')
        li.insertBefore(checkbox, li.firstChild)
        li.dataset.checkboxProcessed = 'true'
        processed++
      }
    }
  })
}

function initCheckboxes() {
  if (typeof document === 'undefined') return
  
  const clickHandler = (e) => {
    const target = e.target
    
    // Handle both our custom checkboxes and markdown-it-task-lists checkboxes
    if (
      target.tagName !== 'INPUT' ||
      target.type !== 'checkbox'
    ) {
      return
    }
    
    // Check if it's in a task list (either via class or parent li)
    const listItem = target.closest('li.task-list-item') || target.closest('li')
    if (!listItem) return
    
    // Prevent default to control the state ourselves
    e.preventDefault()
    
    const currentTask = target.dataset.task || ''
    
    // Custom task states that have special icons
    const customStates = ['/', '>', '<', '!', '-', '?', '*', 'n', 'l', 'i', 'S', '"', 'I', 'p', 'c', 'b', 'f', 'w', 'k', 'u', 'd', 'r', 'L', 't', 'T']
    
    let nextTask
    let nextChecked
    
    if (!currentTask || currentTask === '') {
      // Empty -> checked (x)
      nextTask = 'x'
      nextChecked = true
    } else if (currentTask === 'x' || currentTask === 'X') {
      // Checked -> empty
      nextTask = ''
      nextChecked = false
    } else if (customStates.includes(currentTask)) {
      // Custom states cycle: custom state (checked) -> empty (unchecked) -> custom state (checked)
      if (target.checked) {
        // Currently showing custom icon, remove it
        nextTask = ''
        nextChecked = false
      } else {
        // Currently empty, restore custom icon
        nextTask = currentTask
        nextChecked = true
      }
    } else {
      // Unknown state, treat as toggle
      nextTask = currentTask
      nextChecked = !target.checked
    }
    
    // Update checkbox state
    target.checked = nextChecked
    
    // Update data-task attribute
    if (nextTask) {
      target.dataset.task = nextTask
      if (listItem) {
        listItem.dataset.task = nextTask
      }
    } else {
      delete target.dataset.task
      if (listItem) {
        delete listItem.dataset.task
      }
    }
  }
  
  // Remove old listener if exists
  document.removeEventListener('click', clickHandler)
  // Add new listener
  document.addEventListener('click', clickHandler)
}
