<template>
  <div class="register-container">
    <RegisterLogo />
    <RegisterForm @submitFormRegister="onSubmitForm" :disableButton="disableButton" />
  </div>
</template>

<script>
import RegisterLogo from "../../components/register/RegisterLogo";
import RegisterForm from "../../components/register/RegisterForm";

export default {
  data() {
    return {
      disableButton: false
    };
  },
  components: {
    RegisterLogo,
    RegisterForm
  },
  methods: {
    async onSubmitForm(data) {
      console.log(data);
      try {
        this.disableButton = true;
        const response = await this.$axios.$post("users", data);
        // console.log(response);
        alert("Cadastro realizado! Clique em Login!");
      } catch (e) {
        console.log("Ocorreu um erro! " + e);
        this.disableButton = false;
      }
    }
  }
};
</script>

<style>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>