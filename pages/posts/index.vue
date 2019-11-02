<template>
  <div class="global">
    <FilterBar />
    <Dashboard />
  </div>
</template>

<script>
import FilterBar from "../../components/posts/FilterBar"
import Dashboard from "../../components/posts/Dashboard"

export default {
  components: {
    Dashboard,
    FilterBar
  }
}
</script>

<style>
.global{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin: 0 10%;
}
</style>
