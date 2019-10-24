<template>
  <div class="filter-container">
    <font-awesome-icon :icon="['fas', 'filter']" size="2x"></font-awesome-icon>
    <b-button 
      v-for="theme in themes" 
      :key="theme.name"
      :style="{ background: theme.selected ? theme.color : '#6D767F'}"  
      size="lg"
      @click="onClickTheme(theme.name)"> 
      {{theme.name}} 
    </b-button>
  </div>
</template>

<script>

export default {
  name: "FilterDashboard",
  data () {
    return {
      themes: [
        {
          name: 'INFRAESTRUTURA',
          selected: true,
          color: '#1DBDFF'
        },
        {
          name: 'EXPERIÊNCIA EM DISCIPLINAS',
          selected: true,
          color: '#16D64C'
        },
        {
          name: 'ATIVIDADES EXTRACURRICULARES',
          selected: true,
          color: '#FF8E20'
        },
                {
          name: 'ARREDORES',
          selected: true,
          color: '#FF6DD5'
        }
      ] 
    }
  },
  methods: {
    onClickTheme (theme) {
      this.themes.forEach((tm) => {
        if (tm.name === theme) {
          tm.selected = !tm.selected;
        }
      })
    }
  }
}
</script>

<style>
  .filter-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 80px;
    background:	#C7C9C6;
  }
</style>