import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import About from './components/AboutPage.vue';
import Blog from './components/BlogPage.vue';
import NotFound from './components/redicetPage.vue'

const routes = [
    {
        path: "/home",
        name : "home",
        component : Home
    },
    {
        path : "/blog",
        name : "blog",
        component: Blog
    },
    {
        path : "/about",
        name: "about",
        component : About
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: '/not-found'
    },
     
    {
        path: '/not-found',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; 

