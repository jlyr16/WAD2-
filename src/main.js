const { createApp } = require('vue');
import App from "./App.vue";
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

createApp(App).mount("#app");
Vue.use(Chartkick.use(Chart));
