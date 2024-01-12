<script setup lang="ts">
import { ref } from 'vue'
import DelModal from './DelModal.vue'
import EditModal from './EditModal.vue'
interface Posts {
  id: String
  content: {
    title: String
    imageurl: String
    smalldesc: String
    longdesc: String
  }
  tags: String[]
}

const delModalOpen = ref(false)
const toggleDelModal = function () {
  delModalOpen.value = !delModalOpen.value
}

const editModalOpen = ref(false)
const toggleEditModal = function () {
  editModalOpen.value = !editModalOpen.value
}

const post = defineProps<Posts>()
</script>

<template>
  <div id="wrapper">
    <div class="bg-slate-800 text-white rounded-xl p-5">
      <div class="flex flex-col">
        <p class="self-end font-light text-gray-400">id: {{ post.id }}</p>
        <p><span class="font-bold">Title:</span> {{ post.content.title }}</p>
        <p><span class="font-bold">imageurl:</span> {{ post.content.imageurl }}</p>
        <p><span class="font-bold">Small Description:</span> {{ post.content.smalldesc }}</p>
        <p><span class="font-bold">Long Description:</span> {{ post.content.longdesc }}</p>
      </div>
      <div class="flex flex-row py-3 gap-5">
        <p class="self-center">Tags:</p>
        <p
          class="bg-slate-900 p-2 rounded-xl font-semibold"
          v-for="tags in post.tags"
          :key="post.id + '.' + tags"
        >
          {{ tags }}
        </p>
        <div class="flex justify-self-end ms-auto flex-row gap-5 justify-end">
          <button
            type="button"
            @click="toggleEditModal"
            class="p-2 rounded-xl font-semibold bg-yellow-700"
          >
            Edit
          </button>
          <button
            type="button"
            @click="toggleDelModal"
            class="bg-red-600 p-2 rounded-xl font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <DelModal :toggle="delModalOpen" :deletionID="post.id" :postTitle="post.content.title" @closeModal="toggleDelModal" />
    <EditModal :toggle="editModalOpen" :post="post" @closeModal="toggleEditModal" />
  </div>
</template>
