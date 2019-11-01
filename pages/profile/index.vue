<template>
  <div class="profile-container">
    <div class="profile-information-container">
      <div class="photo-networks-wrapper">
        <UserPhoto />
        <SocialNetworks />
      </div>
      <div class="name-course-rank-wrapper">
        <UserData />
      </div>
    </div>
    <div class="list-posts-user grid">
      <Post v-for="item in posts" :key="item.id" :post="item" />
    </div>
  </div>
</template>

<script>
import UserPhoto from "../../components/profile/UserPhoto/main";
import SocialNetworks from "../../components/profile/SocialNetworks/main";
import UserData from "../../components/profile/UserData/main";
import Post from "./post";

export default {
  name: "ProfileScreen",
  middleware: "auth",
  components: {
    UserPhoto,
    SocialNetworks,
    UserData,
    Post
  },
  methods: {
    resizeGridItem(item) {
      let grid = document.getElementsByClassName("grid")[0];
      let rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      let rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      let rowSpan = Math.ceil(
        (item.querySelector(".content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    },
    resizeAllGridItems() {
      var allItems = document.getElementsByClassName("item");
      for (let x = 0; x < allItems.length; x++) {
        this.resizeGridItem(allItems[x]);
      }
    },
    resizeInstance() {
      var allItems = document.getElementsByClassName("item");
      for (let x = 0; x < allItems.length; x++) {
        this.resizeGridItem(allItems[x]);
      }
    },
    animate() {
      window.requestAnimationFrame(this.animate);
      this.resizeAllGridItems();
    }
  },
  computed: {
    posts: function() {
      return this.$store.getters["posts/getAllPosts"];
    }
  },
  async fetch({ store }) {
    await store.dispatch("posts/getAll");
  },
  mounted() {
    // window.onload = this.resizeAllGridItems();
    // window.addEventListener("resize", this.resizeAllGridItems);
    this.resizeInstance();
    this.animate();
  }
};
</script>

<style>
.profile-container {
  min-height: 100vh;
  width: 100%;
}
.profile-information-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}
.photo-networks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.name-course-rank-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
}
.list-posts-user {
  width: 100%;
}
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 20px;
  justify-items: center;
  margin-top: 10px;
}
@media (max-width: 655px) {
  .profile-information-container {
    flex-direction: column;
    align-items: center;
  }
  .name-course-rank-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
  .university-user,
  .ranking-user {
    margin: 10px 0;
  }
}
@media (max-width: 500px) {
  .profile-information-container {
    flex-direction: column;
    align-items: center;
  }
  .name-course-rank-wrapper {
    align-items: center;
  }
  .university-user,
  .ranking-user {
    margin: 10px 0;
  }
  .name-user {
    font-size: 2em;
  }
  .university-user p,
  .ranking-user p {
    font-size: 1.2em;
  }
}
@media (max-width: 326px) {
  .name-user {
    font-size: 1.5em;
  }
}
</style>
