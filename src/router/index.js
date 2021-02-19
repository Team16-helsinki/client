import Vue from 'vue'
import VueRouter from 'vue-router'
import UserStart from '../views/UserStart.vue'
import ListRoom from '../views/ListRoom.vue'
import PlayRoom from '../views/PlayRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserStart',
    component: UserStart
  },
  {
    path: '/room',
    name: 'ListRoom',
    component: ListRoom
  },
  {
    path: '/playroom',
    name: 'PLayRoom',
    component: PlayRoom
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
