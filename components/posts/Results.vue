<template>
  <div class="total">
    <div class="dashboard">
      <div class="list-posts-user grid">
        <Post v-for="item in posts" :key="item.id" :post="item" />
      </div>
    </div>
  </div>
</template>

<script>
import PostBox from "../../components/posts/PostBox";

export default {
  name: "Dashboard",
  components: {
    PostBox
  }
};
</script>

<style>
.total {
  display: flex;
  flex-direction: column;
  width: match-parent;
  height: match-parent;
  margin-top: 50px;
}
.dashboard {
  display: flex;
  flex-direction: row;
  width: match-parent;
  height: match-parent;
  justify-content: center;
  margin-top: 30px;
}

.card {
  border: 2px solid green;
  max-width: 375px;
  margin: 0;
}
</style>
