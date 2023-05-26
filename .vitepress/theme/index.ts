// https://vitepress.dev/guide/custom-theme
/// <reference path="./vue.types.d.ts" />
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import BannerImage from './components/banner-img.vue';

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  /**
   * @param {{ app: import('vue').App }} param0
   */
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('BannerImage', BannerImage)
  }
}
