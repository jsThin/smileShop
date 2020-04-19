import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/style/reset.css'
import less from 'less'
import {Button,Col,Row, Swipe, SwipeItem,Lazyload,List } from 'vant'
import 'vant/lib/index.css';

Vue.use(less)
Vue.use(Button).use(Col).use(Row).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
