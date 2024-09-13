import { createApp } from 'vue';  // Importa createApp desde Vue 3
import App from './App.vue';
import store from './store/index,js';
import router from './router';
import  './assets/base.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
