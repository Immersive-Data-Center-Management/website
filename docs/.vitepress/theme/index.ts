import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import NewsArticleDate from './components/NewsArticleDate.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => h(NewsArticleDate)
  }),
  async enhanceApp() {
    if (typeof window !== 'undefined') {
      const { setTheme } = await import('@ui5/webcomponents-base/dist/config/Theme.js')
      await setTheme('sap_horizon')
      await import('@ui5/webcomponents/dist/Icon.js')
      await import('@ui5/webcomponents-icons/dist/it-host.js')
      await import('@ui5/webcomponents-icons/dist/vr-glasses.js')
      await import('@ui5/webcomponents-icons/dist/dimension.js')
    }
  }
} satisfies Theme
