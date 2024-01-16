<script setup lang="ts">
import PostCard from '@/components/posts/PostCard.vue'
import AddPostButton from '@/components/posts/AddPostButton.vue'
import AddModal from '@/components/posts/AddModal.vue'
import { onMounted, ref } from 'vue'
import { getPosts } from "@/services/api"
import { usePostsStore } from '../stores/postlist'
const postData = usePostsStore()

const addModalOpen = ref(false)
const toggleAddModal = function () {
  addModalOpen.value = !addModalOpen.value
}

onMounted(() => {
  getPosts()
})
</script>
<template>
  <div class="bg-slate-300 fixed inset-0 flex flex-col w-screen items-center justify-center">
    <div
      class="flex flex-col bg-slate-200 overflow-auto h-[90vh] w-[75vw] p-10 gap-2 shadow-xl rounded-xl"
    >
      <p
        v-show="postData.postlist.length === 0"
        :class="postData.postlist.length === 0 ? ' ' : ' absolute top-full'"
        class="text-center self-center content-center m-auto"
        key="emptyList"
      >
        There's no data to display.
      </p>
      <TransitionGroup name="fade">
        <PostCard
          v-for="p in postData.postlist"
          :key="p.id"
          :id="p.id"
          :content="p.content"
          :tags="p.tags"
        />
      </TransitionGroup>
      <AddPostButton @click="toggleAddModal" />
    </div>
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
