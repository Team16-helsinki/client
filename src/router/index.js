import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserStart from '../views/UserStart.vue'
import ListRoom from '../views/ListRoom.vue'
import PlayRoom from '../views/PlayRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
