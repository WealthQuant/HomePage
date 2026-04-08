import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/products/house',
    name: 'houseQuant',
    component: () => import('../views/products/HouseQuant.vue')
  },
  {
    path: '/products/stock',
    name: 'stockQuant',
    component: () => import('../views/products/StockQuant.vue')
  },
  {
    path: '/products/collectible',
    name: 'collectibleQuant',
    component: () => import('../views/products/CollectibleQuant.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
