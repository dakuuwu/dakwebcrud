import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { transition: 'fade' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
  ]
})

router.beforeEach(async (to) => {
  if (!useAuthStore().auth.isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
})

//Stop navigation if person tries to return to login manually
router.beforeEach(async (to) => {
  if (useAuthStore().auth.isAuthenticated && to.name == 'login') {
    return false
  }
})

export default router
