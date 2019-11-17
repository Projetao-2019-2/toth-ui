<template>
  <div class="main">
    <b-navbar type="dark">
      <nuxt-link to="/">
        <b-navbar-brand>
          <img class="logo" src="~/static/logo2.png" />
        </b-navbar-brand>
      </nuxt-link>

      <b-input-group v-if="!isIndexPageActive" class="input">
        <b-form-input
          size="sm"
          v-model="newSearchText"
          placeholder="Curso - Universidade"
          v-on:keyup.enter="doSearch(searchString)"
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" size="sm" class="btn-search" @click="doSearch(searchString)">
            <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
          </b-button>
        </b-input-group-append>
      </b-input-group>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!$auth.$state.loggedIn">
            <nuxt-link to="register" class="names-cadastrar-login">Cadastrar</nuxt-link>
          </b-nav-item>

          <b-nav-item v-if="!$auth.$state.loggedIn">
            <nuxt-link to="/login" class="names-cadastrar-login">Login</nuxt-link>
          </b-nav-item>

          <b-nav-item v-if="$auth.$state.loggedIn" href="#">
            <nuxt-link to="/profile">
              <b-button variant="warning" class="btn-header-default">
                <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
              </b-button>
            </nuxt-link>
            <b-button variant="danger" class="btn-header-default" @click="showNotifications()">
              <font-awesome-icon :icon="['fa', 'bell']"></font-awesome-icon>
            </b-button>
            <b-button variant="primary" class="btn-header-default" @click="goToNewPost()">
              <font-awesome-icon :icon="['fas', 'pencil-alt']"></font-awesome-icon>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="showNotifications">
      <div class="notifications-screen" v-if="notificationsActive">
        <Notifications />
      </div>
    </transition>
    <nuxt class="route-info" />
  </div>
</template>

<script>
import Notifications from "../components/notifications/Container";
import { mapState } from "vuex";

export default {
  middleware: "categories",
  components: {
    Notifications
  },
  data() {
    return {
      notificationsActive: false,
      searchString: ""
    };
  },
  methods: {
    goToNewPost() {
      this.$router.push("/newpost");
    },
    showNotifications() {
      this.notificationsActive = !this.notificationsActive;
    },
    doSearch(text) {
      this.$router.push({ path: "/posts", query: { search: text } });
    }
  },
  computed: {
    categories: function() {
      return this.$store.getters["categories/getAll"];
    },
    isIndexPageActive: function() {
      return this.$nuxt.$route.path === "/";
    },
    newSearchText: {
      get() {
        return this.$store.state.posts.lastSearchedTerm;
      },
      set(text) {
        this.searchString = text;
      }
    }
  }
};
</script>

<style scoped>
.main {
  background-color: #eeeeee;
  height: max-content;
}

nav {
  background-color: #011932;
}
.route-info {
  min-height: calc(100vh - 70px);
}

.notifications-screen {
  position: fixed;
  display: flex;
  justify-content: center;
  right: 0;
  height: calc(100vh - 70px);
  width: 900px;
  background: #011932;
  z-index: 5;
  overflow-y: auto;
}

.showNotifications-enter-active {
  animation: show-newpost 0.5s;
}

.showNotifications-leave-active {
  animation: show-newpost 0.5s reverse;
}

.btn-header-default {
  width: 80px;
}

.names-cadastrar-login {
  color: white;
  font-weight: bold;
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

.input {
  width: 20em;
}

.logo {
  width: 32px;
  height: 32px;
  margin-left: 16px;
}
</style>
