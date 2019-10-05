<template>
  <div class="register-container">
    <div class="logo-form-wrapper">
      <RegisterLogo />
      <RegisterForm />
    </div>
    <div class="footer-wrapper">
      <RegisterFooter />
    </div>
  </div>
</template>

<script>
import RegisterLogo from "../../components/register/RegisterLogo"
import RegisterForm from "../../components/register/RegisterForm"
import RegisterFooter from "../../components/register/RegisterFooter"

export default {
  components: {
    RegisterLogo,
    RegisterForm,
    RegisterFooter
  }
}
</script>

<style>

.register-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.logo-form-wrapper {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.footer-wrapper {
  align-items: center;
  background-image: linear-gradient(#88CBE2, #8EAFE1);
  border-top: 1px solid grey;
  display: flex;
  justify-content: center;
  height: 120px;
  width: 100%;
}

</style>