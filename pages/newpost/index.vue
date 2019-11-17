<template>
  <div class="newpost-wrapper">
    <div class="newpost-box">
      <div class="top-box">
        <Categories @categorie-selected="updateCategorie" />
      </div>
      <div class="bottom-box">
        <div class="photo-buttom-box">
          <div class="photo-box">
            <Media />
          </div>
          <div class="buttom-box">
            <button class="btn-post" :style="{ background: btnBackg}">Postar</button>
          </div>
        </div>
        <div class="data-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "../../components/newPost/Categories";
import Media from "../../components/newPost/Media";

export default {
  name: "NewPost",
  components: {
    Categories,
    Media
  },
  data() {
    return {
      categorieSelected: ""
    };
  },
  methods: {
    updateCategorie(categorie) {
      this.categorieSelected = categorie;
    }
  },
  computed: {
    btnBackg: function() {
      switch (this.categorieSelected) {
        case "Infr":
          return "#1DBDFF";
          break;
        case "Expe":
          return "#16D64C";
          break;
        case "Ativ":
          return "#FF8E20";
          break;
        case "Arre":
          return "#FF6DD5";
          break;
        default:
          return "#D13B4C";
      }
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
.top-box {
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.bottom-box {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-buttom-box {
  width: 340px;
  height: 520px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  background-color: #efefef;
  border: 0;
  color: rgb(49, 47, 47);
  font-weight: bold;
}
.data-box {
  width: 420px;
  height: 450px;
  border: 1px solid grey;
}
</style>
