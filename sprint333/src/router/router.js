import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'home', path: '/', component: () => import('@/views/HomeView.vue')},
    { name: 'posts', path: '/post/:id', component: () => import('@/views/PostView.vue')},
    { name: 'not-found', path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router