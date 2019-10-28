<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark">
      <nuxt-link to="/">
        <b-navbar-brand>Nortuni</b-navbar-brand>
      </nuxt-link>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!$auth.$state.loggedIn">
            <nuxt-link to="register">Cadastrar</nuxt-link>
          </b-nav-item>

          <b-nav-item v-if="!$auth.$state.loggedIn">
            <nuxt-link to="/login">Login</nuxt-link>
          </b-nav-item>

          <b-nav-item v-if="$auth.$state.loggedIn" href="#">
            <font-awesome-icon :icon="['fas', 'pencil-alt']" @click="showNewPost()"></font-awesome-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="showNewPost">
      <div class="new-post-screen" v-if="newPostActive">
        <NewPostContainer />
      </div>
    </transition>
    <nuxt class="route-info" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NewPostContainer from "../components/newPost/Container";

export default {
  components: {
    NewPostContainer
  },
  data() {
    return {
      newPostActive: false
    };
  },
  methods: {
    showNewPost() {
      this.newPostActive = !this.newPostActive;
    }
  }
};
</script>

<style scoped>
.main {
  background-color: #eeeeee;
  height: 100vh;
}

nav {
  background-color: #011932;
}
.route-info {
  margin-top: 24px;
  min-height: calc(100vh - 24px);
}

.new-post-screen {
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0;
  height: 100vh;
  width: 900px;
  background: #011932;
  z-index: 5;
}

.showNewPost-enter-active {
  animation: show-newpost 0.5s;
}

.showNewPost-leave-active {
  animation: show-newpost 0.5s reverse;
}

@keyframes show-newpost {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
