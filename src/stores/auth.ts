import { login } from '@/services/api'
import { ref } from 'vue'
import { defineStore } from 'pinia'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<AuthState>({
    token: null,
    isAuthenticated: false
  })
  const setAuthToken = (givenJWT: any) => {
    auth.value.token = givenJWT
  }
  const getAuthToken = () => {
    return auth.value.token
  }
  const setAuthState = (state: boolean) => {
    auth.value.isAuthenticated = state
  }
  const fetchAuthToken = async (credentials: any) => {
    try {
      const fetchToken = (await login(credentials)).data
      console.log(fetchToken)

      if (fetchToken !== null || fetchToken !== '' || fetchToken !== undefined) {
        setAuthToken(fetchToken)
        setAuthState(true)
      }
    } catch (e) {
      alert(e)
    }
  }
  return {
    auth,
    fetchAuthToken,
    getAuthToken
  }
})
