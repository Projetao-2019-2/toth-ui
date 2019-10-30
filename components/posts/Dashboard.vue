<template>
  <div class="dashboard">
    <PostBox v-for="n in 10" :key="n" />
  </div>
</template>

<script>
import axios from "axios";
import PostBox from "../../components/posts/PostBox";

export default {
  name: "Dashboard",
  components: {
    PostBox
  }
};
</script>

<style>
.dashboard {
  display: flex;
  flex-direction: row;
  width: match-parent;
  height: match-parent;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>