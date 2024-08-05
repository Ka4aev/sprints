<script setup>
import {newsTime} from "@/functions.js";
import {onMounted, ref} from "vue";
import {NewsServices} from "@/api/newsServices.js";

const props = defineProps({
  commentId:{
    type: Number
  }
})

const comment = ref()
const showReplies = ref(false);

const getComment = async () => {
  comment.value = await NewsServices.getNews(props.commentId)
}

const toggleReplies = () => {
  showReplies.value = !showReplies.value; // Переключение видимости
};

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

    <button
        @click="toggleReplies"
        v-if="comment.kids"
        class="reply-button"
    >
      {{ showReplies ? 'Hide comments' : 'Show comments' }}
    </button>

    <div v-if="showReplies">
      <post-comment
          v-for="commentId in comment.kids"
          :key="commentId"
          :comment-id="commentId"
      />
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