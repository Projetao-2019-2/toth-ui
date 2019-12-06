<template>
  <div class="social-networks-container">
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
</template>

<script>
export default {
  name: "SocialNetworks",
  props: ["user"]
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
</style>