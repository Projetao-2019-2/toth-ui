<template>
  <div class="dashboard-container">
    <FilterDashboard />
    <Posts />
  </div>
</template>

<script>
import FilterDashboard from "../../components/dashboard/filter/Container"
import Posts from "../../components/dashboard/posts/Container"

export default {
  name: "Dashboard",
  components: {
    FilterDashboard,
    Posts
  }
}
</script>

<style>
  .dashboard-container{
    width: 100%;
    min-height: 100vh;
  }
</style>