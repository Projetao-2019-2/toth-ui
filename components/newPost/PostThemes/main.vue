<template>
  <div class="post-themes-container">
    <b-button
      v-for="theme in themes"
      :key="theme.name"
      :style="{ background: theme.selected ? theme.color : '#6D767F'}"
      @click="$emit('selectedTheme', theme)"
    >{{theme.name}}</b-button>
  </div>
</template>

<script>
export default {
  name: "PostThemes",
  props: ["themes"]
};
</script>

<style>
.post-themes-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  width: 100%;
}
</style>