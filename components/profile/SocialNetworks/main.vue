<template>
  <div class="social-networks-container">
    <div v-if="ownerProfile">
      <a @click="showFormEditLinks = !showFormEditLinks">
        <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <a @click="showFormEditLinks = !showFormEditLinks">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <a @click="showFormEditLinks = !showFormEditLinks">
        <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <a @click="showFormEditLinks = !showFormEditLinks">
        <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <transition name="showNewPost">
        <FormLinkSocialNetworks
          v-if="showFormEditLinks"
          :user="user"
          @CloseFormLinks="showFormEditLinks = false"
        />
      </transition>
    </div>
    <div v-else>
      <a :href="user.facebook_link" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <a :href="user.instagram_link" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <a :href="user.twitter_link" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
      <a :href="'mailto:'+user.email" target="_blank">
        <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="icon-social-network"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script>
import FormLinkSocialNetworks from "./FormLinks";

export default {
  name: "SocialNetworks",
  props: ["user"],
  components: {
    FormLinkSocialNetworks
  },
  data() {
    return {
      showFormEditLinks: false,
      ownerProfile: true
    };
  }
};
</script>
<style>
.social-networks-container {
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
.showNewPost-enter-active {
  animation: show-edit-links 0.5s;
}

.showNewPost-leave-active {
  animation: show-edit-links 0.5s reverse;
}

.btn-header-default {
  width: 80px;
}

@keyframes show-edit-links {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>