<script setup>
import TheLogo from "@/components/header/TheLogo.vue";
import TheButton from "@/components/header/TheButton.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <the-logo />
        <the-button>Обновить</the-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import './../../assets/scss/index.scss';
  .header{
    padding: 10px 0;
    background-color: $orange-color;
    font-family: $default-font;
  }
  .header-inner{
    display: flex;
    justify-content: space-between;
  }


</style>