<template>
  <div class="categories-wrapper">
    <b-form-select class="categories-form-select" v-model="selected" :options="options"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Categorias" },
        { value: "Infr", text: "Infraestrutura" },
        { value: "Expe", text: "Experiência em disciplinas" },
        { value: "Ativ", text: "Atividades extracurriculares" },
        { value: "Arre", text: "Arredores" }
      ]
    };
  },
  watch: {
    selected: function() {
      this.$emit("categorie-selected", this.selected);
    }
  }
};
</script>

<style scoped>
.categories-form-select {
  width: 300px;
  height: 40px;
  background-color: #efefef;
  margin-right: 18px;
  border: 0;
}
</style>
