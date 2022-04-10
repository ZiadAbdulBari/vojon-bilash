import Home from '@/components/Home.vue';
import SignUp from '@/components/SignUp.vue';
import {createRouter,createWebHistory} from 'vue-router';


let routers = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup',
    }
]

let router = createRouter({
    history:createWebHistory(),
    routers
})

export default router;