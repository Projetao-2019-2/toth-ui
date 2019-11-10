<template>
  <div class="user-datas-container">
    <div>
      <span class="name-user">{{user.nome}}</span>
    </div>
    <div v-if="user.type !== 'highschool'">
      <div class="university-user">
        <font-awesome-icon :icon="['fas', 'graduation-cap']" size="2x" class="icon-uni"></font-awesome-icon>
        <p>{{user.curso}} - {{user.ies}}</p>
      </div>
      <div class="ranking-user">
        <font-awesome-icon :icon="['fas', 'medal']" size="2x" class="icon-uni"></font-awesome-icon>
        <p>Veterano Engajador</p>
        <nuxt-link to="/ranking">
          <b-button variant="success">Ranking</b-button>
        </nuxt-link>
      </div>
    </div>
    <nuxt-link to="/settings/profile">
      <b-button variant="secondary" class="btn-edit-profile">Editar Perfil</b-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "UserInformation",
  props: ["user"]
};
</script>

<style>
.user-datas-container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
}
.university-user,
.ranking-user {
  display: flex;
}
.ranking-user {
  align-items: center;
}
.name-user {
  font-size: 2.5em;
  font-weight: bold;
}
.university-user p,
.ranking-user p {
  font-size: 1.5em;
}
.university-user p {
  margin: 0 0 0 20px;
}
.ranking-user p {
  margin: 0 28px;
}
.btn-edit-profile {
  margin-top: 5px;
}
</style>