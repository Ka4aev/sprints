<script setup>
import NewsItems from "@/components/news/NewsItems.vue";

defineProps({
  componentKey:{
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="container">
    <news-items :key="componentKey"/>
  </div>
</template>