import { createApp } from 'vue'
import App from '@/App.vue'
// import globalComp from '@/components/globalComp/autoRegisterComp'
import plugin from './assets/plugin'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import '@/assets/index.js'

createApp(App)
  .use(plugin, {
    imports: []
  })
  .mount('#app')
