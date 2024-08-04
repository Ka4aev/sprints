<script setup>
import {useRoute} from "vue-router";
import {intervalId} from "@/functions.js";
import {NewsServices} from "@/api/newsServices.js";
import {onMounted, onUnmounted, ref} from "vue";
import PostInfo from "@/components/comment/PostInfo.vue";
import PostComments from "@/components/comment/PostComments.vue";


defineProps({
  componentKey:{
    type: Number,
    default: 0
  }
})

const post = ref()

const route = useRoute()
console.log(route.params.id)

const getPost = () => {
  NewsServices.getNews(route.params.id)
      .then(data => {post.value = data; console.log(data)})
      .catch(error => console.log(error));
}

onMounted(() => {
  getPost();
})

onUnmounted(() => {
  clearInterval(intervalId(() => getPost()));
});

</script>

<template>
  <div class="container">
    <section class="news" v-if="post">

      <post-info
          :key="componentKey"
          :post="post"
      />

      <post-comments
          :key="componentKey"
          :post="post"
      />

    </section>
  </div>
</template>
