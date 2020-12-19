// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Lazyload } from 'vant'

// css
import '@/assets/css/global.scss'
import '@/assets/css/flex.css'
import '@/assets/css/app.css'
// js
import '@/assets/js/config.js'
import '@/assets/js/utils.js'
import '@/assets/js/api.js'

Vue.use(Lazyload)
Vue.config.productionTip = false

// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  /* eslint-disable no-new */
  new VConsole()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
