<template>
  <div class="newpost-container">
    <div v-if="!isPosting">
      <PostThemes
        :categories="categories"
        @selectedCategorie="updateSelectedCategorie"
        :selectedCategorie="selectedCategorie"
      />
      <MediaSelection :categorie="selectedCategorie" @onFileSelected="imageSelected" />
      <TextBox :categorie="selectedCategorie" @newMessage="updateInputMessage" />
      <div class="button-wrapper">
        <b-button variant="light" size="lg" @click="doPost()" :disabled="buttonNotActive">Postar</b-button>
      </div>
    </div>
    <LoadingIcon v-else message="Postando ..." />
  </div>
</template>

<script>
import PostThemes from "./PostThemes/main";
import MediaSelection from "./MediaSelection/main";
import TextBox from "./TextBox/main";
import LoadingIcon from "~/components/LoadingIcon";

export default {
  name: "NewPost",
  props: ["categories"],
  components: {
    PostThemes,
    MediaSelection,
    TextBox,
    LoadingIcon
  },
  data() {
    return {
      isPosting: false,
      buttonNotActive: true,
      selectedCategorie: null,
      image: null,
      inputMessage: ""
    };
  },
  methods: {
    imageSelected(file) {
      this.image = file;
    },

    checkInputMessage(msg) {
      if (msg.length === 0) {
        this.buttonNotActive = true;
      } else {
        this.buttonNotActive = false;
      }
    },

    updateSelectedCategorie(categorie) {
      this.selectedCategorie = categorie;
    },

    updateInputMessage(msg) {
      this.inputMessage = msg;
      this.checkInputMessage(msg);
    },

    resetData() {
      this.isPosting = false;
      this.buttonNotActive = true;
      this.image = null;
      this.$emit("postDone");
    },

    async doPost() {
      this.isPosting = true;
      console.log("O tema da postagem é: " + this.selectedCategorie.name);
      console.log("O texto da postagem é: " + this.inputMessage);
      console.log(this.image);

      if (this.image) {
        var fd = new FormData();
        fd.append("image", this.image, this.image.name);
      }

      var body = new FormData();
      body.append("texto", this.inputMessage);
      body.append("categoryid", this.selectedCategorie.id);
      body.append("file", this.image || []);

      try {
        const newPost = await this.$store.dispatch("posts/send", body);
        this.resetData();
        this.$router.push(`/posts/${newPost.id}`);
      } catch (e) {
        this.resetData();
        console.log("Ocorreu um erro! " + e);
        alert("Ocorreu um erro!");
      }
    }
  },
  created() {
    this.categories.forEach((item, index) => {
      if (index === 1) {
        this.selectedCategorie = item;
      }
    });
  }
};
</script>

<style>
.newpost-container {
  background: #011932;
  width: 800px;
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
}
</style>
