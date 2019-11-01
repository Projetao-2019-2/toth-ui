<template>
  <div class="main">
    <b-navbar type="dark">
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
            <nuxt-link to="/profile">
              <b-button variant="warning" class="btn-header-default">
                <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
              </b-button>
            </nuxt-link>
            <b-button variant="danger" class="btn-header-default" @click="showNotifications()">
              <font-awesome-icon :icon="['fa', 'bell']"></font-awesome-icon>
            </b-button>
            <b-button variant="primary" class="btn-header-default" @click="showNewPost()">
              <font-awesome-icon :icon="['fas', 'pencil-alt']"></font-awesome-icon>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="showNewPost">
      <div class="newpost-notifications-screen" v-if="newPostActive">
        <NewPost @postDone="newPostActive = false" :categories="categories" />
      </div>
      <div class="newpost-notifications-screen" v-if="notificationsActive">
        <Notifications />
      </div>
    </transition>
    <nuxt class="route-info" />
  </div>
</template>

<script>
import NewPost from "../components/newPost/Container";
import Notifications from "../components/notifications/Container";

export default {
  middleware: "categories",
  components: {
    NewPost,
    Notifications
  },
  data() {
    return {
      newPostActive: false,
      notificationsActive: false
    };
  },
  methods: {
    showNewPost() {
      this.newPostActive = !this.newPostActive;
      this.notificationsActive = false;
    },
    showNotifications() {
      this.notificationsActive = !this.notificationsActive;
      this.newPostActive = false;
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

.newpost-notifications-screen {
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0;
  height: calc(100vh - 70px);
  width: 900px;
  background: #011932;
  z-index: 5;
  overflow-y: auto;
}

.showNewPost-enter-active {
  animation: show-newpost 0.5s;
}

.showNewPost-leave-active {
  animation: show-newpost 0.5s reverse;
}

.btn-header-default {
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
