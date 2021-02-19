import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  },
  withCredentials: true
}))
Vue.config.productionTip = false
// Vue.use(VueSocketIO, 'http://localhost:3000')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
