<script setup>
import NewsItem from "@/components/news/NewsItem.vue";
import {onMounted, ref} from "vue";
import {NewsServices} from "@/api/newsServices.js";

const posts = ref([]);

const getIndexPosts =  () => {
  NewsServices.getIndexNews()
      .then(data => posts.value = data)
      .catch(error => console.log(error));
}
onMounted(() => {
  getIndexPosts()
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
