<template>
  <nuxt-link to="/newpost">
    <div class="wrapper">
      <div class="icon-bg">
        <font-awesome-icon :icon="['fa', 'plus']"></font-awesome-icon>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "NewPostTrigger"
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  bottom: 60px;
  right: 30px;

  height: 40px;
  width: 40px;

  background: #fff;

  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 0px 0px,
    rgba(0, 0, 0, 0.04) 0px 0px 0px 0.5px;
}

.wrapper svg {
  color: rgb(51, 51, 51);
  display: block;
  margin: auto;
}

.icon-bg {
  height: 40px;
  width: 40px;
  padding: 0.5em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 50%;
}

.icon-bg:hover {
  background: rgb(0, 0, 0, 0.06);
}
</style>
