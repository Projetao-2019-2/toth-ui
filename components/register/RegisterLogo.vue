<template>
  <div class="register-logo-container">
    <img src="./junte_se_logo.png"
      class="img-juntese-logo"/>
  </div>
</template>

<script>
export default {
  name: 'RegisterLogo'
}
</script>

<style scoped>

.img-juntese-logo {
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