<template>
  <div>
      <b-card
        class="comment-details-card"
        sub-title-variant="card_subtitle"
        :sub-title="comment.author ? comment.author.nome + ' | ' + comment.author.email : ''"
        v-on:click="goToProfile(comment.author.id)"
      >
        <b-card-text>{{comment.text}}</b-card-text>

      <!-- Keep it commented while not implemented.
        <div v-on:click="click('voce clicou no reply')" class="reply-button">
        Responder
        <font-awesome-icon :icon="['fas', 'reply-all']"></font-awesome-icon>
      </div> -->
    </b-card>

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
        :sub-title="reply.author.nome + ' | ' + reply.author.email"
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
    },
    goToProfile(string) {
      if(string == this.$auth.$state.user.id)
        this.$router.push(`/profile/me`);
      else
        this.$router.push(`/profile/${string}`);
    }
  }
};
</script>

<style>
.comment-details-card {
  margin-bottom: 16px;
}

.comment-details-card .card-body{
  padding: 1em;
}

.reply-button {
  cursor: pointer;
  text-align: right;
}

.reply-section {
  margin-left: 24px;
}

p.card-text {
  margin-bottom: 2px;
}

.card-card_subtitle:hover {
  text-decoration-line: underline;
}

</style>
