<template>
  <div class="register-container">
    <RegisterLogo />
    <RegisterForm @submitFormRegister="onSubmitForm"/>
  </div>
</template>

<script>
import RegisterLogo from "../../components/register/RegisterLogo"
import RegisterForm from "../../components/register/RegisterForm"

export default {
  components: {
    RegisterLogo,
    RegisterForm
  },
  methods: {
    onSubmitForm (data) {
      console.log(data);
      alert('Cadastro realizado com sucesso! Teste ... ')
    }
  }
}
</script>

<style>
.register-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>