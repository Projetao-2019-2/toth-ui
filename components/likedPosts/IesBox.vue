<template>
  <div class="iesbox-container">
    <div class="ies-title">{{iesPosts.ies}}</div>
    <div class="ies-posts">
      <Results class="ies-results" :posts="iesPosts.posts" :key="iesPosts.ies" />
    </div>
  </div>
</template>

<script>
import Results from "../../components/posts/Results";
import PostBox from "../../components/posts/PostBox";
export default {
  name: "IesBox",
  props: ["iesPosts"],
  components: {
    Results,
    PostBox
  }
};
</script>

<style scoped>
.iesbox-container {
  width: 90%;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 20px 0 20px 0;
}
.ies-title {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 1.5em;
  border-bottom: 1px solid #efefef;
}
.ies-posts {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.ies-results {
  padding-top: 10px;
}
</style>
