<template>
  <div>
    <b-card
      class="comment-details-card"
      :sub-title="comment.user.nome + ' | ' + comment.user.email"
    >
      <b-card-text>{{comment.texto}}</b-card-text>

      <div v-on:click="click('voce clicou no reply')" class="reply-button">
        Responder
        <font-awesome-icon :icon="['fas', 'reply-all']"></font-awesome-icon>
      </div>
    </b-card>

    <div v-if="comment.replys && comment.replys.length > 0" class="reply-section">
      <b-card
        class="comment-details-card"
        v-for="(reply, index) in comment.replys"
        :key="index"
        :sub-title="reply.user.nome + ' | ' + reply.user.email"
      >
        <b-card-text>{{reply.texto}}</b-card-text>
      </b-card>
    </div>
  </div>
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

.reply-button {
  cursor: pointer;
  text-align: right;
}

.reply-section{
  margin-left: 24px;
}

p.card-text{
  margin-bottom: 2px;
}
</style>
