<template>
  <div class="global">
    <FilterBar />
    <Results :posts="results" />
  </div>
</template>

<script>
import FilterBar from "../../components/posts/FilterBar";
import Results from "../../components/posts/Results";
import { mapState } from "vuex";
export default {
  components: {
    FilterBar,
    Results
  },
  computed: {
    ...mapState("posts", {
      results: "searchResults"
    })
  },
  async mounted() {
    await this.$store.dispatch("posts/search", this.$route.query.search);
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
</style>
