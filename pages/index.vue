<template>
  <div class="search-container">
    <div class="logo-wrapper">
      <img src="~/assets/compass1.png" alt="nortuni" width="200px" height="200px"/>
      <span class="name-logo"> Nortuni </span>
    </div>
    <div class="input-search-wrapper">
      <b-input-group>
        <b-form-input v-model="searchText" placeholder="Curso - Universidade"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" class="btn-search" @click="doSearch(searchText)">
            <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    doSearch (text) {
      console.log('O texto da pesquisa foi: ' + text);
    }
  }
}
</script>

<style>
  .search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
  .logo-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .name-logo {
    font-size: 6em;
  }
  .input-search-wrapper {
    width: 500px;
  }
  .btn-search {
    width: 80px;
  }
</style>
