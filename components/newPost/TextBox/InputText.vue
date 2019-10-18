<template>
  <div class="input-text-container">
    <textarea 
      v-model="message" 
      :placeholder="themeDescription">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: ['themeDescription'],
  data () {
    return {
      message: ''
    }
  },
  watch: {
    message: function () {
      this.$emit('newMessage', this.message);
    }
  }
}
</script>

<style>
  .input-text-container {
    height: 100%;
    width: 100%;
    margin-top: 30px;
  }
  textarea {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 5px;
    font-size: 18px;
    resize: none;
  }
</style>