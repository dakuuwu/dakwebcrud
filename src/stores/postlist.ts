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
  function getPostFromStore() {
    return posts.post
  }
  const setPostList = (plist: String[]) => {
    if (posts.length > 0) {
      posts.length = 0
    }
    posts.push(...plist)
  }
  const fetchPostList = async () => {
    try {
      const fetchPosts = await getPosts()
      console.log(JSON.stringify(fetchPosts))
      setPostList(fetchPosts)
    } catch (e) {
      alert(e)
    }
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
    getPostFromStore,
    fetchPostList,
    putUpdatedPost,
    deletePost
  }
})

export default usePostsStore
