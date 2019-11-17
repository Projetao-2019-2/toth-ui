<template>
  <div class="global">
    <FilterBar />
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
    }
  },
  async mounted() {
    this.search();
  },
  watch: {
    $route(to, from) {
      if (to.name === "posts" && to.query.search !== from.query.search) {
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
  width: 80%;
  margin: 0 10%;
}
.global .grid {
  margin-top: 24px;
}

.global .box-spinner p {
  color: black;
}
</style>
