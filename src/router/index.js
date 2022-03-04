import { createRouter, createWebHistory } from 'vue-router'
import intro from '@/views/intro.vue';
import Home from '@/views/Home.vue';

const routes = [
    { path: '/', name: "Intro", component: intro },
    { path: '/home', name: "Home", component: Home }
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;
