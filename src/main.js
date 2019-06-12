import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://stock-trader-b983e.firebaseio.com/'
Vue.prototype.$http = axios

Vue.filter('currency', value => '$' + value.toLocaleString());

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
