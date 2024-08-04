<script setup>
import {newsTime} from "@/functions.js";
import {onMounted, ref} from "vue";
import {NewsServices} from "@/api/newsServices.js";

const props = defineProps({
  commentId:{
    type: Number
  }
})
console.log(props.commentId)

const comment = ref()

const getComment = () => {
  NewsServices.getNews(props.commentId)
      .then(data => {comment.value = data; console.log(data)})
      .catch(error => console.log(error));
}

onMounted(() => {
  getComment();
})
</script>

<template>
  <article class="comment" v-if="comment">

    <div class="comment-top">
      <span>{{ comment.by }}</span>
      {{ newsTime(comment.time) }} ago
    </div>
    <div class="comment-bottom" v-html="comment.text"></div>

  </article>
</template>

<style scoped lang="scss">
a:hover{
  text-decoration: underline;
}
.comment{
  padding: 10px 15px;
  width: fit-content;

  &-top{
    color: #726e6e;
    font-family: $second-font;
    font-size: 14px;
    margin-bottom: 10px;
  }

  &-bottom{
    font-family: $default-font;
    line-height: 1.3;
  }
}
</style>