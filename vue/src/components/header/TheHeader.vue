<script setup>
import TheLogo from "@/components/header/TheLogo.vue";
import TheButton from "@/components/header/TheButton.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <the-logo />
        <the-button>Обновить пашу</the-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header{
    padding: 15px 0;
    background-color: #f45d00;
    font-family: "Nunito", sans-serif;
  }
  .header-inner{
    display: flex;
    justify-content: space-between;
  }


</style>