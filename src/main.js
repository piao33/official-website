import './assets/css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import 'element-plus/theme-chalk/display.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import echarts from './echarts'

import navVue from '@/components/nav.vue';
const app = createApp(App)

// app.provide('$echarts', echarts)

app.component('mNav', navVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
