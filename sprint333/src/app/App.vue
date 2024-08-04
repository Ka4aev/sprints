<script setup>
import TheHeader from "@/components/header/TheHeader.vue";
import {ref} from "vue";

const componentKey = ref(0)
const postsRerender = () => componentKey.value++

</script>

<template>
  <div class="wrapper">
    <the-header @posts-rerender="postsRerender"/>
    <main class="main">
      <router-view :componentKey="componentKey"/>
    </main>
  </div>
</template>

<style lang="scss">

</style>
