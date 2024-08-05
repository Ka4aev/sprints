<script setup>
import NewsItem from "@/components/news/NewsItem.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { NewsServices } from "@/api/newsServices.js";
import { intervalId } from "@/functions.js";

const posts = ref([]);

const getIndexPosts = async () => {
  posts.value = (await NewsServices.getIndexNews()).slice(0,100)
}

intervalId(() => getIndexPosts())

onMounted(() => {
  getIndexPosts();
});

onUnmounted(() => {
  clearInterval(intervalId(() => getIndexPosts()));
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
