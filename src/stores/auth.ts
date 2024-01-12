import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive<AuthState>({
    token: null,
    isAuthenticated: false
  })
  const setAuthToken = (givenJWT: any) => {
    auth.token = givenJWT
  }
  const getAuthToken = () => {
    return auth.token
  }
  const setAuthState = (state: boolean) => {
    auth.isAuthenticated = state
  }
  const getAuthState = () => {
    return auth.isAuthenticated
  }

  return {
    auth,
    setAuthToken,
    setAuthState,
    getAuthToken,
    getAuthState
  }
})
