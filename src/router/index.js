import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/pages/Dashboard'
import Heroes from '../components/pages/Heroes'
import HeroDetail from '../components/pages/HeroDetail'


const routes = [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/heroes',
            component: Heroes
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: HeroDetail
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router