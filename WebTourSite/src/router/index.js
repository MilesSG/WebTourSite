import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '首页' }
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: () => import('../views/DestinationsView.vue'),
      meta: { title: '目的地' }
    },
    {
      path: '/tours',
      name: 'tours',
      component: () => import('../views/ToursView.vue'),
      meta: { title: '旅游套餐' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: '关于我们' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - WebTourSite`
  next()
})

export default router
