<template>
  <b-card class="comment-details-card" :sub-title="comment.user.nome + ' | ' + comment.user.email">
    <b-card-text>{{comment.texto}}</b-card-text>

    <div v-on:click="click('voce clicou no reply')" class="reply-section">
      Responder
      <font-awesome-icon :icon="['fas', 'reply-all']"></font-awesome-icon>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "CommentDetails",
  props: ["comment"],
  methods: {
    click(string) {
      alert(string);
    }
  }
};
</script>

<style>
.comment-details-card {
  margin-top: 16px;
}

.reply-section {
  text-align: right;
}
</style>
