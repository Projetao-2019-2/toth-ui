<template>
  <div class="wrapper">
    <input
      v-model="searchString"
      class="nav-input"
      type="text"
      placeholder="Curso - Universidade"
      @keydown.enter="doSearch"
    />
    <div class="search-icon">
      <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarInput",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    doSearch() {
      this.$router.push({
        path: "/",
        query: { search: this.searchString }
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  background: #efefef;
  border-radius: 8px;
  border: none;
  padding: 0.5em 1em;
  height: 40px;
  position: relative;
  box-sizing: border-box;
}

.wrapper:focus {
  box-shadow: rgba(0, 132, 255, 0.5) 0px 0px 0px 4px;
}

.nav-input {
  width: 100%;
  border: none;
  background: transparent;
  display: block;
  padding: 0px 20px;
}

.nav-input:focus {
  outline: none;
}

.search-icon {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 3px;
  padding: 5px;
  z-index: 2;

  color: #8e8e8e;
}
</style>
