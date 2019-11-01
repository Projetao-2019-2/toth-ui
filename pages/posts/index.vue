<template>
  <div class="global">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "../../components/posts/Dashboard"

export default {
  components: {
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
  width: 90%;
  margin: 0 5%;
}
</style>
