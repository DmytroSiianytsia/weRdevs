import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    month: '',
    day: '',
    dayOfWeek: [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'
    ],
    showPopup: false
  },
  mutations: {
    updateMonth (state, payload) {
      state.month = payload
    },
    updateDay (state, { num, index }) {
      state.day = num + ' ' + state.dayOfWeek[index]
    },
    togglePopup (state) {
      state.showPopup = !state.showPopup
    }
  }
})
