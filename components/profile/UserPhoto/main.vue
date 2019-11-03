<template>
  <div class="user-photo-container">
    <div v-if="ownerProfile">
      <div class="input-file-container">
        <label for="file">
          <img v-if="havePhoto" src="./joao.jpg" />
          <font-awesome-icon v-else :icon="['fas', 'user']" size="4x"></font-awesome-icon>
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
    </div>
    <div v-else>
      <img v-if="havePhoto" src="./joao.jpg" />
      <font-awesome-icon v-else :icon="['fas', 'user']" size="4x"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserPhoto",
  data() {
    return {
      ownerProfile: false,
      havePhoto: true
    };
  },
  methods: {
    onFileSelected(event) {
      const selectedFile = event.target.files[0];
      alert("Foto selecionada");
    }
  }
};
</script>

<style>
.user-photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 50%;
}

.user-photo-container:hover {
  cursor: pointer;
}

.user-photo-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

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