import { createRouter, createWebHashHistory } from 'vue-router'

import Album from './pages/Album.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/album',
    component: Album
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})