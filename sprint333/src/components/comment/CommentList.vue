<script setup>
import { defineProps } from 'vue';
import CommentItem from './CommentItem.vue'; // Import the item component

defineProps({
  comments: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div>
    <CommentItem v-for="comment in comments" :key="comment.id" :commentId="comment" />
  </div>
</template>
