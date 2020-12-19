const state = {
  navTitle: 'Title',
  navShowBack: false
}

const mutations = {

}

const actions = {

}

const getters = {
  getNavTitle (state) {
    return state.navTitle
  },
  getNavShowBack (state) {
    return state.navShowBack
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
