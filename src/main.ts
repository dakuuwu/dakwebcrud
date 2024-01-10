import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth';


import App from './App.vue'
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app');
