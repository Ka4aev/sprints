<script setup>

</script>

<template>
  <article class="novelty">
    <span class="number">1.</span>
    <div class="novelty-top">
              <span class="novelty-title">
                 <a href="/">My Python code is a neural network</a>
              </span>
      <span class="novelty-link">
               (
                 <a   href="/">gabornyeki.com</a>
               )
             </span>
    </div>

    <div class="novelty-bottom">

      <span class="score">77 points</span>
      by
      <a class="author" href="/">gnyeki</a>

      <span class="age">
                <a href="/">1 hour ago</a>
              </span>
      |
      <a class="hide" href="/">hide</a>
      |
      <a class="comments" href="/">7&nbsp;comments</a>
    </div>
  </article>
</template>

<style scoped lang="scss">
.number{
  position: absolute;
  @extend .font-title;
  left: -1em;
  color: #a84b26;
}

.novelty{
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 3px;
  @extend .font-text;
  &-title{
    @extend .font-title;
  }
  a:hover{
    text-decoration: underline;
  }
  &-bottom{
    color: white;
    display: flex;
    font-size: 1.2em;
    font-weight: bold;
    padding: 5px;

    background-color: rgba(224, 112, 30, 0.7);
    width: 100%;
    gap: 5px;
  }
}
</style>