import { createApp } from 'vue'
import App from './App.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router.js'
import { store } from './store.js'
import axios from "axios"

// import 'bootstrap/dist/css/bootstrap.css'
import '../static/css/global.css'



const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)


// import 'bootstrap/dist/js/bootstrap.js'


// global axios
axios.defaults.baseURL = 'http://localhost:5000'
app.config.globalProperties.$axios = axios

app.provide("$axios", app.config.globalProperties.$axios);


app.mount('#app')