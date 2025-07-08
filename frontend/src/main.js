// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll'; // <-- Impor directive

const app = createApp(App);

app.directive('animate-on-scroll', animateOnScroll); // <-- Daftarkan directive global
app.use(router);
app.mount('#app');
