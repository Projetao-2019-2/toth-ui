<template>
  <div class="text-box-container">
    <InputText :categorieDescription="categoryDescription" @newMessage="updateMessage" />
  </div>
</template>

<script>
import InputText from "./InputText";

export default {
  name: "TextBoxContainer",
  props: ["categoryDescription"],
  components: {
    InputText
  },
  methods: {
    updateMessage(msg) {
      this.$emit("newMessage", msg);
    }
  }
};
</script>

<style>
.text-box-container {
  height: 250px;
  width: 100%;
}
</style>