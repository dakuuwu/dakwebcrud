import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Post } from '@/typeDefinitions'

interface postlistState {
  post: {
    id: string
    content: {
      title: string
      imageurl: string
      smalldesc: string
      longdesc: string
    }
    tags: string | string[]
  }[]
}

let postlistInit : postlistState

export const usePostsStore = defineStore('postlist', () => {
  const postlist = reactive<postlistState>(postlistInit)
  function getAllPosts() {
    return postlist
  }
  function getPostByTitle(title: string) {
    ;() => {
      for (let i = 0; i < postlist.post.length; i++) {
        if (postlist.post[i].content.title.match(title)) return i
      }
    }
  }
  function getPostByID(id: string) {
    ;() => {
      for (let i = 0; i < postlist.post.length; i++) {
        if (postlist.post[i].id.match(id)) return i
      }
    }
  }

  const setPostList = (plist: Post[]) => {
    if (postlist.post.length > 0) {
      postlist.post.length = 0
    }
    postlist.post.push(...plist)
  }
  return {
    postlist,
    getAllPosts,
    getPostByTitle,
    getPostByID,
    setPostList
  }
})

export default usePostsStore
