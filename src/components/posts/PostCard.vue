<script setup lang="ts">
interface Posts {
  id: string
  content: {
    title: string
    imageurl: string
    smalldesc: string
    longdesc: string
  }
  tags: string[]
}

const post = defineProps<Posts>()
</script>

<template>
  <div class="bg-slate-800 text-white rounded-xl p-5">
  <div class="flex flex-col">
    <p class="self-end font-light text-gray-400">id: {{ post.id }}</p>
    <p><span class="font-bold">Title:</span> {{ post.content.title }}</p>
    <p><span class="font-bold">imageurl:</span> {{ post.content.imageurl }}</p>
    <p><span class="font-bold">Small Description:</span> {{ post.content.smalldesc }}</p>
    <p><span class="font-bold">Long Description:</span> {{ post.content.longdesc }}</p>
    </div>
    <div class="flex flex-row py-3 gap-5">
      <p class="self-center">Tags: </p>
        <p class=" bg-slate-900 p-2 rounded-xl font-semibold" v-for="tags in post.tags" :key="post.id+'.'+ tags">{{ tags }}</p>
        <div class="flex justify-self-end ms-auto flex-row gap-5 justify-end">
      <button class=" bg-slate-900 p-2 rounded-xl font-semibold">Edit</button>
      <button class=" bg-slate-900 p-2 rounded-xl font-semibold">Delete</button>
    </div>
    </div>
    
  </div>
</template>
