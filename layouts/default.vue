<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Nortuni</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Cadastrar</b-nav-item>
          <b-nav-item href="#">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <nuxt class="route-info" />
  </div>
</template>

<style scoped>
.main {
  background-color: #eeeeee;
}
.route-info {
  padding: 16px;
  margin-top: 16px;
  background-color: white;
}
</style>
