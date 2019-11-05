<template>
  <div class="settingslist-container">
    <div class="settinglist-header text-settinglist">Configurações</div>
    <div class="settingslist-item">
      <div class="selection-bar"></div>
      <span class="text-settinglist">Perfil</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsList"
};
</script>

<style>
.settingslist-container {
  width: 400px;
  height: 600px;
  background: #fff;
}
.settinglist-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  font-weight: bold;
  font-size: 1.5em;
  background: rgba(0, 0, 0, 0.03);
}
.settingslist-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 1.1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.settingslist-item:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.125);
}
.selection-bar {
  width: 3px;
  height: 100%;
  background: black;
}
.text-settinglist {
  padding-left: 30px;
}
</style>