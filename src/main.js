import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import {store} from './store/store'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from "./router"

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(firestorePlugin);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

