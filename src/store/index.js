import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter:0,
    colorCode: 'blue'
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCounter(state,random) {
      state.counter += random

    },
    prevCounter(state,data) {
      state.counter -= data
    },
    setColorCode(state,a){
      state.colorCode = a
    }
  },
  actions: {
    increaseCounter({ commit }){
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1').then(res => {
        commit('increaseCounter',res.data)
      })
    },
    prevCounter({commit}) {
      axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1').then(res => {
        commit('prevCounter',res.data)
      })
    },
    setColorCode({commit},newValue){
      commit('setColorCode', newValue)
    }
  },
  modules: {
  }
})
