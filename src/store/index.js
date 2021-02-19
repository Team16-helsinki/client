import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // songs: ['bayu', 'ada', 'fans', 'ngawurr', 'bissmillah', 'kelar', 'woi', 'asdasd', 'qweqwe', 'asdasdas 10'],
    songs: [
      'https://open.spotify.com/embed/track/630DpnzdfjdVqv2yLfPbAX',
      'https://open.spotify.com/embed/track/2wAiFWjRupWmnDkQcu91MF',
      'https://open.spotify.com/embed/track/2wAiFWjRupWmnDkQcu91MF'
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
