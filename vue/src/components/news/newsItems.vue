<script setup>

import NewsItem from "@/components/news/newsItem.vue";
</script>

<template>
  <section class="news">
   <news-item/>
  </section>
</template>

<style scoped lang="scss">
@import './../../assets/scss/index.scss';
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