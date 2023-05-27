import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dhamma corner",
  description: "Svakhato bagavata dhammo",
  srcDir: 'dhamma',
  head: [
    ['link', { rel: 'icon', href: '/dhamma-wheel.svg' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GKQS2KMLEV' }],
    ['script', {}, `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GKQS2KMLEV');
    `.replace(/\s+/, '')],
  ],
  themeConfig: {
    logo: '/dhamma-wheel.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Youtube', link: 'https://www.youtube.com/@sinerus6555/playlists' },
      { text: 'Official Facebook', link: 'https://www.facebook.com/watboonyawad' },
      { text: 'Official Youtube', link: 'https://www.youtube.com/@watboonyawad-official4548' }
    ],

    sidebar: [
      {
        text: 'Ajahn Dtun (Thiracitto)',
        link: '/ajahn-dtun',
      },
      {
        text: 'Nigrodharama forest monastery',
        link: '/nigrodharama',
        collapsed: false,
        items: [
          ...[13, 14, 15, 16, 17].map(/** @returns {import('vitepress').DefaultTheme.Config.SidebarItem} */day => ({
            text: `${day} Mar 2023`, link: `/nigrodharama/${day}-03-2023`
          })),
        ],
      },
      {
        text: 'Questions & answers',
        link: '/qa',
        collapsed: false,
        items: [
          {
            text: 'General',
            collapsed: true,
            items: [
              { text: 'Difference between magga and phala?', link: '/qa/general/difference-magga-phala' },
            ]
          },
          {
            text: 'On meditation',
            collapsed: true,
            items: [
              { text: 'How does one know when to change meditation object?', link: '/qa/meditation/when-to-change-meditation-object' },
              { text: 'When meditate focus on the light or the breath?', link: '/qa/meditation/focus-on-light-or-breath' },
            ]
          }
        ]
      },
      {
        text: 'Terminology',
        link: '/terminology'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bigopon/dhamma-corner' },
      { icon: 'youtube', link: 'https://www.youtube.com/@sinerus6555/playlists' }
    ]
  },
  vite: { plugins: [
    SearchPlugin({
      previewLength: 62,
      buttonLabel: "Search",
      placeholder: "Search docs",
      allow: [],
      ignore: [],
    })
  ]}
})
