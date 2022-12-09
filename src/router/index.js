import Heroes from '../components/pages/Heroes'
import HeroDetail from '../components/pages/HeroDetail'
import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/components/pages/Dashboard";

// HeroesからHeroDetailへデータを渡すために、routingの設定
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
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetail,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router