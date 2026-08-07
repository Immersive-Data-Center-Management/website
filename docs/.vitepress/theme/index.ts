import DefaultTheme from 'vitepress/theme'
import './custom.css'
import GitHubButton from './components/GitHubButton.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GitHubButton', GitHubButton)
  },
} satisfies Theme