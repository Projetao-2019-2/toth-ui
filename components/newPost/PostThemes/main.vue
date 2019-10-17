<template>
  <div class="post-themes-container">
    <BoxTheme v-for="item in themes" :key="item.name" :theme="item.name" :selected="item.selected" @themeClick="onThemeClick"/>
  </div>
</template>

<script>
import BoxTheme from "./BoxTheme"

export default {
  name: 'PostThemes',
  components: {
    BoxTheme
  },
  data () {
    return {
      themes: [
        {
          name: 'INFRAESTRUTURA',
          selected: false,
          description: "Texto de infraestrutura"
        },
        {
          name: 'EXPERIÊNCIA EM DISCIPLINAS',
          selected: true,
          description: "Texto experiência em disciplinas"
        },
        {
          name: 'ATIVIDADES EXTRACURRICULARES',
          selected: false,
          description: "Texto atividade extracurriculares"
        },
                {
          name: 'ARREDORES',
          selected: false,
          description: "Texto arrredores"
        },
      ]
    }
  },
  methods: {
    onThemeClick (theme) {
      this.themes.forEach((item) => {
        if (item.name === theme) {
          item.selected = true;
          this.$emit('selectedTheme', item);
        } else {
          item.selected = false;
        }
      })
    }
  }
}
</script>

<style>
  .post-themes-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    width: 100%;
    /*border: 1px solid greenyellow;*/
  }
</style>