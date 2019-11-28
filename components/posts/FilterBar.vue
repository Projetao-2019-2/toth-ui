<template>
  <div class="filter-bar">
    <span class="filter-name">Filtro</span>
    <div
      class="category-box"
      v-for="item in categories"
      :key="item.categorie.name"
      @click="updateFilter(item.categorie.id)"
    >
      <div
        class="filter-category-circle"
        :style="{ backgroundColor: item.selected ? item.categorie.color : 'rgba(97, 97, 97, 0.4)' }"
      ></div>
      <span>{{item.categorie.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  middleware: "categorias",
  data() {
    return {
      categories: []
    };
  },
  computed: {
    categorias: function() {
      return this.$store.getters["categories/getAll"];
    }
  },
  // data(){
  //     hover: false
  // },
  async fetch({ store }) {
    await store.dispatch("categories/getAll");
  },
  methods: {
    styleObject: function(id) {
      console.log(id);
      console.log(this.categorias);
      return {
        if(hover) {
          background: id;
        }
      };
    },
    searchMethods: function(category_id) {
      this.$router.push({
        path: "posts",
        query: { search: searchText, category: category_id }
      });
    },
    updateFilter(id) {
      this.categories.forEach(item => {
        if (item.categorie.id === id) {
          item.selected = !item.selected;
        }
      });
      this.$emit("updateFilter", this.categories);
    }
  },
  created() {
    this.categorias.forEach(cat => {
      this.categories.push({
        categorie: cat,
        selected: true
      });
    });
  }
};
</script>

<style>
.filter-bar {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 59px;
  background-color: white;
  z-index: 10;
}

.filter-name {
  font-size: 1.2em;
  font-weight: bold;
}
.category-box {
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid grey;
  border-radius: 15px;
}

.category-box:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}

.category-box span {
  margin: 0 10px 0 10px;
}

.filter-category-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
}
</style>
