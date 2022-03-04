import { createRouter, createWebHistory } from 'vue-router'
import intro from '@/views/intro.vue';
import Home from '@/views/Home.vue';

const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/intro', name: "Intro", component: intro }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;
