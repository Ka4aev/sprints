<script setup>
import TheLogo from "@/components/header/TheLogo.vue";
import TheButton from "@/components/header/TheButton.vue";

const emits = defineEmits(['posts-rerender'])
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <router-link to="/"><the-logo /></router-link>
        <the-button @click="emits('posts-rerender')">Обновить</the-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    margin-bottom: 20px;
    padding: 10px 0;
    background-color: $orange-color;
    font-family: $default-font;
  }
  .header-inner{
    display: flex;
    justify-content: space-between;
  }


</style>