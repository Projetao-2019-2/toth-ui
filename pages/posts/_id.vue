<template>
  <b-container class="bv-example-row">
    <h2>{{post.categoria ? post.categoria.nome : 'Geral'}}</h2>
    <b-row v-if="post.categoria">
      <b-col>
        <p>{{post.texto}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        Esse post foi relevante?
        <b-form-radio v-model="selected" name="some-radios" :value="true">Sim</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" :value="false">Nao</b-form-radio>
      </b-col>
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
      newComment: "",
      selected: null
    };
  },
  async mounted() {
    await this.$store.dispatch("posts/getPosts");
  }
};
</script>
