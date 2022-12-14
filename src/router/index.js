import {createRouter, createWebHistory} from "vue-router";
import Heroes from '../components/pages/Heroes'
import HeroDetail from '../components/pages/HeroDetail'
import Dashboard from "@/components/pages/Dashboard";

//Atomic Design
import AtomicDashboard from "@/components/pages/AtomicDashboard";

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
        component: HeroDetail
    },
    //atomic designのrouting
    {
        path: '/atomic',
        component: AtomicDashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router