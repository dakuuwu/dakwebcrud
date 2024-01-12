import axios from 'axios'
import { toRaw } from 'vue'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080'
})

apiClient.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
})

export const login = async (credentials: { username: string; password: string }) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/token',
      {},
      {
        auth: {
          username: credentials.username,
          password: credentials.password
        }
      }
    )
    return res
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
}

export const getPosts = async () => {
  try {
    const response = await apiClient.get('/posts')
    return response.data
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
}

export const editPost = async (updatedPost: Object) => {
  try {
    const res = await axios.put(
      'http://localhost:8080/updatepost/' + updatedPost.id,
      toRaw(updatedPost)
    )
    return res
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deletePost = async (id: String) => {
  try {
    const res = await axios.delete('http://localhost:8080/deletepost/' + id)
    return res
  } catch (error) {
    console.error(error)
    throw error
  }
}
