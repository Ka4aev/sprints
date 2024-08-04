<script setup>
import {useRoute} from "vue-router";
import {newsTime, shortLink} from "@/functions.js";
import {NewsServices} from "@/api/newsServices.js";
import {onMounted} from "vue";

const comment =
const route = useRoute()
console.log(route.params.id)

const getPosts = () => {
  NewsServices.getNews(route.params.id)
      .then(data => newsItem.value = data)
      .catch(error => console.log(error));
}

onMounted(() => {
  getPosts();
})
const newsItem = {
  by : "dhouston",
  descendants : 71,
  id : 8863,
  kids : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
  score : 111,
  time : 1175714200,
  title : "My YC app: Dropbox - Throw away your USB drive",
  type : "story",
  url : "http://www.getdropbox.com/u/2/screencast.html"
}
// const comment = {
//   by : "norvig",
//   id : 2921983,
//   kids : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
//   parent : 2921506,
//   text : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
//   time : 1314211127,
//   type : "comment"
// }

</script>

<template>
  <div class="container">
    <section class="news">
      <div class="novelty-top">
        <h2 class="novelty-title">{{newsItem.title}}</h2>
        <span class="novelty-link">
          <a :href=newsItem.url target="_blank">( {{shortLink(newsItem.url)}} )</a>
        </span>
      </div>
      <div class="novelty-bottom">
        <span class="score">{{newsItem.score}} points</span>
        by
        <a class="author" href="/">{{newsItem.by}} </a>

        <span class="age"> &nbsp;{{newsTime(newsItem.time)}} ago
      </span>
        |
        <a class="comments-count" href="#">
          {{newsItem.descendants}}
          <span v-if="newsItem.descendants === 1">comment</span>
          <span v-else>comments</span>
        </a>
      </div>
      <div class="comments">
        <article class="comment">
          <div class="comment-top">
            <span>{{comment.by}}</span>
            {{newsTime(newsItem.time)}} ago
          </div>
          <div class="comment-bottom">
            {{comment.text}}
          </div>
        </article>
      </div>


    </section>

  </div>
</template>

<style scoped lang="scss">
.comments{
  padding: 10px;
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
  }
}
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