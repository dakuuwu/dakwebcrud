import { login } from '@/services/api';
import { defineStore } from 'pinia';

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(this: any, credentials: { username: string; password: string }) {
        try {
          const token = await login(credentials);
          this.setToken(token);
        } catch (error) {
          // Handle login error
        }
    },  
    setToken(this: any, token: string) {
      this.token = token;
    },
    clearToken(this: any) {
      this.token = null;
    },
  },
});

export default useAuthStore;