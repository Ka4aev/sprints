<script setup>
import NewsItem from "@/components/news/newsItem.vue";

</script>

<template>
  <section class="news">
   <news-item
    v-for="newsItem in 100"
    :key="newsItem.id"
    :news-item="newsItem"
   />
  </section>
</template>

<style scoped lang="scss">
.news{
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding: 2% 3%;
  background-color: $background-color;
}
</style>