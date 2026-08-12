import './style.css'
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'

export default {
  extends: DefaultTheme,
  NotFound: NotFound
}