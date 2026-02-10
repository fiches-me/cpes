import { defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";
import { footnote } from "@mdit/plugin-footnote";
import mdItObsidianCallouts from 'markdown-it-obsidian-callouts';

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
    }
  },
  titleTemplate: ':title - FICHES',
  lang: 'fr-FR',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/fiches-cc/cpes/edit/main/:path'
    },
    nav: [
      { text: '🔢 Maths', link: '/maths' },
      { text: '🖥️ Info', link: '/info' },
      { text: '💸 Eco', link: '/eco' },
      { text: '🍃 Bio', link: '/bio' },
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
  }
}

const sections = ['maths', 'eco', 'info', 'bio', 'contribution', 'livres'];

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