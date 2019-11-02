<template>
  <div class="input-text-container">
    <b-form-textarea
      id="textarea-rows"
      v-model="message"
      :placeholder="categorieDescription"
      rows="5"
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
</style>