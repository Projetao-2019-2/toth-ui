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
            <b-button variant="primary" class="btn-newpost" @click="showNewPost()">
              <font-awesome-icon :icon="['fas', 'pencil-alt']"></font-awesome-icon>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="showNewPost">
      <div class="new-post-screen" v-if="newPostActive">
        <NewPostContainer @postDone="newPostActive = false" :categories="categories" />
      </div>
    </transition>
    <nuxt class="route-info" />
  </div>
</template>

<script>
import NewPostContainer from "../components/newPost/Container";

export default {
  middleware: "categories",
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
  },
  computed: {
    categories: function() {
      return this.$store.getters["categories/getAll"];
    }
  }
};
</script>

<style scoped>
.main {
  background-color: #eeeeee;
  height: 100%;
}

nav {
  background-color: #011932;
}
.route-info {
  min-height: calc(100vh - 70px);
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

.btn-newpost {
  width: 80px;
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
