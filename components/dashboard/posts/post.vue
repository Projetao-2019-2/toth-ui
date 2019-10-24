<template>
  <div class="post-item">
  {{num}}
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 400px;
    border: 1px solid black;
  }
</style>