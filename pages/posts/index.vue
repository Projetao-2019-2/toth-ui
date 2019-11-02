<template>
  <div class="global">
    <FilterBar />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "../../components/posts/Dashboard"
import FilterBar from "../../components/posts/FilterBar"

export default {
  components: {
    FilterBar,
    Dashboard
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
