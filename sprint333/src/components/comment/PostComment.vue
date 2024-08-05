<script setup>
import {newsTime} from "@/functions.js";
import {onMounted, ref} from "vue";
import {NewsServices} from "@/api/newsServices.js";
import CommentList from "@/components/comment/CommentList.vue";

const props = defineProps({
  commentId:{
    type: Number
  }
})
console.log(props.commentId)

const comment = ref()
const showReplies = ref(false);

const getComment = () => {
  NewsServices.getNews(props.commentId)
      .then(data => comment.value = data)
      .catch(error => console.log(error));
}

onMounted(() => {
  getComment();
})

const toggleReplies = () => {
  showReplies.value = !showReplies.value; // Переключение видимости
};
</script>

<template>
  <article class="comment" v-if="comment">

    <div class="comment-top">
      <span>{{ comment.by }}</span>
      {{ newsTime(comment.time) }} ago
    </div>
    <div class="comment-bottom" v-html="comment.text"></div>

    <button @click="toggleReplies" class="reply-button">
      {{ showReplies ? 'Hide comments' : 'Show comments' }}
    </button>

    <div v-if="showReplies">
      <comment-list  :comment="comment" :comments="comment.kids"/>
    </div>

  </article>
</template>

<style scoped lang="scss">
a,button:hover{
  text-decoration: underline;
}
.reply-button {
  cursor: pointer;
  color: gray;
  font-family: $default-font;
  background: none;
  padding: 3px;
}

.comment{
  padding: 15px;
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