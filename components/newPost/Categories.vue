<template>
  <div class="categories-wrapper">
    <b-form-select class="categories-form-select" v-model="categoryId" :options="options"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: ["categories"],
  data() {
    return {
      categoryId: null
    };
  },
  watch: {
    categoryId: function() {
      this.$emit("categorie-selected", this.categoryId);
    }
  },
  computed: {
    options: function() {
      let output = [];
      output.push({
        value: null,
        text: "Categorias"
      });
      this.categories.forEach(cat => {
        output.push({
          value: cat.id,
          text: cat.name
        });
      });
      return output;
    }
  }
};
</script>

<style scoped>
.categories-form-select {
  width: 300px;
  height: 40px;
  background-color: #efefef;
  margin-right: 40px;
  border: 0;
}
</style>
