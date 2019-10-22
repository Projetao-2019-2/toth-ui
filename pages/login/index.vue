<template>
  <div id="container">
    <div id="login">
      <h1>Login</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="button">Login</button>
    </div>
  </div>
</template>

<style>
#container{
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