<template>
  <div class="notification-box" @click="openPost()">
    <b-card
      class="btn-box-notification"
    >Tiagou comentou em seu post: "Teile zaga, zaga, zaga, teile, zaga, teile, zaga, teile"</b-card>
  </div>
</template>

<script>
export default {
  name: "NotificationBox",
  methods: {
    openPost() {
      console.log("oi");
    }
  }
};
</script>

<style>
.btn-box-notification {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  height: 50px;
}
</style>