import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/motors',
    name: 'Motors',
    component: () => import('@/views/MotorsPage.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/CategoriesPage.vue'),
  },
  {
    path: '/motor-edit/:id?',
    name: 'MotorEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/MotorEdit.vue'),
  },
  {
    path: '/category-edit/:id?',
    name: 'CategoryEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/CategoryEdit.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/MotorsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
