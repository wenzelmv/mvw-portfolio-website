import './assets/main.css'
import '@formkit/themes/genesis'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(plugin, defaultConfig)

app.mount('#app')
