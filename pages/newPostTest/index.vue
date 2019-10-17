<template>
  <div class="np-container">
    <NewPostContainer />
  </div>
</template>

<script>
import NewPostContainer from "../../components/newPost/Container"

export default {
  components: {
    NewPostContainer
  }
}
</script>

<style>
  .np-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>