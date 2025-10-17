import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
    
    }, {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
        children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue'),
        }, {
          path: 'category/:id',//params参数
          component: () => import('@/views/Category/index.vue'),
        }
      ]
    }
  ],
})

export default router
