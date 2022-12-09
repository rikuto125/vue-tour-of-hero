import {createRouter, createWebHistory } from 'vue-router'
import Heroes from '../components/pages/Heroes'
import HeroDetail from '../components/pages/HeroDetail'

// HeroesからHeroDetailへデータを渡すために、routingの設定
const routes = [
    {
        path: '/',
        component: Heroes
    },
    {
        path: '/heroes',
        component: Heroes
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: HeroDetail,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router