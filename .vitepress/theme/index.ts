// https://vitepress.dev/guide/custom-theme
/// <reference path="./vue.types.d.ts" />
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import BannerImage from './components/banner-img.vue';
import Youtube from './components/youtube.vue';
import AjahnDtun from './components/ajahn-dtun.vue';

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
    app.component('BannerImage', BannerImage);
    app.component('Youtube', Youtube);
    app.component('AjahnDtun', AjahnDtun);
  }
}
