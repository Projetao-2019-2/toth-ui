<template>
  <span>
    <span v-if="onClick" @click="onClick" class="icon">
      <font-awesome-icon :icon="icon"></font-awesome-icon>
    </span>
    <nuxt-link v-else :to="link">
      <span class="icon">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
        <span class="icon-text" v-if="text"> {{ text }}</span>
      </span>
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: "NavbarIcon",
  props: ["link", "icon", "text", "onClick"]
};
</script>

<style>
.icon {
  display: inline-flex;
  align-items: center;
  margin: 0 0.5em;
  padding: 0.25em;
  border-radius: 999px;
  color: ;
}

.icon-text {
  margin-right: 0.5em;
}

.icon svg {
  margin: 0.5em;
}
.icon:hover {
  background: rgb(0, 0, 0, 0.06);
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}
</style>
