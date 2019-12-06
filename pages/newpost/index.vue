<template>
  <div class="newpost-wrapper">
    <div class="newpost-box" v-if="!isPosting">
      <div class="top-box">
        <Categories @categorie-selected="updateCategorie" :categories="categories" />
      </div>
      <div class="bottom-box">
        <div class="photo-buttom-box">
          <div class="photo-box">
            <Media @onFileSelected="updateImage" />
          </div>
          <div class="buttom-box">
            <button class="btn-post" :style="{ background: btnBackg}" @click="doPost()">Postar</button>
          </div>
        </div>
        <div class="data-box">
          <h5>Fala aí, {{user.nome}}</h5>
          <InputText @newMessage="updateMessage" :categoryDescription="categoryDescription" />
          <h6 v-if="showWarning">Você está esquecendo algo!</h6>
        </div>
      </div>
    </div>
    <div class="spinner-box newpost-box" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Categories from "../../components/newPost/Categories";
import Media from "../../components/newPost/Media";
import InputText from "../../components/newPost/TextBox/main";
import Spinner from "../../components/LoadingIcon";

export default {
  name: "NewPost",
  middleware: ["auth", "categories"],
  components: {
    Categories,
    Media,
    InputText,
    Spinner
  },
  data() {
    return {
      showWarning: false,
      isPosting: false,
      selectedCategoryId: "",
      image: null,
      message: ""
    };
  },
  methods: {
    updateCategorie(id) {
      this.selectedCategoryId = id;
    },
    updateImage(file) {
      this.image = file;
    },
    updateMessage(msg) {
      this.message = msg;
    },
    geTselectedCategory: function() {
      for (const cat of this.categories) {
        if (cat.id === this.selectedCategoryId) {
          return cat;
        }
      }
      return null;
    },
    checkForm() {
      if (this.selectedCategoryId && (this.message.length || this.image))
        return true;
      else return false;
    },
    async doPost() {
      // console.log(this.selectedCategoryId);
      // console.log(this.image);
      // console.log(this.message);

      let validForm = this.checkForm();
      if (validForm) {
        this.isPosting = true;
        var body = new FormData();
        body.append("texto", this.message);
        body.append("categoryid", this.selectedCategoryId);
        body.append("file", this.image || []);
        try {
          const newPost = await this.$store.dispatch("posts/send", body);
          this.$router.push(`/posts/${newPost.id}`);
        } catch (e) {
          console.log("Ocorreu um erro! " + e);
          alert("Ocorreu um erro!");
        }
      } else {
        this.showWarning = true;
      }
    }
  },
  computed: {
    btnBackg: function() {
      let cat = this.geTselectedCategory();
      if (cat) return cat.color;
      else return "#D13B4C";
    },
    user: function() {
      return this.$auth.$state.user;
    },
    categories: function() {
      return this.$store.getters["categories/getAll"];
    },
    categoryDescription: function() {
      let cat = this.geTselectedCategory();
      if (cat) return cat.description;
      else return "Escolha uma categoria!";
    }
  }
};
</script>

<style scoped>
.newpost-wrapper {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: flex;
  justify-content: center;
}
.newpost-box {
  width: 880px;
  height: 650px;
  margin-top: 60px;
  border-radius: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.spinner-box {
  justify-content: center;
  align-items: center;
}
.top-box {
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.bottom-box {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.photo-buttom-box {
  width: 340px;
  height: 520px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
}
.photo-box {
  height: 450px;
  background-color: #efefef;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttom-box {
  height: 50px;
}
.btn-post {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 0;
  color: rgb(49, 47, 47);
  font-weight: bold;
}
.btn-post:hover {
  border: 2px solid black;
}
.data-box {
  width: 420px;
  height: 450px;
  margin-right: 40px;
}
.data-box h5 {
  font-weight: bold;
}
.data-box h6 {
  font-weight: bold;
  color: red;
}
</style>
