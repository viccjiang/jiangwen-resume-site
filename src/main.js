import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
