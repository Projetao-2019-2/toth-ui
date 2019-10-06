<template>
  <div class="form-register-container">
    <form @submit.prevent="onSubmit()">
      <div class="register-input-block">
        <input type="text" placeholder="Nome" required 
          class="input-form-register"
          v-model="firstName">
        <input type="text" placeholder="Sobrenome" required
          class="input-form-register" 
          v-model="lastName">
      </div>
      <input type="text" placeholder="E-mail" required
        class="input-form-register"
        v-model="email">
      <input type="text" placeholder="Universidade" required
        class="input-form-register"
        v-model="university">
      <input type="text" placeholder="Curso" required
        class="input-form-register" 
        v-model="course">
      <input type="password" placeholder="Senha" required
        class="input-form-register"
        v-model="password">
      <input type="password" placeholder="Repetir Senha" required
        class="input-form-register"
        v-model="repeatPassword">
      <MessagePassword 
        :firstPassword="password" 
        :secondPassword="repeatPassword"/>
      <input type="submit" value="Inscrever-se"
        class="input-form-register">
    </form>
  </div>
</template>

<script>
import MessagePassword from "../register/MessagePassword"

export default {
  name: 'RegisterForm',
  components: {
    MessagePassword
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      university: '',
      course: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('Submit')
    }
  }
}
</script>

<style>
  .form-register-container {
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-form-register {
    width: 100%;
    margin-bottom: 10px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid grey;
    padding-left: 5px;
    animation: moveInput 1s;
  }

  .input-form-register[type="submit"] {
    padding-left: 0;
    animation: moveSubmit 1.5s;
    background: #8EAFE1;
    font-weight: bold;
  }

  .input-form-register[type="submit"]:hover {
    cursor: pointer;
    background: #88CBE2;
  }

  .register-input-block {
    display: flex;
    justify-content: space-between;
  }

  .register-input-block input {
    width: 49%;
  }

  @keyframes moveInput{
    from {
      opacity: 0;
      transform: translateX(-100%);
    } to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes moveSubmit{
    from {
      opacity: 0;
      transform: translateY(200%);
    } to {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>