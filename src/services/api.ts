import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/postlist'
import { clientPostValidations } from '@/services/clientValidations'
import type { DesctructuredPost } from '@/typeDefinitions'
import router from '@/router'
const cpv = clientPostValidations()

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKAPI_URL
})

export const pubClient = axios.create({
  baseURL: import.meta.env.VITE_BACKAPI_URL
})

apiClient.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
})

export const login = async (usr: string, pwd: string) => {
  await apiClient
    .post(
      '/token',
      {},
      {
        auth: {
          username: usr,
          password: pwd
        }
      }
    )
    .then((res) => {
      if (res.status === 200) {
        useAuthStore().setAuthToken(res.data)
        useAuthStore().setAuthState(true)
        useAuthStore().setErrorState(false)
        router.push('/dashboard')
      }
    })
    .catch((err) => {
      console.error(err)
      useAuthStore().setErrorState(true)
    })
}

export const getPosts = async () => {
  await apiClient
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

export const addPost = async (
  title: string,
  imageUrl: string,
  shortDesc: string,
  longDesc: string,
  tags: string
) => {
  await apiClient
    .post(
      '/newpost',
      {
        content: {
          title: cpv.titleVerifier(title),
          imageUrl: cpv.imgUrlVerifier(imageUrl),
          shortDesc: shortDesc,
          longDesc: longDesc
        },
        tags: cpv.tagsVerifier(tags)
      },
      {
        headers: {
          ['Authorization']: `Bearer ${useAuthStore().auth.token}`
        }
      }
    )
    .then((res) => {
      if (res.status === 201) {
        getPosts()
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

export const updatePost = async (updatedPost: DesctructuredPost) => {
  apiClient
    .put(
      '/updatepost/' + updatedPost.id,
      {
        content: {
          title: cpv.titleVerifier(updatedPost.title),
          imageUrl: cpv.imgUrlVerifier(updatedPost.imageUrl),
          shortDesc: updatedPost.shortDesc,
          longDesc: updatedPost.longDesc
        },
        tags: cpv.tagsVerifier(updatedPost.tags)
      },
      {
        headers: {
          ['Authorization']: `Bearer ${useAuthStore().auth.token}`
        }
      }
    )
    .then((res) => {
      if (res.status === 200) {
        getPosts()
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

export const deletePost = async (id: String | undefined) => {
  await apiClient
    .delete('/deletepost/' + id, {
      headers: {
        ['Authorization']: `Bearer ${useAuthStore().auth.token}`
      }
    })
    .then((res) => {
      if (res.status === 204) {
        getPosts()
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
