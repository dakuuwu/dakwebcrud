import { getPosts } from '@/services/api';
import { defineStore } from 'pinia';

interface postState {
  post: object | null;
}

export const usePostsStore = defineStore({
  id: 'posts',
  state: (): postState => ({
    post: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.post,
  },
  actions: {
    async getPost() {
        try { 
          const res = await getPosts();
          console.log(JSON.stringify(res));
          
        } catch (error) {
          // Handle login error
        }
    },  
  },
});

export default usePostsStore;