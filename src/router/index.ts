import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

function isAuthenticated() {
  // Implement your authentication logic here
  // For example, check if the user is logged in
  // You might use Vuex or another state management solution for this
  return true; // Replace with your authentication logic
}

export default router
