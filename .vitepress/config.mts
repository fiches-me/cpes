import { defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";
import { footnote } from "@mdit/plugin-footnote";
import mdItTaskLists from 'markdown-it-task-lists';
import { taskCheckboxPlugin } from './plugins/markdown-it-task-checkbox.mts';

import mdItObsidianCallouts from 'markdown-it-obsidian-callouts';
import markdownItObsidian from 'markdown-it-obsidian';
import mathjax3 from 'markdown-it-mathjax3';

// https://vitepress.dev/reference/site-config
const vitePressConfigs : UserConfig<any> = {
  title: "📑 FICHES.ME",
  description: "Mes super fiches ig",
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    math: true,
    languageAlias: {
      'pseudo-code': 'python',
      'conf': 'yaml',
    },
    config: (md) => {
      md.use(footnote)
      md.use(mdItObsidianCallouts)
      md.use(markdownItObsidian, { enabled: true })
      md.use(mathjax3)
      md.use(mdItTaskLists, { enabled: true })
      // md.use(taskCheckboxPlugin) // Temporarily disabled - causing blank page
    }
  },
  titleTemplate: ':title - FICHES',
  lang: 'fr-FR',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/fiches-me/cpes/edit/main/:path'
    },
    nav: [
      { text: '🔢 Maths', link: '/maths' },
      { text: '🖥️ Info',   link: '/info' },
      { text: '💸 Eco',   link: '/eco' },
      { text: '🍃 Bio',   link: '/bio' },
      { text: '🎮 CPES-CRAFT', link: '/craft' },
      { text: '💖 Nous Aider', link: '/contribution' },
    ],
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2019-2025 FUNASITIEN'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fiches-me/cpes' },
      { icon: 'discord', link: 'https://dsc.gg/drmcld' }
    ]
  },
  sitemap: {
    hostname: 'https://cpes.fiches.me'
  },
  transformPageData(ctx) {
    const canonicalUrl = `https://cpes.fiches.me/${ctx.relativePath.replace(/\.(md|html)$/, '').replace(/\index$/, '')}`;
    ctx.frontmatter.head = ctx.frontmatter.head || [];
    ctx.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }]);
  },
}

const sections = ['maths', 'eco', 'info', 'bio', 'contribution', 'livres', 'craft', 'stats'];

const sidebarOptions = sections.map((section) => ({
  documentRootPath: '/',
  scanStartPath: section,
  resolvePath: `/${section}/`,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  excludeFilesByFrontmatterFieldName: 'draft',
  hyphenToSpace: true, 
  underscoreToSpace: true,
}));

export default defineConfig(
  //withMermaid(
    withSidebar(vitePressConfigs, sidebarOptions)
  //)
);
