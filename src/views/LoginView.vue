<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { login } from '@/services/api'
const usernameRef = ref('')
const passwordRef = ref('')
let loginError = computed(() => useAuthStore().getErrorState())
const tryLogin = () => {
  login(usernameRef.value, passwordRef.value)
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
      @submit.prevent="tryLogin()"
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
          @keypress="useAuthStore().setErrorState(false)"
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
          @keypress="useAuthStore().setErrorState(false)"
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
