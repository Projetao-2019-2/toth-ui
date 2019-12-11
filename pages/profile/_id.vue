<template>
  <div class="profile-container">
    <div class="profile-information-container">
      <div class="photo-networks-wrapper">
        <UserPhoto :user="users" />
        <SocialNetworks :user="users" />
      </div>
      <div class="name-course-rank-wrapper">
        <UserData :user="users" :noUser="true" />
      </div>
    </div>
    <Results :posts="posts" />
  </div>
</template>

<script>
import UserPhoto from "~/components/profile/UserPhoto/main";
import SocialNetworks from "~/components/profile/SocialNetworks/main";
import UserData from "~/components/profile/UserData/main";
import Results from "~/components/posts/Results";

export default {
  name: "ProfileScreen",
  data() {
    return {
      users: []
    };
  },
  components: {
    UserPhoto,
    SocialNetworks,
    UserData,
    Results
  },
  methods: {
        async getUsers() {
          try {
            const response = await this.$axios.$get("users/"+this.userId);
            this.users = response.user;
            console.log(this.users);
            console.log(this.userId);
          } catch (err) {
            console.log(err);
          }
        }

  },
  mounted() {
    this.users = this.getUsers();
  },
  computed: {
    userId: function() {
      return this.$route.params.id;
    },
    posts: function() {
      return this.$store.getters["posts/getPostsByUserId"](
        this.userId
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("posts/getAll");
  }
};
</script>

<style>
.profile-container {
  min-height: 100vh;
  width: 100%;
  margin-top: 50px;
}
.profile-information-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}
.photo-networks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
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
