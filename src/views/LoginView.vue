<script lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { apiClient } from '../services/api'
import router from '@/router'

export default {
  setup() {
    const usernameRef = ref('')
    const passwordRef = ref('')
    let loginError = ref(false)
    const login = () =>
      apiClient
        .post(
          '/token',
          {},
          {
            auth: {
              username: usernameRef.value,
              password: passwordRef.value
            }
          }
        )
        .then((res) => {
          if (res.status === 200) {
            useAuthStore().setAuthToken(res.data)
            useAuthStore().setAuthState(true)

            router.push('/dashboard')
          }
        })
        .catch((err) => {
          loginError.value = true
          console.error(err)
        })
    return {
      usernameRef,
      passwordRef,
      loginError,
      login
    }
  }
}
</script>

<template>
  <div class="bg-slate-200 fixed inset-0 flex flex-col w-screen items-center justify-center">
    <div
      v-show="loginError"
      class="animate-pulse absolute align-middle flex gap-7 w-100 bg-red-700 p-2 text-white text-center inset-x-0 top-0 font-semibold"
    >
      <p class="ms-4 font-extrabold text-2xl">!</p>
      <p class="self-center">Wrong credentials</p>
    </div>
    <form
      @submit.prevent="login"
      class="flex flex-col border border-slate-300 rounded-xl shadow p-8 w-fit content-around justify-center gap-4"
    >
      <div class="flex flex-col gap-1">
        <label for="username">Username:</label>
        <input
          v-model="usernameRef"
          class="px-3 py-1 rounded-lg border"
          :class="loginError ? '  border-red-600' : ' border-transparent'"
          type="text"
          id="username"
          @keypress="loginError = false"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="password">Password:</label>
        <input
          v-model="passwordRef"
          class="px-3 py-1 rounded-lg border"
          :class="loginError ? '  border-red-600' : ' border-transparent'"
          type="password"
          id="password"
          @keypress="loginError = false"
        />
      </div>
      <button
        type="submit"
        class="p-2 bg-slate-700 mx-auto rounded-xl px-8 w-fit align-self-center text-white font-bold"
      >
        Login
      </button>
    </form>
  </div>
</template>
