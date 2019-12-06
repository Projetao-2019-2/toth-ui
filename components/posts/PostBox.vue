<template>
  <div class="item">
    <div class="content">
      <nuxt-link :to="'posts/' + post.id" class="link">
        <div v-if="post.files[0]" class="post-item">
          <img :src="post.files[0].path" class="img-post" />
          <div class="categorie-user-post">
            <div class="category-circle" :style="{ backgroundColor: post.category.color }"></div>
            <span class="post-user-name">{{post.author.nome}}</span>
          </div>
        </div>
        <div v-else class="div-post-text post-item">
          <p>{{post.texto}}</p>
          <div class="categorie-user-post-text">
            <div class="category-circle" :style="{ backgroundColor: post.category.color }"></div>
            <span class="post-user-name">{{post.author.nome}}</span>
          </div>
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
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content:hover {
  cursor: pointer;
}
.post-item:hover .post-user-name {
  display: block;
}
.post-item:hover .categorie-user-post {
  background: rgba(97, 97, 97, 0.4);
}
.post-item:hover .categorie-user-post-text {
  background: rgba(97, 97, 97, 0.4);
}
.img-post {
  width: 100%;
  min-width: 300px;
  max-height: 500px;
  border-radius: 15px;
}
.categorie-user-post {
  width: 300px;
  height: 30px;
  background: rgba(0, 0, 0, 0.05);
  position: absolute;
  display: flex;
  align-items: center;
  transform: translateY(-100%);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.categorie-user-post-text {
  width: 300px;
  height: 30px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.post-user-name {
  color: white;
  font-weight: bold;
  margin-left: 15px;
  display: none;
}
.category-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 5px;
}
.only-text-post {
  width: 100%;
  height: 100%;
  font-size: 1.5em;
}
.div-post-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1em;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.div-post-text p {
  margin: 0;
  padding: 5px;
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
