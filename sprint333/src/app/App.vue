<script setup>
import TheHeader from "@/components/header/TheHeader.vue";
</script>

<template>
  <div class="wrapper">
    <the-header />
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">

</style>
