import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/connexion',
            name: 'connexion',
            component: () => import('../views/ConnexionView.vue')
        },
        {
            path: '/inscription',
            name: 'inscription',
            component: () => import('../views/InscriptionView.vue')
        },
        {
            path: '/motdepasseoublie',
            name: 'motdepasseoublie',
            component: () => import('../views/MotDePasseOublieView.vue')
        },
        {
            path: '/chat',
            name: 'chat',
            component: () => import('../views/ChatView.vue')
        }
    ]
})

export default router
