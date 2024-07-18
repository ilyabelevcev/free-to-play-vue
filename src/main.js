import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';

// global-components
import components from '@/components/UI'


const app = createApp(App);
components.forEach(component => {
  app.component(component.name, component)
});
app.use(store).use(router).use(VueAxios, axios).use(PrimeVue).mount('#app');





// import HelloWorld from '@/components/HelloWorld.vue'
// app.component('HelloWorld', HelloWorld);

