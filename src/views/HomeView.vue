<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import axios from 'axios'

const test = () =>
  axios.delete('http://localhost:8080/deletepost/659ca71817348178df25c8b9').then((res) => {
    console.log(res)
  })
</script>

<template>
  <main>
    <TheWelcome />
    <button class="text-3xl" @click="test">TEST DELETE</button>
  </main>
</template>
