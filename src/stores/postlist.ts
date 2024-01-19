import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Post } from '@/typeDefinitions'

interface postlistState {
  post: {
    id: string
    content: {
      title: string
      imageUrl: string
      shortDesc: string
      longDesc: string
    }
    tags: string | string[]
  }
}
;[]

const postlistInit: postlistState = []

export const usePostsStore = defineStore('postlist', () => {
  const postlist = ref<postlistState>(postlistInit)
  function getAllPosts() {
    for (let i = 0; i < postlist.value.length; i++) {
      return i
    }
  }
  function getPostByTitle(title: string) {
    ;() => {
      for (let i = 0; i < postlist.value.length; i++) {
        if (postlist[i].value.post.content.title.match(title)) return i
      }
    }
  }
  function getPostByID(id: string) {
    ;() => {
      for (let i = 0; i < postlist.value.post.length; i++) {
        if (postlist[i].value.post.id.match(id)) return i
      }
    }
  }

  const setPostList = (plist: Post[]) => {
    if (postlist.value.length > 0) {
      postlist.value.length = 0
    }
    postlist.value.push(...plist)
  }
  //console.log(Object.values(postlist.value).length) TO CONSIDER
  return {
    postlist,
    getAllPosts,
    getPostByTitle,
    getPostByID,
    setPostList
  }
})

export default usePostsStore
