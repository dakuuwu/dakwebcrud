import { getPosts, editPost, deletePost } from '@/services/api'
import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

interface postlistState {
  post:
    | [
        {
          id: string
          content: {
            title: string
            imageurl: string
            smalldesc: string
            longdesc: string
          }
          tags: []
        }
      ]
    | []
}

export const usePostsStore = defineStore('postlist', () => {
  const posts = reactive<postlistState>([])
  function getAllPosts() {
    return posts
  }
  function getPostByTitle(title) {
    ;() => {
      for (let i = 0; i < posts.length; i++) {
        if (posts.length[i].content.title.match(title)) return i
      }
    }
  }
  function getPostByID(id) {
    ;() => {
      for (let i = 0; i < posts.length; i++) {
        if (posts.length[i].id.match(id)) return i
      }
    }
  }
  const setPostList = (plist: String[]) => {
    if (posts.length > 0) {
      posts.length = 0
    }
    posts.push(...plist)
  }
  const putUpdatedPost = async (updatedPost) => {
    try {
      const putPost = await editPost(updatedPost)
      console.log(putPost)

      fetchPostList()
    } catch (e) {
      alert(e)
      console.warn(updatedPost)
    }
  }
  const delPost = async (id) => {
    try {
      const delPost = await deletePost(id)
      console.log(delPost)

      fetchPostList()
    } catch (e) {
      alert(e)
      console.warn()
    }
  }
  return {
    posts,
    getAllPosts,
    getPostByTitle,
    getPostByID,
    setPostList,
    putUpdatedPost,
    deletePost
  }
})

export default usePostsStore
