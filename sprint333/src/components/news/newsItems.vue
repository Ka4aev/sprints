<script setup>
import NewsItem from "@/components/news/newsItem.vue";
defineProps({
  newsItems: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="news">
   <news-item
    v-for="(newsItem,index) in newsItems"
    :number="index + 1"
    :key="newsItem.id"
    :news-item="newsItem"
   />
  </section>
</template>

<style scoped lang="scss">

</style>