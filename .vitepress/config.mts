import { defineConfig, UserConfig } from "vitepress";
import { primaryThemeConfig } from 'primary-vitepress/config';
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
const vitePressConfigs: UserConfig<any> = {
  title: "📑 FICHES.ME CPES",
  description: "Mes super fiches ig",
  base: '/cpes1/',
  extends: primaryThemeConfig,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  metaChunk: true,
  markdown: {
    lineNumbers: true,
    math: true,
    languageAlias: {
      "pseudo-code": "python",
      conf: "yaml",
    },
  },
  titleTemplate: ":title - FICHES.ME",
  lang: "fr-FR",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/fiches-me/cpes1/edit/main/:path",
    },
    nav: [
      { text: "🔢 Maths", link: "/maths" },
      { text: "🖥️ Info", link: "/info" },
      { text: "💸 Eco", link: "/eco" },
      { text: "🍃 Bio", link: "/bio" },
      { text: "📊 Stats", link: "/stats" },
      { text: "🎮 CPES-CRAFT", link: "/craft" },
      { text: "💖 Nous Aider", link: "/contribution" },
    ],
    footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2019-2025 FUNASITIEN",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/fiches-me/cpes1" },
      { icon: "discord", link: "https://dsc.gg/drmcld" },
    ],
  },
  sitemap: {
    hostname: "https://fiches.funa.dev/cpes1",
  },
  transformPageData(ctx) {
    const canonicalUrl = `https://fiches.funa.dev/cpes1/${ctx.relativePath.replace(/\.(md|html)$/, "").replace(/\index$/, "")}`;
    ctx.frontmatter.head = ctx.frontmatter.head || [];
    ctx.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);
  },
};

const sections = [
  "maths",
  "eco",
  "info",
  "bio",
  "contribution",
  "livres",
  "craft",
  "stats",
];

const sidebarOptions = sections.map((section) => ({
  documentRootPath: "/",
  scanStartPath: section,
  resolvePath: `/${section}/`,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  excludeFilesByFrontmatterFieldName: "draft",
  hyphenToSpace: true,
  underscoreToSpace: true,
}));

export default defineConfig(withSidebar(vitePressConfigs, sidebarOptions));
