<template>
  <div 
    class="media-selection-container" 
    :style="{ background: imageIsSelected ? '#FFFFFB' : theme.color }">
    <InputFile @onFileSelected="imageSelected" v-if="!imageIsSelected"/>
    <div  class="img-selected-container" v-if="imageIsSelected">
      <img :src="imageUrl" class="img-upload">
      <div class="input-file-container">
        <label for="file">
          <font-awesome-icon :icon="['fas', 'file-upload']" size="2x" class="icon-img"></font-awesome-icon>
        </label>
        <input 
          type="file" 
          accept="image/*" 
          name="file" id="file" 
          class="inputfile"
          @change="onFileSelected"/>
        <font-awesome-icon :icon="['fas', 'trash-alt']" size="2x" class="icon-img icon-delete-img" @click="deleteImage"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
import InputFile from "./InputFile"

export default {
  name: 'MediaSelection',
  props: ['theme'],
  data () {
    return {
      imageIsSelected: false,
      imageUrl: ''
    }
  },
  components: {
    InputFile
  },
  methods: {
    deleteImage () {
      this.imageIsSelected = false
      this.$emit('onFileSelected', null);
    },
    showImage (file) {
      this.imageIsSelected = true
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })

      fileReader.readAsDataURL(file);
    },

    imageSelected (file) {
      this.showImage(file);
      this.$emit('onFileSelected', file);
    },

    onFileSelected (event) {
      const selectedFile = event.target.files[0];
      this.showImage(selectedFile);
      this.$emit('onFileSelected', selectedFile);
    }
  }
}
</script>

<style>
  .media-selection-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 10px 0;
  }
  .img-selected-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 300px;
    max-height: 600px;
  }
  .icon-img {
    margin-left: 30px;
  }
  .input-file-container {
    display: flex;
  }
  .icon-delete-img:hover {
    cursor: pointer;
  }
  .img-upload {
    width: 100%;
    max-height: 500px;
  }
</style>