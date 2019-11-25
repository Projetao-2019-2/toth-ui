<template>
  <div v-if="posts && posts.length > 0" class="list-posts grid">
    <PostBox v-for="item in posts" :key="item.id" :post="item" />
  </div>
  <div v-else class="empty-results">
    <p>Não encontrei nada.</p>
  </div>
</template>

<script>
import PostBox from "../../components/posts/PostBox";

export default {
  name: "Dashboard",
  props: ["posts"],
  components: {
    PostBox
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
    },
    filterCategorie(categories) {
      var allItems = document.getElementsByClassName("item");
      for (let x = 0; x < allItems.length; x++) {
        // console.log(allItems[x]);
      }
    }
  },
  async mounted() {
    await this.$store.dispatch("posts/search", this.$route.query.search);
    this.filterCategorie(this.$route.query.categorie);
    this.resizeInstance();
    this.animate();
  }
};
</script>

<style>
.list-posts {
  width: 90%;
  padding-top: 105px;
}

.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 20px;
  justify-items: center;
  margin-top: 10px;
}

.empty-results {
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  padding-top: 105px;
}
</style>
