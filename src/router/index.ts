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
      meta: { transition: 'fade' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
  ]
})

/* router.beforeEach(async (to) => {
  if (
    // make sure the user is authenticated
    !useAuthStore().auth.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

router.beforeEach(async (to) => {
  if (
    // make sure the user is authenticated
    useAuthStore().auth.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name == 'login'
  ) {
    // redirect the user to the login page
    return false
  }
}) */


export default router
