<script setup>
import {
  TransitionRoot,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription
} from '@headlessui/vue'
import { useAuthStore } from '../../stores/auth.ts'
import { usePostsStore } from '../../stores/postlist.ts'
import { apiClient } from '../../services/api.ts'

import axios from 'axios'

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}
const props = defineProps({
  toggle: Boolean,
  post: Object
})
const id = props.post.id
const title = props.post.content.title
const imageurl = 'mockURL/image.png'
const smalldesc = props.post.content.smalldesc
const longdesc = props.post.content.longdesc
const tags = props.post.tags.toString()

function titleVerifier(title) {
  if (title.trim() === '') {
    return 'Untitled'
  } else {
    return title
  }
}
function tagsVerifier(tags) {
  if (tags.trim() === '') {
    return ['Untagged']
  } else {
    return tags.split(',')
  }
}

const putPost = async (id, title, imageurl, smalldesc, longdesc, tags) => {
  axios
    .put(
      'http://localhost:8080/updatepost/' + id,
      {
        content: {
          title: titleVerifier(title),
          imageurl: 'mockURL/img.png',
          smalldesc: smalldesc,
          longdesc: longdesc
        },
        tags: tagsVerifier(tags)
      },
      {
        headers: {
          ['Authorization']: `Bearer ${useAuthStore().auth.token}`
        }
      }
    )
    .then((res) => {
      if (res.status === 200) {
        apiClient
          .get('/posts')
          .then((res) => {
            if (res.status === 200) {
              usePostsStore().setPostList(res.data)
            }
          })
          .catch((err) => {
            console.error(err)
          })
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
</script>

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
    <Dialog @close="closeModal" class="relative z-50">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true">
        <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel class="flex-col gap-5 flex w-full max-w-md rounded-xl bg-white p-4">
            <DialogTitle class="text-2xl font-semibold">Edit post details</DialogTitle>
            <DialogDescription class="text-sm italic">
              Editing the post with id: {{ id }}
            </DialogDescription>
            <form
              @submit.prevent="putPost(id, title, imageurl, smalldesc, longdesc, tags)"
              class="flex flex-col gap-2"
            >
              <div class="flex flex-col">
                <label for="posttitle">Title:</label>
                <input v-model="title" type="text" id="title" class="border p-2 rounded" />
              </div>
              <div class="flex flex-col">
                <label for="image">Image:</label>
                <input type="file" id="image" class="border p-2 rounded" disabled />
              </div>
              <div class="flex flex-col">
                <label for="smalldesc">Short Description:</label>
                <input v-model="smalldesc" type="text" id="smalldesc" class="border p-2 rounded" />
              </div>
              <div class="flex flex-col">
                <label for="longdesc">Long Description:</label>
                <textarea
                  v-model="longdesc"
                  rows="5"
                  name="longdesc"
                  id="longdesc"
                  class="border p-2 rounded"
                />
              </div>
              <div class="flex flex-col">
                <label for="tags">Tags (separated with comma):</label>
                <input v-model="tags" type="text" id="tags" class="border p-2 rounded" />
              </div>
              <div class="flex gap-4 justify-end">
                <button
                  type="submit"
                  class="p-2 rounded-xl bg-yellow-700 text-white font-semibold"
                  @click="closeModal"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="p-2 border rounded-xl"
                  ref="cancelButtonRef"
                  @click="closeModal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
