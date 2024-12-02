
import './assets/main.scss'

import { createApp, provide, ref } from 'vue'
import App from './App.vue'
import { getEntries } from './composables/getEntries.js';
const { data, error } = getEntries({ content_type: 'gallery' });
import router from './router'

const app = createApp(App);
let convertedData = [];
convertedData.push(data.value);
app.provide('gallery', { data, data, error, convertedData})

app.use(router);
app.mount('#app');

