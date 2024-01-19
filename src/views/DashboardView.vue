<script setup lang="ts">
import PostCard from '@/components/posts/PostCard.vue'
import AddPostButton from '@/components/posts/AddPostButton.vue'
import AddModal from '@/components/posts/AddModal.vue'
import { onMounted, ref } from 'vue'
import { getPosts } from '@/services/api'
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
  <div class="bg-[#10051B] fixed inset-0 flex flex-col w-screen items-center justify-center">
    <div
      class="flex flex-col content-around align-around bg-slate-200 h-[90vh] w-[75vw] px-10 py-5 gap-5 shadow-xl rounded-xl"
    >
      <div
        class="border snap-y snap-mandatory flex-col flex gap-4 overflow-auto border-slate-400 rounded-xl w-full h-full p-5"
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
            class="snap-center"
            v-for="p in postData.postlist"
            :key="p.id"
            :id="p.id"
            :content="p.content"
            :tags="p.tags"
          />
        </TransitionGroup>
      </div>
      <AddPostButton class="self-center" @click="toggleAddModal" />
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
