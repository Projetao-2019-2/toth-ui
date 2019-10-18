<template>
  <div 
    class="media-selection-container" 
    :style="{ background: theme.color }">
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