<template>
  <div class="formlinks-container">
    <div class="form-link-header">
      <h2>Redes Sociais</h2>
      <font-awesome-icon
        :icon="['fas', 'angle-double-left']"
        size="2x"
        class="icon-social-network"
        @click="$emit('CloseFormLinks')"
      ></font-awesome-icon>
    </div>
    <b-input-group size="lg" prepend="Instagram" class="item-link-input">
      <b-form-input></b-form-input>
    </b-input-group>
    <b-input-group size="lg" prepend="Facebook" class="item-link-input">
      <b-form-input></b-form-input>
    </b-input-group>
    <b-input-group size="lg" prepend="Twitter" class="item-link-input">
      <b-form-input></b-form-input>
    </b-input-group>
    <b-input-group size="lg" prepend="Email" class="item-link-input">
      <b-form-input></b-form-input>
    </b-input-group>
    <b-button variant="success" class="item-link-input">Atualizar</b-button>
  </div>
</template>

<script>
export default {
  name: "FormLinkSocialNetworks"
};
</script>

<style>
.formlinks-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0%;
  top: 70px;
  padding: 10px;
  background: #011932;
  color: white;
}
.item-link-input {
  margin-top: 10px;
}
.form-link-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>