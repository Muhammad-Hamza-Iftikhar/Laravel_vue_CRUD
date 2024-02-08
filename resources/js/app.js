require('./bootstrap');
import { createApp } from 'vue'; // Import createApp instead of importing Vue
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory from vue-router
import App from './components/App.vue';
import { routes } from './routes';
import VueAxios from 'vue-axios';
import axios from 'axios';

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp(App); // Use createApp to create a new Vue app instance
app.use(router);
app.use(VueAxios, axios); // Install VueAxios plugin for making HTTP requests
app.mount('#app');
