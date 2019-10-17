<template>
  <div class="text-box-container">
    <InputText :themeDescription="themeDescription"/>
  </div>
</template>

<script>
import InputText from "./InputText"

export default {
  name: 'TextBoxContainer',
  props: ['themeDescription'],
  components: {
    InputText
  }
}
</script>

<style>
  .text-box-container {
    height: 150px;
    width: 100%;
    /*border: 1px solid orange*/
  }
</style>