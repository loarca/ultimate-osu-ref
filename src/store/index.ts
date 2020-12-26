import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from '@/types'
import { BanchoClient } from 'bancho.js'

Vue.use(Vuex)

export default new Vuex.Store<AppState>({
  state: {
    client: new BanchoClient({
      username: 'Loarca',
      password: '2923c743'
    }),
    users: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
