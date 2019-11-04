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
      <b-form-input :placeholder="user.link_facebook" v-model="link_facebook"></b-form-input>
    </b-input-group>
    <b-input-group size="lg" prepend="Facebook" class="item-link-input">
      <b-form-input :placeholder="user.link_instagram" v-model="link_instagram"></b-form-input>
    </b-input-group>
    <b-input-group size="lg" prepend="Twitter" class="item-link-input">
      <b-form-input :placeholder="user.link_twitter" v-model="link_twitter"></b-form-input>
    </b-input-group>
    <b-button variant="success" class="item-link-input" @click="updateLinks">Atualizar</b-button>
  </div>
</template>

<script>
export default {
  name: "FormLinkSocialNetworks",
  props: ["user"],
  data() {
    return {
      link_facebook: "",
      link_instagram: "",
      link_twitter: ""
    };
  },
  methods: {
    updateLinks() {
      alert("Dados atualizados com sucesso!");
      this.$emit("CloseFormLinks");
    }
  }
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