<template>
  <div class="input-file-container">
    <label for="file">
      <font-awesome-icon :icon="['fas', 'arrow-circle-up']" size="4x"></font-awesome-icon>
    </label>
    <input
      type="file"
      accept="image/*"
      name="file"
      id="file"
      class="inputfile"
      @change="onFileSelected"
    />
  </div>
</template>

<script>
export default {
  name: "InputFile",
  methods: {
    onFileSelected(event) {
      const selectedFile = event.target.files[0];
      this.$emit("onFileSelected", selectedFile);
    }
  }
};
</script>

<style>
.inputfile {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.input-file-container label {
  margin: 0;
  padding: 0;
}

.input-file-container label:hover {
  cursor: pointer;
}
</style>