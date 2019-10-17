<template>
  <div class="box-theme-container" :style="{ background: backg }" @click="selectTheme()" 
    v-bind:class="{ themeActive: selected, themeNotActive: !selected }">
    <h6> {{ theme }} </h6>
  </div>
</template>

<script>
export default {
  name: 'PostThemes',
  props: ['theme','selected'],
  methods: {
    selectTheme () {
      this.$emit('themeClick', this.theme);
    }
  },
  computed: {
    backg: function () {
      switch (this.theme) {
        case 'INFRAESTRUTURA':
          return '#1DBDFF';
        case 'EXPERIÊNCIA EM DISCIPLINAS':
          return '#16D64C';
        case 'ATIVIDADES EXTRACURRICULARES':
          return '#FF8E20';
        case 'ARREDORES':
          return '#FF6DD5';
      }
    }
  }
}
</script>

<style>
  .box-theme-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    text-align: center;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 3px;
  }

  .box-theme-container h6 {
    margin: 0;
  }

  .box-theme-container:hover {
    cursor: pointer;
  }

  .themeActive {
    animation: themeActive 0.5s;
    animation-fill-mode: forwards;
  }
  
  .themeNotActive {
    animation: themeNotActive 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes themeActive {
    from {
      transform: scale(1);
    } to {
      transform: scale(1.2);
    }
  }

  @keyframes themeNotActive {
    from {
      transform: scale(1);
    } to {
      transform: scale(0.8);
    }
  }
</style>