<template>
  <div class="register-logo-container">
    <img src="./logo.png" width="150px" height="150px" />
    <p class="register-logo">Junte-se à Journi</p>
  </div>
</template>

<script>
export default {
  name: "RegisterLogo"
};
</script>

<style>
.register-logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-logo-container p {
  font-size: 3em;
  margin-bottom: 30px;
}

.register-logo {
  animation: moveLogo 2s;
}

@keyframes moveLogo {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
