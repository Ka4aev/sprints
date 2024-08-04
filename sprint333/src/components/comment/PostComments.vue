<script setup>
import PostComment from "@/components/comment/PostComment.vue";

defineProps({
  post:{
    type:Object,
    required:true
  }
})

</script>

<template>
  <div class="comments" v-if="post.kids">

    <post-comment
        v-for="(commentId) in post.kids"
        :post="post"
        :comment-id="commentId"
    />

  </div>
</template>

<style scoped lang="scss">
.comments{
  padding: 10px;
}
</style>