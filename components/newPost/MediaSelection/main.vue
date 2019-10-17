<template>
  <div class="media-selection-container" :style="{ background: backg }">
    <InputFile />
  </div>
</template>

<script>
import InputFile from "./InputFile"

export default {
  name: 'MediaSelection',
  props: ['theme'],
  components: {
    InputFile
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
  .media-selection-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    border: 2px solid grey;
  }
</style>