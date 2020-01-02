// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/common.css'

axios.defaults.withCredentials=true
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

Vue.use(VueWechatTitle)
Vue.use(Vant)

router.beforeEach((to, from, next) => {
  if (to.path=='/mettingflow'&&from.path=='/home') {
    sessionStorage.setItem('flag',0)
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
