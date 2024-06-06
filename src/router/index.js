import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {path: '/', component: () => import('@/views/user.vue')},
  {path:'/order', component: () => import('@/views/order.vue')},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router