import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dhamma corner",
  description: "Svakhato bagavata dhammo",
  srcDir: 'dhamma',
  head: [
    ['link', { rel: 'icon', href: 'dhamma-wheel.svg' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GKQS2KMLEV' }],
    ['script', {}, `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GKQS2KMLEV');
    `],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Nigrodharama',
        items: [
          {
            text: '13 Mar 2023',
            link: '/nigrodharama/13-03-2023'
          }
        ],
        // items: [
        //   // { text: 'Markdown Examples', link: '/markdown-examples' },
        //   // { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bigopon/dhamma-corner' }
    ]
  }
})
