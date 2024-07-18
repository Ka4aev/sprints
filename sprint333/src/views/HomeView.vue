<script setup>
import { generateNewsItems } from "@/functions.js"
import NewsItems from "@/components/news/newsItems.vue";
import {NewsServices} from "@/api/NewsServices.js";
import {ref} from "vue";
const newsItems = generateNewsItems();

const news = ref()

</script>

<template>
  <div class="container">
    <news-items
        :news-items="newsItems"
    />
  </div>
</template>