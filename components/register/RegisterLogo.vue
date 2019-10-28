<template>
  <div class="register-logo-container">
    <h1 class="register-logo"> LOGO </h1>
  </div>
</template>

<script>
export default {
  name: 'RegisterLogo'
}
</script>

<style>
.register-logo {
  animation: moveLogo 2s;
}

@keyframes moveLogo {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }to {
    opacity: 1;
    transform: translateY(0%);
  }
}

</style>