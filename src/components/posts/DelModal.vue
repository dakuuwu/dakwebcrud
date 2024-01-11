<template>
  <TransitionRoot
    :show="props.toggle"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog :initialFocus="cancelButtonRef" @close="closeModal" class="relative z-50">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true">
        <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel class="flex-col gap-5 flex w-full max-w-md rounded-xl bg-white p-4">
            <DialogTitle class="text-2xl font-semibold">Delete this post?</DialogTitle>
            <DialogDescription> This will <b>permanently</b> delete the post. </DialogDescription>
            <div class="flex gap-4 justify-end">
              <button
                class="p-2 rounded-xl bg-red-600 text-white font-semibold"
                @click="delPost(props.deletionID), closeModal"
              >
                Delete
              </button>
              <button class="p-2 border rounded-xl" ref="" @click="closeModal">Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription
} from '@headlessui/vue'
import { usePostsStore } from '../../stores/postlist.ts'

const emit = defineEmits(['closeModal'])

const delPost = async (id) => {
  usePostsStore().deletePost(id)
}
const closeModal = () => {
  emit('closeModal')
}
const props = defineProps({
  toggle: Boolean,
  deletionID: String
})
</script>
