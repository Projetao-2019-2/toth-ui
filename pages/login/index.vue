<template>
  <div id="container">
    <div id="login">
      <h1>Login</h1>
      <input type="text" name="username" v-model="email" placeholder="Email" />
      <input type="password" name="password" v-model="password" placeholder="Password" />
      <button type="button" v-on:click="login()">Login</button>
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
</style>