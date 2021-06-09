import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Enroll from '../views/Enroll'
import Home from '../views/Home'
import twoPeople from '../views/twoPeople'
import Bofang_right from '../views/Bofang_right'
import GeRenZhongXin from '../views/GeRenZhongXin'
import Bofang_left from '../views/Bofang_left'
import Emial from '../views/Emial'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path:'/enroll',
    name:'enroll',
    component:Enroll
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/bofang_right',
    name:'bofang_right',
    component:Bofang_right
  },
  {
    path:'/twopeople',
    name:'twopeople',
    component:twoPeople
  },
  {
    path:'/gerenzhongxin',
    name:'gerenzhongxin',
    component:GeRenZhongXin
  },
  {
    path:'/bofang_left',
    name:'bofang_left',
    component:Bofang_left
  },
  {
    path:'/emial',
    name:'emial',
    component:Emial
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
