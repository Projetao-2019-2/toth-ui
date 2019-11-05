<template>
  <div class="profilebox-container">
    <div class="settings-user-photo">
      <div class="photo-wrapper">
        <label for="file">
          <img v-if="havePhoto" src="./joao.jpg" />
          <font-awesome-icon v-else :icon="['fas', 'user']" size="4x"></font-awesome-icon>
        </label>
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          class="set-inputfile"
          @change="onFileSelected"
        />
      </div>
    </div>
    <div class="inputs-wrapper">
      <div class="box-input">
        <h6>Nome</h6>
        <b-form-input class="input-profile-box"></b-form-input>
      </div>
      <div class="box-input">
        <h6>Sobrenome</h6>
        <b-form-input class="input-profile-box"></b-form-input>
      </div>
      <span>
        <h4>Redes Sociais</h4>
      </span>
      <div class="box-input">
        <h6>Instagram</h6>
        <b-form-input class="input-profile-box"></b-form-input>
      </div>
      <div class="box-input">
        <h6>Facebook</h6>
        <b-form-input class="input-profile-box"></b-form-input>
      </div>
      <div class="box-input">
        <h6>Twitter</h6>
        <b-form-input class="input-profile-box"></b-form-input>
      </div>
      <span>
        <b-button variant="success">Atualizar</b-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBox",
  data() {
    return {
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
.profilebox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 600px;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  background: #fff;
  padding-top: 30px;
}
.box-input {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.box-input h6 {
  margin: 0;
  padding: 0 10px 0 0;
}
.input-profile-box {
  width: 350px;
}
.inputs-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.settings-user-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 50%;
}

.settings-user-photo:hover {
  cursor: pointer;
}

.settings-user-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.photo-wrapper label {
  margin: 0;
  padding: 0;
}

.photo-wrapper label:hover {
  cursor: pointer;
}

.set-inputfile {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
</style>