import Vue from 'vue'
import Vuex from 'vuex'

import appModule from './modules/app'
import homeModule from './modules/home'
import meModule from './modules/me'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appM: appModule,
    homeM: homeModule,
    meM: meModule
  },
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    token: '',
    profiles: {}
  },
  mutations: {},
  actions: {},
  getters: {}
})
