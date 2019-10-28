<template>
  <div class="post-themes-container">
    <BoxTheme 
      v-for="theme in themes"
      :key="theme.name" 
      :theme="theme" 
      @themeClick="$emit('selectedTheme', theme)"/>
  </div>
</template>

<script>
import BoxTheme from "./BoxTheme"

export default {
  name: 'PostThemes',
  props: ['themes'],
  components: {
    BoxTheme
  }
}
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