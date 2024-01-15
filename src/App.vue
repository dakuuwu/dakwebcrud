<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>
