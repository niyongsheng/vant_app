import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import '@/assets/css/global.scss'
import '@/assets/css/flex.css'
import '@/assets/css/app.css'
// js
import '@/assets/js/config.js'
import '@/assets/js/utils.js'
import '@/assets/js/api.js'

Vue.config.productionTip = false

// 开发环境下自动启用vConsole调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  /* eslint-disable no-new */
  new VConsole()
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
