import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Devs from './views/Devs.vue'
import GameDevs from './views/GameDevs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'About me',
      component: Home
    },
    {
      path: '/devs',
      name: 'Devs',
      component: Devs
    },
    {
      path: '/gamedevs',
      name: 'GameDevs',
      component: GameDevs
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
