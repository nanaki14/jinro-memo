import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import gameStart from '@/views/gameStart'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/game-start',
      component: gameStart
    }
  ]
})
export default router
