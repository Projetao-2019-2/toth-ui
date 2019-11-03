<template>
  <b-container class="bv-example-row screen-post-id">
    <div v-if="post">
      <h2 class="category-title">
        <span
          class="inline-border"
          :style="{borderColor: post.category.color}"
        >{{post.category ? post.category.name : 'Geral'}}</span>
      </h2>
      <div class="white-bg">
        <b-row class="post-details">
          <b-col>
            <b-img v-if="post.files[0]" fluid-grow :src="post.files[0].path" class="post-img" />
            <p class="post-text">{{post.texto}}</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="rate-section">
            <div class="d-flex">Esse post foi relevante?</div>
            <div class="d-flex ml-3">{{post.util}}</div>
            <font-awesome-icon
              :icon="['fas', 'thumbs-up']"
              v-on:click="vote({wasUseful: true, id: post.id})"
              class="thumb-icon yes"
            />

            <div class="d-flex ml-3">{{post.n_util}}</div>
            <font-awesome-icon
              :icon="['fas', 'thumbs-down']"
              v-on:click="vote({wasUseful: false, id: post.id})"
              class="thumb-icon no"
            />
          </b-col>
        </b-row>

        <hr />

        <b-row>
          <b-col>
            <h3>Comentários</h3>
            <b-form-input
              v-model="newComment"
              type="text"
              required
              placeholder="Dê sua opinião"
              v-on:keyup.enter="addComment"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div v-for="(comment, index) in post.comments" :key="index">
              <CommentDetails :comment="comment" />
            </div>
          </b-col>
        </b-row>
      </div>
    </div>

    <div v-else>Nao tem post com esse id</div>
  </b-container>
</template>

<script>
import CommentDetails from "../../components/posts/CommentDetails";
import { mapActions } from "vuex";
export default {
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
    click(string) {
      alert(string);
    }
  }
};
</script>

<style scoped>
.post-details {
  margin-bottom: 20px;
}

.category-title {
  text-transform: uppercase;
  margin-bottom: 20px;
}

.inline-border {
  border-top: 8px solid black;
}

.white-bg {
  padding: 16px;
  background-color: white;
}

.post-img {
  margin: 12px 0;
}

.post-text {
  text-align: justify;
}

.rate-section {
  flex-direction: row;
  display: flex;
  align-items: center;
}

.thumb-icon {
  font-size: 30px;
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

.screen-post-id {
  padding-top: 24px;
}
</style>
