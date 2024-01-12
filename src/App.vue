<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PostCard from './components/posts/PostCard.vue'
import { onBeforeMount } from 'vue'
import {usePostsStore} from './stores/postlist'
onBeforeMount(()=>{
  const getPosts = async () => {
        try {
          await usePostsStore().fetchPostList();
  
          // Redirect or perform other actions after successful login
          // Assuming you have a $router available in your component
          // You may need to use the router via inject or provide if not available
        } catch (error) {
          // Handle login error
          console.error('Login failed:', error);
        }
      };
      getPosts()
})
let posts = usePostsStore().posts
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
<button @click="console.log(posts)">test</button>
      <PostCard v-for="a in usePostsStore().posts" :key="a.id" :id="a.id" :content="a.content" :tags="a.tags"  ></PostCard>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView v-slot="{Component, route}">
    <Transition :name="route.meta.transition || 'fade'">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

