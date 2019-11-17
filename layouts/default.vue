<template>
  <div class="main">
    <Navbar />
    <hr class="nav-separator" />
    <nuxt class="route-info" />
  </div>
</template>

<script>

import Navbar from "~/components/navbar/Navbar";
import NewPostTrigger from "~/components/newPost/Trigger";
import { mapState } from "vuex";

export default {
  middleware: "categories",
  components: {
    Navbar,
    NewPostTrigger
  },
};
</script>

<style scoped>
.main {
  background: #fff;
  height: max-content;
}
</style>
