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
          <b-button
            variant="primary"
            size="sm"
            class="btn-search"
            @click="doSearch(searchString)"
          >
            <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
          </b-button>
        </b-input-group-append>
      </b-input-group>

      <b-collapse is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!$auth.$state.loggedIn">
            <nuxt-link to="register">Cadastrar</nuxt-link>
          </b-nav-item>

          <b-nav-item v-if="!$auth.$state.loggedIn">
            <nuxt-link to="/login">Login</nuxt-link>
          </b-nav-item>

          <b-nav-item v-if="$auth.$state.loggedIn" href="#">
            <NavbarIcon
              link="/profile"
              :icon="['fas', 'user']"
              :text="$auth.$state.user.nome"
            />

            <NavbarIcon
              :onClick="showNotifications"
              :icon="['fas', 'bell']"
            />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <hr class="nav-separator" />
    <transition name="showNotifications">
      <div class="notifications-screen" v-if="notificationsActive">
        <Notifications />
      </div>
    </transition>
    <nuxt class="route-info" />
  </div>
</template>

<script>
import Notifications from "~/components/notifications/Container";
import NavbarIcon from "~/components/NavbarIcon";
import { mapState } from "vuex";

export default {
  middleware: "categories",
  components: {
    Notifications,
    NavbarIcon
  },
  data() {
    return {
      notificationsActive: false,
      searchString: ""
    };
  },
  methods: {
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
  background: #fff;
  height: max-content;
}

nav {
  background: #fff;
  padding: 0 1rem;
}

nav span {
  color: rgb(51, 51, 51);
  font-weight: bold;
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
  background: #fff;
  z-index: 5;
  overflow-y: auto;
}

.showNotifications-enter-active {
  animation: show-newpost 0.5s;
}

.showNotifications-leave-active {
  animation: show-newpost 0.5s reverse;
}

.notifications-button {
  background: #fff;
  border-radius: 999px;
  border: none;
  box-sizing: border-box;
  padding: 0.25em;

  display: inline-flex;
  align-items: center;
  margin: 0 0.5em;
}

.notifications-button svg {
  margin: 0 0.5em;
}

.notifications-button :hover {
  background: rgb(0, 0, 0, 0.06);
}

.nav-separator {
  border-top: 1px solid #efefef;
  margin: 0;
}

@keyframes show-newpost {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
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
