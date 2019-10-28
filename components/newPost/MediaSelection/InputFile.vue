<template>
  <div class="input-file-container">
    <label for="file">
      <img 
        src="./uploadphoto.png" 
        width="100px" 
        height="100px"/>
    </label>
    <input 
      type="file" 
      accept="image/*" 
      name="file" id="file" 
      class="inputfile" 
      @change="selectFile"/>
  </div>
</template>

<script>
export default {
  name: 'InputFile',
  methods: {
    selectFile () {
      console.log('Arquivo selecionado');
    }
  }
}
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