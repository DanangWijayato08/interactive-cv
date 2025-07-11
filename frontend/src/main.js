// src/main.js
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import animateOnScroll from './directives/animateOnScroll'; // <-- Untuk animasi scroll lama
import scrollAnimate from './directives/scrollAnimate';     // <-- Untuk animasi masuk saat scroll (baru)

const app = createApp(App);

// Daftarkan kedua directive secara global
app.directive('animate-on-scroll', animateOnScroll);
app.directive('scroll-animate', scrollAnimate);

app.use(router);
app.mount('#app');
