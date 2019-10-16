<template>
  <div>
    <p>{{comment.texto}}</p>

    <p>{{comment.user.nome}} | {{comment.user.email}} </p>
  </div>
</template>

<script>
export default {
  name: "CommentDetails",
  props: ["comment"]
};
</script>
