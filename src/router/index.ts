import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', // 首页相册中心
    redirect: '/home'
  },
  {
    path: '/home', // 首页相册中心
    name: 'Home',
    component: () => import(/* webpackChunkName: "slide" */ '../views/Home/Home.vue')
  },
  {
    path: '/template1', // 相册模板
    name: 'template1',
    component: () => import(/* webpackChunkName: "slide" */ '../views/SlideTemplate/Template1/Template1.vue')
  },
  {
    path: '/makeSlide',// 制作幻灯片相册
    name: 'makeSlide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "makeSlide" */ '../views/MakeSlide/MakeSlide.vue')
  },
  {
    path: '/personal',
    name: 'personal',// 个人中心
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "personal" */ '../views/Personal/Personal.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
