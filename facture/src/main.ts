import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Bill from './components/Bill.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/bill', name: 'bill', component: Bill}
    ]
});


createApp(App)
.use(router)
.mount('#app')
