<template>
  <div class="profilebox-container">
    <div class="settings-user-photo">
      <div class="photo-wrapper">
        <label for="file">
          <div v-if="havePhoto">
            <img v-if="this.image" :src="imageUrl" />
            <img v-else :src="user.imagepath" />
          </div>
          <div v-else>
            <img v-if="this.image" :src="imageUrl" />
            <font-awesome-icon v-else :icon="['fas', 'user']" size="4x"></font-awesome-icon>
          </div>
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
        <div class="label-input">Nome</div>
        <b-form-input :placeholder="user.nome" v-model="name" class="input-profile-box"></b-form-input>
      </div>
      <div v-if="user.type !== 'highschool'" class="inputs-wrapper">
        <div class="box-input">
          <div class="label-input">Universidade</div>
          <b-form-input :placeholder="user.ies" v-model="university" class="input-profile-box"></b-form-input>
        </div>
        <div class="box-input">
          <div class="label-input">Curso</div>
          <b-form-input :placeholder="user.curso" v-model="course" class="input-profile-box"></b-form-input>
        </div>
      </div>
      <div class="box-input">
        <div class="label-input">Instagram</div>
        <b-form-input
          :placeholder="user.instagram_link"
          v-model="link_instagram"
          class="input-profile-box"
        ></b-form-input>
      </div>
      <div class="box-input">
        <div class="label-input">Facebook</div>
        <b-form-input
          :placeholder="user.facebook_link"
          v-model="link_facebook"
          class="input-profile-box"
        ></b-form-input>
      </div>
      <div class="box-input">
        <div class="label-input">Twitter</div>
        <b-form-input
          :placeholder="user.twitter_link"
          v-model="link_twitter"
          class="input-profile-box"
        ></b-form-input>
      </div>
      <div class="spinner-btn-update-settings">
        <b-spinner
          v-if="disableButton"
          variant="success"
          style="width: 2rem; height: 2rem;"
          label="Large Spinner"
        ></b-spinner>
        <font-awesome-icon
          v-if="!disableButton"
          :icon="['fas', 'check-circle']"
          size="2x"
          class="icon-social-network"
        ></font-awesome-icon>
        <b-button variant="success" @click="updateData" :disabled="disableButton">Atualizar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBox",
  data() {
    return {
      havePhoto: false,
      disableButton: false,
      image: "",
      imageUrl: null,
      name: "",
      university: "",
      course: "",
      link_instagram: "",
      link_facebook: "",
      link_twitter: ""
    };
  },
  methods: {
    showImage(file) {
      this.havePhoto = true;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(file);
    },

    onFileSelected(event) {
      this.image = event.target.files[0];
      this.showImage(this.image);
    },

    buildnewData() {
      const oldData = this.$auth.$state.user;
      var body = new FormData();

      if (this.image) {
        body.append("file", this.image || []);
      }

      if (this.name.length !== 0 && oldData.nome !== this.name) {
        body.append("nome", this.name);
      }
      if (this.university.length !== 0 && oldData.ies !== this.university) {
        body.append("ies", this.university);
      }
      if (this.course.length !== 0 && oldData.curso !== this.course) {
        body.append("curso", this.course);
      }
      if (
        this.link_instagram.length !== 0 &&
        oldData.instagram_link !== this.link_instagram
      ) {
        body.append("instagram_link", this.link_instagram);
      }
      if (
        this.link_facebook.length !== 0 &&
        oldData.facebook_link !== this.link_facebook
      ) {
        body.append("facebook_link", this.link_facebook);
      }
      if (
        this.link_twitter.length !== 0 &&
        oldData.twitter_link !== this.link_twitter
      ) {
        body.append("twitter_link", this.link_twitter);
      }

      return body;
    },

    async updateData() {
      this.disableButton = true;
      const newData = this.buildnewData();
      try {
        const response = await this.$axios.$put(
          "users/" + this.user.id,
          newData
        );
        this.disableButton = false;
      } catch (e) {
        console.log("Ocorreu um erro! " + e);
        alert("Ocorreu um erro!");
        this.disableButton = false;
      }
    }
  },
  computed: {
    user: function() {
      const userData = this.$auth.$state.user;
      if (userData.image) {
        this.havePhoto = true;
      }
      if (userData.imagepath === null) this.havePhoto = false;
      return userData;
    }
  }
};
</script>

<style scoped>
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
  margin-bottom: 15px;
}
.label-input {
  font-size: 1.1em;
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
  width: 150px;
  height: 150px;
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

.photo-wrapper label img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
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

.spinner-btn-update-settings {
  display: flex;
  align-items: center;
}
.spinner-btn-update-settings button {
  margin-left: 10px;
}
</style>