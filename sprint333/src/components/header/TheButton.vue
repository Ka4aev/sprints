<script setup>

</script>

<template>
  <button class="header-button"> <slot/></button>
</template>

<style lang="scss">
  .header-button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    background: #fff;
    border-radius: 5px;
    color: $orange-color;
    font-size: 15px;
    font-weight: 600;

    transition: all 0.1s ease-in-out;
  }
  .header-button:hover{
    box-shadow: white 1px 1px 60px 1px;
  }
  .header-button:active{
    transform: scale(0.95);
  }
</style>