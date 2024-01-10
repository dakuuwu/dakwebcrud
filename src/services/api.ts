import axios from "axios";
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  // You can add other configurations here, such as headers or timeout settings
});

export const login = async (credentials : {username: string, password: string}) => {
  try {
    const response = await apiClient.post("/token", {}, {
        auth: {
          username: credentials.username,
          password: credentials.password
        }} );
    return response.data.token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};


export const getPosts = async () => {
    try {
      const response = await apiClient.get("/posts");
      return response.data.posts;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };