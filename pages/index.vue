<template>
  <div class="global">
    <FilterBar @updateFilter="updateFilter" />
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
  components: {
    FilterBar,
    Results,
    LoadingIcon
  },
  computed: {
    ...mapState("posts", {
      results: "searchResults"
    })
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
      console.log(categories);
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
