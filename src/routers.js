import SignUp from '@/components/SignUp.vue';
import Home from '@/components/Home.vue';
import {createRouter,createWebHashHistory} from 'vue-router';


let routers = [
    {
        name:'Home',
        component: Home,
        path:'/',
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup',
    }
]

let router = createRouter({
    history:createWebHashHistory(),
    routers
})

export default router;