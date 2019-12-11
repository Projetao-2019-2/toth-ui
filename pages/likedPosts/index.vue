<template>
  <div class="liked-posts-container">
    <div class="title-liked-posts">
      <h2>Posts Curtidos</h2>
    </div>
    <IesBox v-for="item in iesPosts" :key="item.ies" :iesPosts="item" />
  </div>
</template>

<script>
import IesBox from "../../components/likedPosts/IesBox";
export default {
  name: "LikedPosts",
  components: {
    IesBox
  },
  computed: {
    iesPosts: function() {
      var checkIes = false;
      let output = [];
      let lastIes = null;
      let list = [];
      let posts = this.$store.getters["users/getLikedPosts"].posts;

      posts.forEach((post, index) => {
        if (lastIes === null) {
          lastIes = post.author.ies;
          list.push(post);
        } else {
          if (lastIes === post.author.ies) {
            list.push(post);
          } else {
            if (output.length === 0) {
              checkIes = true;
              output.push({
                ies: lastIes,
                posts: list
              });
              lastIes = post.author.ies;
              list = [];
              list.push(post);
            } else {
              for (const element of output) {
                if (element.ies === post.author.ies) {
                  element.posts.push(post);
                  checkIes = true;
                }
              }
            }
            if (!checkIes) {
              output.push({
                ies: lastIes,
                posts: list
              });
              lastIes = post.author.ies;
              list = [];
              list.push(post);
            }
            checkIes = false;
          }
          if (index + 1 === posts.length) {
            output.push({
              ies: lastIes,
              posts: list
            });
          }
        }
      });

      return output;
    }
  },
  async fetch({ store }) {
    await store.dispatch("users/getLikedPosts");
  }
};
</script>

<style scoped>
.liked-posts-container {
  width: 100%;
  min-height: calc(100vh - 61px);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-liked-posts {
  width: 90%;
  display: flex;
  margin-top: 20px;
}
</style>