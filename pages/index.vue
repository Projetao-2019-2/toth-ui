<template>
  <div class="global">
    <FilterBar v-if="!loading" :categories="categories" @updateFilter="updateFilter" />
    <LoadingIcon v-if="loading" message="Buscando ..." />
    <Results v-else :posts="results" />
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
    ...mapState("posts", {
      results: "searchResults"
    }),
    categories: function() {
      return this.$store.getters["categories/getAll"];
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async search() {
      this.loading = true;
      await this.$store.dispatch("posts/search", this.$route.query.search);
      this.loading = false;
    },
    updateFilter(categories) {
      let posts = this.$store.getters["posts/getSearchResults"];
      let output = [];
      // Isso aqui ta uma merda, se tiver muitos posts, pode demorar demais
      // Mas eu não queria auterar a ordem dos posts ...
      posts.forEach(post => {
        categories.forEach(cat => {
          if (cat.selected && cat.categorie.id === post.category.id)
            output.push(post);
        });
      });
      console.log(output);
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
