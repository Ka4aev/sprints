<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

const goHome = () =>{
  router.push({name:'home'})
}

</script>

<template>
<div>
  <h1>Page not found</h1>
  <button @click="goHome">Return home page</button>
</div>
</template>

<style scoped lang="scss">
  div{
    flex-direction: column;
    gap: 50px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }
  button{
    background: rgba(204, 188, 188, 0.68);
    padding: 10px;
    border-radius: 3px;
    font-size: 20px;
    font-family: $second-font;
    transition: all ease-in-out .3s;
  }
  button:hover{
    transform: scale(1.1);
  }

</style>