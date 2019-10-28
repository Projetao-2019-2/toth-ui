<template>
  <div id="container">
    <div id="login">
      <h1>Login</h1>
      <b-form-input class="mb-1 form-control" type="email" v-model="email" placeholder="Email"></b-form-input>
      <b-form-input class="form-control" type="password" v-model="password" placeholder="Password" ></b-form-input>
      <br />
      <b-button class="form-control" variant="success" v-on:click="login()">Entrar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
    if(this.validEmail(this.email)){
        try {
          await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push("/");
        } catch (e) {
          console.log(e);
        }
      }
    },
    validEmail: function(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

  }
};
</script>

<style>
#container {
  position: absolute;
  height: 85%;
  width: 100%;
  background-color: #eeeeee;
}
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 200px;

  padding: 20px;
}
h1{
  text-align : center
}
</style>