<template>
  <div class="item">
    <div class="content" :style="{ borderColor: post.category.color }" @click="openPostScreen">
      <img :src="imageUrl" class="img-post" v-if="existImage" />
      <div v-if="!existImage" :style="{ background: post.category.color }" class="div-post-texto">
        <p>{{post.texto}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post-item",
  props: ["post"],
  methods: {
    openPostScreen() {
      this.$router.push(`/posts/${this.post.id}`);
    }
  },
  data() {
    return {
      imageUrl: null,
      existImage: true
    };
  },
  created() {
    if (this.post.files.length !== 0) {
      this.imageUrl =
        "https://project-toth.herokuapp.com/" + this.post.files[0].path;
    } else {
      this.existImage = false;
    }
  }
};
</script>

<style>
.item {
  width: 300px;
}
.img-post {
  width: 100%;
  max-height: 500px;
}
.only-text-post {
  width: 100%;
  height: 100%;
  font-size: 1.5em;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 5px;
  border-radius: 5px;
}
.content:hover {
  cursor: pointer;
}
.div-post-texto {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 1em;
}
.div-post-texto p {
  margin: 0;
  padding: 0;
}
</style>