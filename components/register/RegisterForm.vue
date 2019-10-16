<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit()">
      <div class="input-block">
        <input type="text" placeholder="Nome" v-model="firstName">
        <input type="text" placeholder="Sobrenome" v-model="lastName">
      </div>
      <input type="text" placeholder="E-mail" v-model="email">
      <input type="text" placeholder="Curso" v-model="course">
      <input type="password" placeholder="Senha" v-model="password">
      <input type="password" placeholder="Repetir Senha">
      <input type="submit" value="Inscrever-se">
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      course: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('firsName: ' + this.firstName);
      console.log('lastName: ' + this.lastName);
      console.log('email: ' + this.email);
      console.log('course: ' + this.course);
      console.log('password:' + this.password);
    }
  }
}
</script>

<style>

  .title-form-register {
    margin: 20px 0;
  }

  .form-container {
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid grey;
    padding-left: 5px;
    animation: moveInput 1s;
  }

  input[type="submit"] {
    padding-left: 0;
    animation: moveSubmit 1.5s;
    background: #8EAFE1;
    font-weight: bold;
  }

  input[type="submit"]:hover {
    cursor: pointer;
    background: #88CBE2;
  }

  .input-block {
    display: flex;
    justify-content: space-between;
  }

  .input-block input {
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