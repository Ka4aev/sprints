<script setup>
import {newsTime, shortLink} from "@/functions.js";

defineProps({
  post:{
    type:Object,
    required:true
  }
})
</script>

<template>
  <div class="novelty-top">
    <h2 class="novelty-title">{{ post.title }}</h2>

    <span class="novelty-link">
          <a :href=post.url target="_blank">( {{ shortLink(post.url) }} )</a>
        </span>

  </div>

  <div class="novelty-bottom">
    <span class="score">{{ post.score }} points</span>
    by
    <a class="author" href="/">{{ post.by }} </a>
    <span class="age"> &nbsp;{{ newsTime(post.time) }} ago</span>
    |
    <span class="comments-count">
      {{ post.descendants }}
      <span v-if="post.descendants === 1">comment</span>
      <span v-else>comments</span>
    </span>
  </div>
</template>

<style scoped lang="scss">
a:hover{
  text-decoration: underline;
}
.novelty{
  &-title{
    color: #c37429;
    font-size: 20px;
    margin-right: 9px;
    font-family: $second-font;
  }
  &-link {
    color: #5d5958;
    font-family: $second-font;
    font-size: 14px;
  }
  &-top{
    display: flex;
    align-items: center;
  }
  &-bottom{
    color: #5d5958;
    font-size: 15px;
    margin-top: -15px;
    font-family: $second-font;
  }
  .author{
    margin-right: 5px;
  }
}
</style>