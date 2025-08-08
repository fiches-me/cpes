import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";
import { maths } from 'markdown-it-mathjax3';
import { footnote } from "@mdit/plugin-footnote";
import mdItObsidianCallouts from "markdown-it-obsidian-callouts";

// https://vitepress.dev/reference/site-config
const vitePressConfigs = {
  title: "📑 FICHES.ME",
  description: "Mes super fiches ig",
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
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
      { text: '🏖 Juillet-Août', link: '/juillet-aout' },
      { text: '💖 Nous Aider', link: '/contribution' },
    ],
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2019-2025 FUNASITIEN'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fiches-cc/cpes' }
    //  { icon: 'discord', link: 'https://join.aelysium.group/' }
    ]
  },
  sitemap: {
    hostname: 'https://cpes.fiches.me'
  }
}
export default defineConfig(
  withMermaid(
    withSidebar(
      vitePressConfigs, [
      {
        documentRootPath: '/',
        scanStartPath: 'juillet-aout',
        resolvePath: '/juillet-aout/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        excludeFilesByFrontmatterFieldName: 'draft',
      },
      {
        documentRootPath: '/',
        scanStartPath: 'contribution',
        resolvePath: '/contribution/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        excludeFilesByFrontmatterFieldName: 'draft',
      }
    ]),
  )
);
