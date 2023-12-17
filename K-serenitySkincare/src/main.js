import '../scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import productenData from '../producten.json' 

const app = createApp(App)
const pinia = createPinia()

app.provide('productenData', productenData)

app.use(pinia)
app.use(router)
app.mount('#app')
