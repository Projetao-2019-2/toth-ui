<template>
  <div class="post-item item">
    <div class="content">
      <img src="./rick.png" class="img-post"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Post-item",
  props: ["num"]
}
</script>

<style>
  .post-item {
    width: 300px;
    border: 1px solid black;
    background: grey;
  }
  .img-post {
    width: 100%;
    max-height: 500px;
  }
</style>