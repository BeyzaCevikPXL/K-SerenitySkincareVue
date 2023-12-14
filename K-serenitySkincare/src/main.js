import '../scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import productenData from '../producten.json' // Adjust the path accordingly

const app = createApp(App)
const pinia = createPinia()

// Provide the productenData using provide before mounting the app
app.provide('productenData', productenData)

app.use(pinia)
app.use(router)
app.mount('#app')
