<template>
  <div class="profile-container">
    <div class="profile-information-container">
      <div class="photo-networks-wrapper">
        <div class="photo-wrapper"></div>
        <div class="networks-wrapper">
          <a href="https://www.facebook.com" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              size="2x"
              class="icon-social-network"
            ></font-awesome-icon>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="icon-social-network"></font-awesome-icon>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'twitter-square']"
              size="2x"
              class="icon-social-network"
            ></font-awesome-icon>
          </a>
          <a href="mailto:#" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="icon-social-network"></font-awesome-icon>
          </a>
        </div>
      </div>
      <div class="name-course-rank-wrapper">
        <div>
          <span class="name-user">Rosinaldo Guedes</span>
        </div>
        <div class="university-user">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" size="2x" class="icon-uni"></font-awesome-icon>
          <p>Engenharia da Computação - UFPE</p>
        </div>
        <div class="ranking-user">
          <font-awesome-icon :icon="['fas', 'medal']" size="2x" class="icon-uni"></font-awesome-icon>
          <p>Veterano Engajador</p>
          <nuxt-link to="/ranking">
            <b-button variant="success">Ranking</b-button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Results :posts="posts" />
  </div>
</template>

<script>
import Results from "~/components/posts/Results";

export default {
  name: "ProfileScreen",
  middleware: "auth",
  components: {
    Results
  },
  computed: {
    posts: function() {
      return this.$store.getters["posts/getAllPosts"];
    }
  },
  async fetch({ store }) {
    await store.dispatch("posts/getAll");
  },
};
</script>

<style>
.profile-container {
  min-height: 100vh;
  width: 100%;
}
.profile-loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
.profile-information-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}
.photo-networks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.photo-wrapper {
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
}
.networks-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.icon-social-network:hover {
  cursor: pointer;
}
.input-link-social-network {
  margin-top: 10px;
}
.name-course-rank-wrapper {
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

@media (max-width: 655px) {
  .profile-information-container {
    flex-direction: column;
    align-items: center;
  }
  .name-course-rank-wrapper {
    align-items: center;
  }
  .university-user,
  .ranking-user {
    margin: 10px 0;
  }
}
@media (max-width: 500px) {
  .profile-information-container {
    flex-direction: column;
    align-items: center;
  }
  .name-course-rank-wrapper {
    align-items: center;
  }
  .university-user,
  .ranking-user {
    margin: 10px 0;
  }
  .name-user {
    font-size: 2em;
  }
  .university-user p,
  .ranking-user p {
    font-size: 1.2em;
  }
}
@media (max-width: 326px) {
  .name-user {
    font-size: 1.5em;
  }
}
</style>
