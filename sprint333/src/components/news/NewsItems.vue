<script setup>
import NewsItem from "@/components/news/NewsItem.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {NewsServices} from "@/api/newsServices.js";

const posts = ref([]);

const getIndexPosts =  () => {
  NewsServices.getIndexNews()
      .then(data =>{
        posts.value = data.slice(0, 100);
      })
      .catch(error => console.log(error));
}

onMounted(() => {
  getIndexPosts();

  const intervalId = setInterval(() => {
    getIndexPosts();
  }, 60000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});
</script>

<template>
  <section class="news">
   <news-item
    v-for="(post,index) in posts"
    :number="index + 1"
    :key="post"
    :post="post"
   />
  </section>
</template>
