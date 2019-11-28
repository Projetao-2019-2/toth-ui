<template>
  <div class="filter-bar">
    <span class="filter-name">Filtro</span>
    <div
      class="category-box"
      v-for="item in filterCategories"
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
  props: ["categories"],
  data() {
    return {
      filterCategories: []
    };
  },
  methods: {
    updateFilter(id) {
      this.filterCategories.forEach(item => {
        if (item.categorie.id === id) {
          item.selected = !item.selected;
        }
      });
      this.$emit("updateFilter", this.filterCategories);
    }
  },
  created() {
    this.categories.forEach(cat => {
      this.filterCategories.push({
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
