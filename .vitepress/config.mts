import { defineConfig } from 'vitepress'
import { sidebarConfig } from './config/sidebar'
import { socialLinksConfig } from './config/socialLinks'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冬夏凝思",
  description: "ATRI&GINKA拜年祭",
  base: '/',
  srcDir: 'articles',
  outDir: './dist',
  // sitemap: { hostname: 'https://soft.moe' },
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon-32x32.webp',

    lastUpdated: {
      text: 'Last Updated At',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'post', link: '/post/publicity' },
      { text: 'weekpaper', link: '/weekpaper/weekpaper_1' },
      { text: 'event', link: '/event/mini-story' },
    ],

    sidebar: sidebarConfig,

    socialLinks: socialLinksConfig,

    search: {
      provider: 'local',
    },
  },

  markdown: {
    lineNumbers: true,
  },

  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: "/articles", // markdown files directory
        titleFromFile: true, // use markdown file's first title as sidebar title
        // You can also set options to adjust sidebar data
        // see option document below
      })
    ]
  },
})
