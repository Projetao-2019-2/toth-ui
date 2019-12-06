<template>
  <div class="global">
    <FilterBar v-if="!loading" :categories="categories" @updateFilter="updateFilter" />
    <LoadingIcon v-if="loading" message="Buscando ..." />
    <Results v-else :posts="posts" />
  </div>
</template>

<script>
import FilterBar from "~/components/posts/FilterBar";
import LoadingIcon from "~/components/LoadingIcon";
import Results from "~/components/posts/Results";
import { mapState } from "vuex";

export default {
  middleware: "categories",
  components: {
    FilterBar,
    Results,
    LoadingIcon
  },
  computed: {
    categories: function() {
      return this.$store.getters["categories/getAll"];
    },
    posts: function() {
      if (this.activeFilter) {
        let categoriesId = [];
        this.categoriesFilter.forEach(cat => {
          if (cat.selected) categoriesId.push(cat.categorie.id);
        });
        return this.$store.getters["posts/getSearchResultsByCategories"](
          categoriesId
        );
      }
      return this.$store.getters["posts/getAllSearchResults"];
    }
  },
  data() {
    return {
      loading: false,
      activeFilter: false,
      categoriesFilter: []
    };
  },
  methods: {
    async search() {
      this.loading = true;
      await this.$store.dispatch("posts/search", this.$route.query.search);
      this.loading = false;
    },
    updateFilter(categories) {
      this.categoriesFilter = categories;
      this.activeFilter = true;
    }
  },
  async mounted() {
    this.search();
  },
  watch: {
    $route(to, from) {
      if (to.name === "index" && to.query.search !== from.query.search) {
        this.search();
      }
    }
  }
};
</script>

<style>
.global {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 0;
}
.global .grid {
  margin-top: 24px;
}
.global .box-spinner p {
  color: black;
}
</style>
