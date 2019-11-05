<template>
  <div class="settings-container">
    <div class="contents-wrapper">
      <SettingsList />
      <ProfileBox />
    </div>
  </div>
</template>

<script>
import SettingsList from "~/components/settings/SettingsList";
import ProfileBox from "~/components/settings/ProfileBox/main";

export default {
  name: "SettingsProfile",
  components: {
    SettingsList,
    ProfileBox
  }
};
</script>

<style>
.settings-container {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.contents-wrapper {
  display: flex;
}
</style>