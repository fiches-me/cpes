import markdown
import re
import urllib.parse
from sys import argv
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

def parse_md_with_frontmatter(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Extract Frontmatter
    meta = {}
    content = text
    if text.startswith('---'):
        parts = re.split(r'^---' , text, flags=re.MULTILINE)
        if len(parts) >= 3:
            yaml_part = parts[1]
            content = '---'.join(parts[2:])
            for line in yaml_part.strip().split('\n'):
                if ':' in line:
                    k, v = line.split(':', 1)
                    meta[k.strip().lower()] = v.strip().replace('"', '').replace("'", "")
    
    # Pre-process LaTeX Math to SVG images (WeasyPrint doesn't run JS for MathJax/KaTeX)
    # Block Math: $$...$$
    content = re.sub(
        r'\$\$(.*?)\$\$',
        lambda m: f'<div class="math-block"><img src="https://latex.codecogs.com/svg.image?{urllib.parse.quote(m.group(1).strip())}" alt="math formula"></div>',
        content,
        flags=re.DOTALL
    )
    # Inline Math: $...$
    content = re.sub(
        r'(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)',
        lambda m: f'<img class="math-inline" src="https://latex.codecogs.com/svg.image?{urllib.parse.quote(m.group(1).strip())}" alt="math inline">',
        content
    )

    # Custom pre-processor for Obsidian callouts format `> [!tip]` to Markdown `!!! tip`
    lines = content.split('\n')
    new_lines = []
    in_admonition = False
    for line in lines:
        admonition_match = re.match(r'^>\s*\[!(\w+)\](.*)', line)
        if admonition_match:
            in_admonition = True
            atype = admonition_match.group(1).lower()
            title = admonition_match.group(2).strip()
            if title:
                new_lines.append(f'!!! {atype} "{title}"')
            else:
                new_lines.append(f'!!! {atype}')
        elif in_admonition and line.startswith('>'):
            content_line = line[1:]
            if content_line.startswith(' '):
                content_line = content_line[1:]
            new_lines.append('    ' + content_line)
        else:
            in_admonition = False
            new_lines.append(line)
            
    content = '\n'.join(new_lines)
    
    # Convert Markdown to HTML
    html_body = markdown.markdown(content, extensions=['admonition', 'extra', 'toc'])
    return meta, html_body

def generate_pdf(md_file, css_file, output_file):
    font_config = FontConfiguration()
    meta, html_body = parse_md_with_frontmatter(md_file)

    # Construct the Header from Frontmatter
    meta_parts = []
    if meta.get('date'):
        meta_parts.append(meta['date'])
    if meta.get('author'):
        meta_parts.append(meta['author'])
    meta_top = " | ".join(meta_parts)
    meta_html = f'<div class="doc-meta">{meta_top}</div>' if meta_top else ''

    header_html = f"""
    <header class="doc-header">
        <h1>{meta.get('title', 'Untitled Document')}</h1>
        {meta_html}
    </header>
    """

    full_html_string = f"""
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body>
        {header_html}
        <main>{html_body}</main>
    </body>
    </html>
    """

    # Initialize WeasyPrint objects correctly
    html = HTML(string=full_html_string, base_url=".")
    css = CSS(filename=css_file, font_config=font_config)

    # Write PDF using the stylesheets list and font_config
    html.write_pdf(
        output_file,
        stylesheets=[css],
        font_config=font_config
    )
    print(f"🚀 PDF generated: {output_file}")

if __name__ == "__main__":
    markdown_file = argv[1] if len(argv) > 1 else "CITATIONS.md"
    output_file = argv[2] if len(argv) > 2 else "output.pdf"
    generate_pdf(markdown_file, "style.css", output_file)