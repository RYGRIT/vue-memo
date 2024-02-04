import { localGetItem } from './../utils/index'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/home', redirect: '/' },
    { path: '/login', component: () => import('@/views/Login.vue') }
  ]
})

// 路由守卫
router.beforeEach(async to => {
  const loginUser = localGetItem('login_user')
  // 登录拦截
  if (!loginUser && to.path !== '/login') {
    return '/login'
  }
})
export default router
