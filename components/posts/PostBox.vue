<template>
  <div class="item">
    <div class="content" :style="{ borderColor: post.category.color }">
      <nuxt-link :to="'posts/' + post.id" class="link">
        <img :src="post.files[0].path" class="img-post" v-if="post.files[0]" />
        <div
          v-if="!post.files[0]"
          :style="{ background: post.category.color }"
          class="div-post-texto"
        >
          <p>{{post.texto}}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostBox",
  props: ["post"]
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

.link {
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.link:hover {
  text-decoration: none;
  color: inherit;
}
</style>
