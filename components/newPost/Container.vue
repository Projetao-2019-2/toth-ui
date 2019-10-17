<template>
  <div class="newpost-container">
    <PostThemes @selectedTheme="onThemeSelected"/>
    <MediaSelection :theme="selectedTheme"/>
    <TextBox :themeDescription="selectedText"/>
  </div>
</template>

<script>
import PostThemes from "./PostThemes/main"
import MediaSelection from "./MediaSelection/main"
import TextBox from "./TextBox/main"

export default {
  name: 'NewPost',
  components: {
    PostThemes,
    MediaSelection,
    TextBox
  },
  data () {
    return {
      selectedTheme: 'EXPERIÊNCIA EM DISCIPLINAS',
      selectedText: 'Texto experiência em disciplinas'
    }
  },
  methods: {
    onThemeSelected (theme) {
      this.selectedTheme = theme.name;
      this.selectedText = theme.description;
    }
  }
}
</script>

<style>
  .newpost-container {
    width: 800px;
    border: 1px solid black;
    background: #011932;
  }
</style>