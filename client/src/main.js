import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import store from "./store";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
