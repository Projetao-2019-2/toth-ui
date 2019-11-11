<template>
  <div class="user-photo-container">
    <img :src="user.imagepath" v-if="user.imagepath" />
    <font-awesome-icon v-else :icon="['fas', 'user']" size="4x"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "ProfileUserPhoto",
  props: ["user"]
};
</script>

<style>
.user-photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 50%;
}

.user-photo-container:hover {
  cursor: pointer;
}

.user-photo-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>