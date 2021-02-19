import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'
export default new Vuex.Store({
  state: {
    messages: [],
    songs: [],
    users: [],
    started: false
  },
  mutations: {
    setMessages (state, messages) {
      state.messages = messages
    },
    addMessage (state, newMessage) {
      state.messages.push(newMessage)
    },
    setSong (state, songs) {
      state.songs = songs
      state.started = true
    },
    setUser (state, users) {
      state.users = users
    },
    setUserFromServer(state, users) {
      state.users = users
    },
    restartGame (state) {
      state.messages = [],
      state.songs = [],
      state.users = [],
      state.started = false
      localStorage.clear()
      router.push('/')
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
    SOCKET_fetchSongData (context) {
      axios({
        method: 'GET',
        url: `${baseUrl}/api/song`
      })
        .then(({data}) => {
          console.log(data)
          context.commit('setSong', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    SOCKET_setUserFromServer(context, users){
      context.commit('setUserFromServer', users)
    },
    SOCKET_restartGame (context) {
      context.commit('restartGame')
    }
  },
  modules: {
  }
})
