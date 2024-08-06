<script setup>
import { NewsServices } from "@/api/newsServices.js"
import { onMounted, onUnmounted, ref } from 'vue';
import { intervalId, newsTime, shortLink } from "@/functions.js";

const props = defineProps({
  number:{
    type: Number,
    required: true
  },
  post:{
    type: Number,
    required: true
  }
});

const newsItem = ref()

const getPost = async () => {
  newsItem.value = await NewsServices.getNews(props.post)
}

intervalId(() => getPost())

onMounted(() => {
  getPost();
})

onUnmounted(() => {
  clearInterval(intervalId(() => getPost()));
});


</script>

<template>
  <article class="novelty" v-if="newsItem">
    <span class="number">{{number}}.</span>
    <div class="novelty-top">
      <span class="novelty-title">
        <router-link
            :to="{ name: 'posts', params: { id: newsItem.id} }"
        >
          {{newsItem.title}}
        </router-link>
      </span>

      <span class="novelty-link">
        <a :href=newsItem.url target="_blank">( {{shortLink(newsItem.url)}} )</a>
      </span>
    </div>

    <div class="novelty-bottom">

      <span class="score">{{newsItem.score}} points</span>
      by
      <a class="author" href="/">{{newsItem.by}}</a>

      <span class="age">
        {{newsTime(newsItem.time)}} ago
      </span>
      |
       <router-link
           :to="{ name: 'posts', params: { id: newsItem.id} }"
           class="comments" href="/"
       >
         {{newsItem.descendants}}
         <span v-if="newsItem.descendants === 1">comment</span>
         <span v-else>comments</span>
       </router-link>
    </div>
  </article>
</template>

<style scoped lang="scss">

.number{
  position: absolute;
  @extend .font-title;
  left: -2.2em;
  top: 2px;
  width: 30px;
  text-align: center;
  color: $number-color;
}

.novelty{
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 3px;
  @extend .font-text;

  &-title{
    @extend .font-title;
    margin-right: 5px;

    @media screen and (max-width: 500px) {
      margin-right: 3px;
      font-size: 1.4em;
    }
  }

  a:hover{
    text-decoration: underline;
  }

  &-bottom{
    color: white;
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
    padding: 5px;
    background-color: rgba(224, 112, 30, 0.7);
    width: 100%;
    gap: 5px;

    @media screen and (max-width: 500px) {
      font-size: 1em;
    }
  }
}
</style>