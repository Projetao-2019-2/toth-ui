<template>
  <div class="form-register-container">
    <form @submit.prevent="onSubmit()">
      <div class="register-input-block item-form-reg">
        <b-form-input 
          type="text" 
          v-model="firstName" 
          placeholder="Nome" 
          required>
        </b-form-input>
        <b-form-input 
          type="text" 
          v-model="lastName" 
          placeholder="Sobrenome" 
          required>
        </b-form-input>
      </div>
      <b-form-input 
        type="email" 
        v-model="email" 
        placeholder="E-mail" 
        required 
        class="item-form-reg">
      </b-form-input>
      <b-form-input 
        type="text" 
        v-model="university" 
        placeholder="Universidade" 
        required 
        class="item-form-reg">
      </b-form-input>
      <b-form-input 
        type="text" 
        v-model="course" 
        placeholder="Curso" 
        required 
        class="item-form-reg">
      </b-form-input>
      <b-form-input 
        type="password" 
        v-model="password" 
        placeholder="Senha" 
        required 
        class="item-form-reg">
      </b-form-input>
      <b-form-input 
        type="password" 
        v-model="repeatPassword" 
        placeholder="Repetir Senha" 
        required 
        class="item-form-reg">
      </b-form-input>
      <MessagePassword 
        :firstPassword="password" 
        :secondPassword="repeatPassword"
        @validPasswords="passwordStatus = true"
        @invalidPasswords="passwordStatus = false"/>
      <b-button 
        type="submit" 
        variant="success" 
        class="button-form-reg"> Inscrever-se </b-button>
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
      repeatPassword: '',
      passwordStatus: false
    }
  },
  methods: {
    onSubmit () {
      if (!this.passwordStatus) {
        alert('Senhas inválidas!')
      } else {
        const dataFormRegister = {
          nome: this.firstName + ' ' + this.lastName,
          email: this.email,
          curso: this.course,
          ies: this.university,
          type: 'Student',
          password: this.password
        }
        this.$emit('submitFormRegister', dataFormRegister);
      }
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

  .item-form-reg {
    margin-bottom: 5px;
  }

  .button-form-reg {
    width: 100%;
    animation: moveSubmit 1.5s;
  }

  .register-input-block {
    display: flex;
    justify-content: space-between;
  }

  .register-input-block input {
    width: 49%;
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

  @media only screen and (max-width: 460px) {
    .form-register-container {
      width: 99%;
    }
    .register-input-block {
      display: flex;
      flex-direction: column;
    }
    .register-input-block input {
      width: 100%;
    }
  }
</style>