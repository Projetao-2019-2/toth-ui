<template>
  <div class="input-text-container">
    <b-form-textarea
      class="textarea-input"
      id="textarea-rows"
      v-model="message"
      :placeholder="categorieDescription"
      rows="8"
      no-resize
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ["categorieDescription"],
  data() {
    return {
      message: ""
    };
  },
  watch: {
    message: function() {
      this.$emit("newMessage", this.message);
    }
  }
};
</script>

<style>
.input-text-container {
  height: 100%;
  width: 100%;
  margin-top: 30px;
}
.textarea-input {
  font-size: 1.2em;
}
</style>