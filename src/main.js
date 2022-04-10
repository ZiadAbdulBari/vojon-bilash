import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/css/style.css'
import 'axios';
import router from '@/routers.js';

createApp(App).use(router).mount('#app')
