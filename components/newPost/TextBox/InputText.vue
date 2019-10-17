<template>
  <div class="input-text-container">
    <textarea v-model="message" :placeholder="themeDescription"></textarea>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: ['themeDescription'],
  data () {
    return {
      message: '',
      teste: 'kkkk'
    }
  }
}
</script>

<style>
.input-text-container {
  width: 100%;
  height: 100%;
}
  textarea {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 5px;
    font-size: 17px;
  }
</style>