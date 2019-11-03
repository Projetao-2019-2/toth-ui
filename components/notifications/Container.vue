<template>
  <div class="notifications-container">
    <p>Notificações</p>
    <NotificationBox
      v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]"
      :key="item"
    />
  </div>
</template>

<script>
import NotificationBox from "./NotificationBox";

export default {
  name: "Notications",
  components: {
    NotificationBox
  }
};
</script>

<style>
.notifications-container {
  width: 700px;
}
.notifications-container:hover {
  cursor: pointer;
}
.notifications-container p {
  color: white;
  font-size: 1.7em;
}
</style>