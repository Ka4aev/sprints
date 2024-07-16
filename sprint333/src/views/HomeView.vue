<script setup>
import { generateNewsItems } from "@/functions.js"
import NewsItems from "@/components/news/newsItems.vue";
const newsItems = generateNewsItems();
</script>

<template>
  <div class="container">
    <news-items
        :news-items="newsItems"
    />
  </div>
</template>