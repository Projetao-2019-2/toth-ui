<template>
  <div class="wrapper">
    <!-- <div class="arrow-wrapper">
      <b-img
        src="~/assets/left-arrow.png"
        alt="Medal icon"
        v-on:click="backToSearch()"
        class="arrow"
      ></b-img>
    </div> -->

    <div class="box rounded-border" v-if="post">
      <div class="img-box" v-if="post.files[0]">
        <img :src="post.files[0].path" class="post-img rounded-border" />
      </div>

      <div class="content-box">
        <div class="category-title">
          <div
            class="category-circle"
            :style="{ backgroundColor: post.category.color }"
          ></div>
          <span
            class="inline-border"
            :style="{ borderColor: post.category.color }"
            >{{ post.category ? post.category.name : "Geral" }}</span
          >
        </div>

        <div class="post-details">
          <p class="post-text">{{ post.texto }}</p>
        </div>

        <div class="post-secondary-info">
          <div class="author-section">
            <b-img
              v-if="post.author.imagepath"
              :src="post.author.imagepath"
              rounded="circle"
              class="author-img"
            />
            <div v-else class="author-img no-photo">
              <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
            </div>
            <p>{{ post.author.nome }}</p>
          </div>

          <div class="rate-section">
            <div
              class="rate-box"
              v-on:click="vote({ wasUseful: true, id: post.id })"
            >
              <div class="ml-3">{{ post.util }}</div>
              <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                class="thumb-icon yes"
              />
            </div>

            <div
              class="rate-box"
              v-on:click="vote({ wasUseful: false, id: post.id })"
            >
              <div class="ml-3">{{ post.n_util }}</div>
              <font-awesome-icon
                :icon="['fas', 'thumbs-down']"
                class="thumb-icon no"
              />
            </div>
          </div>
        </div>

        <h5>Comentários</h5>
        <div class="comments-section">
          <div v-for="(comment, index) in post.comments" :key="index">
            <CommentDetails :comment="comment" />
          </div>
        </div>
        <b-form-input
          v-model="newComment"
          type="text"
          required
          placeholder="Dê sua opinião"
          v-on:keyup.enter="addComment"
          :maxlength="1000"
        ></b-form-input>
      </div>
    </div>
    <div v-else>Nao tem post com esse id</div>
  </div>
</template>

<script>
import CommentDetails from "~/components/posts/CommentDetails";
import { mapActions } from "vuex";
export default {
  loading: true,
  components: { CommentDetails },
  computed: {
    postId: function() {
      return this.$route.params.id;
    },
    post: function() {
      return this.$store.getters["posts/getById"](this.postId);
    }
  },

  data() {
    return {
      newComment: "",
      selected: null
    };
  },

  async fetch({ store, params }) {
    await store.dispatch("posts/getDetails", params.id);
  },
  methods: {
    ...mapActions({
      vote: "posts/vote"
    }),
    addComment() {
      if (this.newComment.length > 0) {
        this.$store.dispatch("posts/addComment", {
          text: this.newComment,
          postId: this.post.id
        });
      }
      this.newComment = "";
    },
    backToSearch() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  position: relative;
}

.box {
  width: 75vw;
  max-height: 75vh;

  margin-top: 60px;
  margin: 100px 90px;

  background-color: #ffffff;

  display: flex;
  flex-direction: row;
  flex-basis: auto;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
}

.img-box {
  max-width: 75%;
  flex: 1 1 0;
}

.post-img {
  object-fit: contain;
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.content-box {
  padding: 1.5em;
  display: flex;
  flex-flow: column;
  flex: 1 1 100px;
}

.category-title {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}

.category-title span {
  margin-left: 0.5em;
  font-size: 0.9em;
}

.category-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 0px;
  display: inline-block;
}

.post-secondary-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
}

.rate-section {
  flex-direction: row;
  display: flex;
  align-items: center;
}

.rate-box {
  flex-direction: row;
  display: flex;
  align-items: center;
  border: 1px solid #efefef;
  border-radius: 15px;
  margin-left: 0.5em;
}

.rate-box:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}

.thumb-icon {
  font-size: 1em;
  display: flex;
  cursor: pointer;
  margin: 0px 20px;
}

.thumb-icon.yes {
  color: green;
}

.thumb-icon.no {
  color: red;
}

.author-section {
  display: flex;
  align-items: center;
}

.author-section .author-img {
  width: 40px;
  height: 40px;
}

.author-section .author-img.no-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(226, 226, 226);
  border-radius: 50%;
}

.author-section p {
  margin-bottom: 0px;
  margin-left: 0.5em;
  font-size: 0.9em;
}

.comments-section {
  overflow: auto;
  margin-bottom: 1em;
}

.post-details {
  font-size: 1.25em;
}

.arrow-wrapper {
  position: fixed;
  width: 44px;
  height: 44px;
  text-align: center;
  left: 25px;
  top: 100px;
  cursor: pointer;
}

.arrow-wrapper:hover {
  background: rgb(226, 226, 226);
  border-radius: 50%;
}

.arrow {
  width: 20px;
  height: 20px;
  margin: 12px;
}

.rounded-border {
  border-radius: 16px;
  border-bottom-left-radius: 0px !important;
}
</style>
