import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'home', path: '/', component: () => import('@/views/HomeView.vue')},
    { name: 'posts', path: '/post/:id', component: () => import('@/views/PostView.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
//todo: сделать пересылку на компонент о сообщении ошибки, если она есть

export default router