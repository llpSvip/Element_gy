import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)

let routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      tabName: '登录'
    },
    components: {
      login: ''
    }
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    alias: '/',
    meta: {
      tabName: '首页'
    },
    name: 'index',
    component: Index
  }
]

export default new Router({
	routes
})
