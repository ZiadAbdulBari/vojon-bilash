import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';
import {createRouter,createWebHistory} from 'vue-router';


let routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup',
    },
    {
        name: 'Login',
        component: Login,
        path: '/login',
    },
    {
        name: 'Add',
        component: Add,
        path: '/add',
    },
    {
        name: 'Update',
        component: Update,
        path: '/update/:id',
    }
]

let router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;