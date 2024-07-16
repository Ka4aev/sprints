<script setup>
defineProps({
  number:{
    type: Number,
    required: true
  }
});

const newsItem = {
    by: "dhouston",
    descendants: 71,
    id: 8863,
    kids: [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
    score: 111,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html"
}
const shortLink = (link) => link.split('/')[2];

const newsTime = (time) => {
  let date = new Date(time * 1000)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  if (hours > 0) {
    return `${hours} hours`
  }
  else if (minutes > 0) {
    return `${minutes} minutes`
  }
  else {
    return `${seconds} seconds`
  }
}
</script>

<template>
  <article :id=newsItem.id class="novelty">
    <span class="number">{{number}}.</span>
    <div class="novelty-top">

      <span class="novelty-title">
        <router-link to="/post">{{newsItem.title}}</router-link>
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
       <router-link to="/post" class="comments" href="/"> {{newsItem.descendants}} comments</router-link>
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
  color: #a84b26;
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
  }
}
</style>