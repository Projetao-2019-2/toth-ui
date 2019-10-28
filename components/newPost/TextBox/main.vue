<template>
  <div class="text-box-container">
    <InputText 
      :themeDescription="theme.description"
      @newMessage="updateMessage"/>
  </div>
</template>

<script>
import InputText from "./InputText"

export default {
  name: 'TextBoxContainer',
  props: ['theme'],
  components: {
    InputText
  },
  methods: {
    updateMessage(msg) {
      this.$emit('newMessage', msg);
    }
  }
}
</script>

<style>
  .text-box-container {
    height: 150px;
    width: 100%;
  }
</style>