import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login/Login.vue'
import Register from './pages/Register/Register.vue'
import HomePage from './pages/HomePage/HomePage.vue'
import Menu from './pages/Menu/Menu.vue'
import Questions from './pages/Questions/Questions.vue'
import Match from './pages/Match/Match.vue'
import Edit from './pages/Edit/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/questions',
    component: Questions
  },
  {
    path: '/match',
    component: Match
  },
  {
    path: '/edit',
    component: Edit
  }
  
   
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router