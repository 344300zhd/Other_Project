import Vue from 'vue'
import Vuex from 'vuex'
import {user} from "./vuex/user"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...user.state
  },
  mutations: {
    ...user.mutations
  },
  actions: {

  }
})
