<script setup lang="ts">
import PostCard from '@/components/posts/PostCard.vue'
import AddPostButton from '@/components/posts/AddPostButton.vue'
import AddModal from '@/components/posts/AddModal.vue'
import { onMounted, ref } from 'vue'
import { apiClient } from '@/services/api'
import { usePostsStore } from '../stores/postlist'
const postList = usePostsStore()

const addModalOpen = ref(false)
const toggleAddModal = function () {
  addModalOpen.value = !addModalOpen.value
}

onMounted(() => {
  apiClient
    .get('/posts')
    .then((res) => {
      if (res.status === 200) {
        postList.setPostList(res.data)
      }
    })
    .catch((err) => {
      console.error(err)
    })
})
</script>
<template>
  <div class="bg-slate-300 fixed inset-0 flex flex-col w-screen items-center justify-center">
    <div
      class="flex flex-col bg-slate-200 overflow-auto h-[90vh] w-[75vw] p-10 gap-2 shadow-xl rounded-xl"
    >
      <p
        v-show="postList.posts.length === 0"
        :class="postList.posts.length === 0 ? ' ' : ' absolute top-full'"
        class="text-center self-center content-center m-auto"
        key="emptyList"
      >
        There's no data to display.
      </p>
      <TransitionGroup name="fade">
        <PostCard
          v-for="p in postList.posts"
          :key="p.id"
          :id="p.id"
          :content="p.content"
          :tags="p.tags"
        />
      </TransitionGroup>
    </div>
    <AddPostButton @click="toggleAddModal" />
    <AddModal :toggle="addModalOpen" @closeModal="toggleAddModal" />
  </div>
</template>
<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
