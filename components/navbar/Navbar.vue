<template>
  <div class="navb-container">
    <b-navbar type="dark">
      <b-navbar-brand>
        <img src="~/static/logo.svg" class="logo" @click="goToHome" />
      </b-navbar-brand>

      <NavbarInput class="input" />

      <b-collapse is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="not-logged-link" v-if="!$auth.$state.loggedIn">
            <nuxt-link to="register">Cadastrar</nuxt-link>
          </b-nav-item>

          <b-nav-item class="not-logged-link" v-if="!$auth.$state.loggedIn">
            <nuxt-link to="/login">Login</nuxt-link>
          </b-nav-item>

          <b-nav-item class="logged-links" v-if="$auth.$state.loggedIn" href="#">
            <NavbarIcon link="/profile/me" :icon="['fas', 'user']" :text="$auth.$state.user.nome" />
            <NavbarIcon :onClick="showNotifications" :icon="['fas', 'bell']" />
            <NavbarIcon link="/likedPosts" :icon="['fas', 'thumbs-up']" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <transition name="showNotifications">
      <div class="notifications-screen" v-if="notificationsActive">
        <Notifications />
      </div>
    </transition>
  </div>
</template>

<script>
import Notifications from "~/components/notifications/Container";
import NavbarIcon from "~/components/navbar/NavbarIcon";
import NavbarInput from "~/components/navbar/Input";
export default {
  name: "Navbar",
  components: {
    NavbarIcon,
    Notifications,
    NavbarInput
  },
  data() {
    return {
      notificationsActive: false
    };
  },
  methods: {
    showNotifications() {
      this.notificationsActive = !this.notificationsActive;
    },
    goToHome() {
      this.$root.$emit("cleanSearchInput");
      this.$router.push({ path: "/" });
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

<style>
.navb-container {
  position: fixed;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid #efefef;
}
nav {
  background: #fff;
  padding: 0 1rem;
}

.not-logged-link {
  padding: 0 8px;
}

.not-logged-link:hover {
  background: rgb(0, 0, 0, 0.06);
  border-radius: 999px;
}

nav span,
.not-logged-link a {
  color: rgb(51, 51, 51);
  font-weight: bold;
}

.not-logged-link a:hover {
  text-decoration: none;
  color: rgb(51, 51, 51);
}

.logged-links a {
  padding: 0;
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
  width: 600px;
}

.logo {
  width: 32px;
  height: 32px;
  margin-left: 16px;
}

.logo:hover {
  cursor: pointer;
}
</style>
