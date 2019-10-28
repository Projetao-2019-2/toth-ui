<template>
  <div class="profile-container">
    <div class="profile-information-container">
      <div class="photo-networks-wrapper">
        <div class="photo-wrapper"></div>
        <div class="networks-wrapper">
          <a href="https://www.facebook.com" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              size="2x"
              class="icon-social-network"
            ></font-awesome-icon>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="icon-social-network"></font-awesome-icon>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'twitter-square']"
              size="2x"
              class="icon-social-network"
            ></font-awesome-icon>
          </a>
          <a href="mailto:#" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="icon-social-network"></font-awesome-icon>
          </a>
        </div>
      </div>
      <div class="name-course-rank-wrapper">
        <div>
          <span class="name-user">Rosinaldo Guedes</span>
        </div>
        <div class="university-user">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" size="2x" class="icon-uni"></font-awesome-icon>
          <p>Engenharia da Computação - UFPE</p>
        </div>
        <div class="ranking-user">
          <font-awesome-icon :icon="['fas', 'medal']" size="2x" class="icon-uni"></font-awesome-icon>
          <p>Veterano Engajador</p>
          <b-button variant="success" @click="goToRank">Ranking</b-button>
        </div>
      </div>
    </div>
    <div class="list-posts-user grid">
      <Post v-for="item in [1,2,3,4,5,6,7,8,9,10,11]" :key="item" :num="item" />
    </div>
  </div>
</template>

<script>
import Post from "./post";

export default {
  name: "ProfileScreen",
  middleware: "auth",
  components: {
    Post
  },
  methods: {
    goToRank() {
      alert("Deveria ir para a página rank!");
    },
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
  margin-bottom: 20px;
}
.photo-networks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.photo-wrapper {
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
}
.networks-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.icon-social-network:hover {
  cursor: pointer;
}
.input-link-social-network {
  margin-top: 10px;
}
.name-course-rank-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
}
.university-user,
.ranking-user {
  display: flex;
}
.ranking-user {
  align-items: center;
}
.name-user {
  font-size: 2.5em;
  font-weight: bold;
}
.university-user p,
.ranking-user p {
  font-size: 1.5em;
}
.university-user p {
  margin: 0 0 0 20px;
}
.ranking-user p {
  margin: 0 28px;
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
    align-items: center;
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
