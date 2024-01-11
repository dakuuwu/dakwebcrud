<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" />

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" />

      <button type="submit">Login</button>
    </form>
    <form @submit.prevent="getPosts">
      <button type="submit">Posts</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { usePostsStore } from '../stores/postlist'

export default {
  setup() {
    const username = ref('')
    const password = ref('')

    const login = async () => {
      try {
        await useAuthStore().fetchAuthToken({
          username: username.value,
          password: password.value
        })

        // Redirect or perform other actions after successful login
        // Assuming you have a $router available in your component
        // You may need to use the router via inject or provide if not available
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error)
      }
    }

    const getPosts = async () => {
      try {
        await usePostsStore().fetchPostList()

        // Redirect or perform other actions after successful login
        // Assuming you have a $router available in your component
        // You may need to use the router via inject or provide if not available
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error)
      }
    }

    return {
      username,
      password,
      login,
      getPosts
    }
  }
}
</script>
