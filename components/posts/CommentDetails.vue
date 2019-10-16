<template>
  <b-card class="comment-details-card" :sub-title="comment.user.nome + ' | ' + comment.user.email">
    <b-card-text>{{comment.texto}}</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "CommentDetails",
  props: ["comment"]
};
</script>

<style scoped>
.comment-details-card{
  margin-top: 16px;
}
</style>
