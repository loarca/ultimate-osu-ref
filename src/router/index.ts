import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Settings from '@/views/Settings.vue'
import DM from '@/views/DM.vue'
import Lobby from '@/views/Lobby.vue'

Vue.use(VueRouter)

const routes = [
  // About
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // Settings
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  // DMs
  {
    path: '/dm/:id',
    name: 'dm',
    component: DM
  },
  // Lobbies
  {
    path: '/lobby/:id',
    name: 'lobby',
    component: Lobby
  }
]

const router = new VueRouter({
  routes
})

export default router
