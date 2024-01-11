<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PostCard from './components/posts/PostCard.vue'
import HelloWorld from './components/HelloWorld.vue'
import { onBeforeMount, reactive, watch } from 'vue'
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
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
<button @click="console.log(posts)">test</button>
      <PostCard v-for="a in usePostsStore().posts" :key="a.id" :id="a.id" :content="a.content" :tags="a.tags"  ></PostCard>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
