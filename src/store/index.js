import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    message: [],
    song: [],
    users: []
  },
  mutations: {
    setMessages (state, messages) {
      state.messages = messages
    },
    addMessage (state, newMessage) {
      state.message.push(newMessage)
    },
    setSong (state, song) {
      state.song = song
    },
    setUser (state, users) {
      state.users = users
    }
  },
  actions: {
    SOCKET_init (context, messages) {
      context.commit('setMessages', messages)
    },
    SOCKET_serverMessage (context, newMessage) {
      context.commit('addMessage', newMessage)
    },
    SOCKET_sentToUser (context, users) {
      console.log(users, '>>payload store')
      context.commit('setUser', users)
    },
    fetchSongData (context) {
      axios({
        method: 'GET',
        url: `${baseUrl}/api/song`
      })
        .then(({ data }) => {
          context.commit('setSong', data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
