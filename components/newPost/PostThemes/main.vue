<template>
  <div class="post-categories-container">
    <b-button
      v-for="categorie in categories"
      :key="categorie.name"
      :style="{ background: backgColor(categorie)}"
      @click="$emit('selectedCategorie', categorie)"
    >{{categorie.name}}</b-button>
  </div>
</template>

<script>
export default {
  name: "PostCategories",
  props: ["categories", "selectedCategorie"],
  methods: {
    backgColor(tm) {
      if (tm.id === this.selectedCategorie.id) {
        return tm.color;
      } else {
        return "#6D767F";
      }
    }
  }
};
</script>

<style>
.post-categories-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  width: 100%;
}
</style>