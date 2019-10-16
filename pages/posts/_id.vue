<template>
  <b-container class="bv-example-row">
    <h1>{{post.categoria.nome}}</h1>
    <b-row>
      <b-col>{{post.texto}}</b-col>
    </b-row>

    <hr />
    <b-row>
      <b-col>
        <h3>Comentários</h3>
        <b-form-input :v-model="this.newComment" type="text" required placeholder="Dê sua opinião"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div v-for="(comment, index) in post.comments" :key="index">
          <CommentDetails :comment="comment" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CommentDetails from "../../components/posts/CommentDetails";
export default {
  components: { CommentDetails },
  computed: {
    postId: function() {
      return this.$route.params.id;
    },
    post: function() {
      return this.$store.getters["posts/getPostById"](this.postId) || {};
    }
  },
  data() {
    return {
      newComment: ""
    };
  },
  async mounted() {
    await this.$store.dispatch("posts/getPosts");
  }
};
</script>

