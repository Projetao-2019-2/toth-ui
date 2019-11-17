<template>
  <div class="media-container">
    <div class="media-wrapper" v-if="!imageIsSelected">
      <Input @onFileSelected="imageSelected" />
      <p v-if="!imageIsSelected">Selecione uma imagem</p>
    </div>
    <div class="img-selected-container" v-if="imageIsSelected">
      <img :src="imageUrl" class="img-upload" />
      <div class="input-file-container up-index">
        <font-awesome-icon
          :icon="['fas', 'trash']"
          size="2x"
          class="icon-img icon-delete-img"
          @click="deleteImage"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./MediaSelection/InputFile";

export default {
  name: "Media",
  components: {
    Input
  },
  data() {
    return {
      imageIsSelected: false,
      imageUrl: ""
    };
  },
  methods: {
    deleteImage() {
      this.imageIsSelected = false;
      this.$emit("onFileSelected", null);
    },
    showImage(file) {
      this.imageIsSelected = true;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(file);
    },

    imageSelected(file) {
      this.showImage(file);
      this.$emit("onFileSelected", file);
    },

    onFileSelected(event) {
      const selectedFile = event.target.files[0];
      this.showImage(selectedFile);
      this.$emit("onFileSelected", selectedFile);
    }
  }
};
</script>

<style scoped>
.media-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.media-wrapper {
  width: 94%;
  height: 95%;
  border: 2px dashed #cccccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.media-wrapper p {
  margin-top: 10px;
}
.img-selected-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-height: 100%;
}
.input-file-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.up-index {
  position: absolute;
  padding: 10px;
  border-radius: 50%;
  background: white;
  transform: translateY(378%);
}
.icon-delete-img:hover {
  cursor: pointer;
}
.img-upload {
  width: 100%;
  max-height: 450px;
  border-radius: 8px;
}
</style>
