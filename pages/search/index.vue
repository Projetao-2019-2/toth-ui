<template>
  <div class="container">
    <div>
      <div class="display">
        <img id="logo" src="~/assets/compass1.png" alt="nortuni" />
      </div>
      <div class="display">
        <h1 id="brand">NORTUNI</h1>
      </div>
      <div id="search" class="input-group mb-3">
        <input id="input" class="form-control" type="text" placeholder="Curso - Universidade" />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            <div>
              <img id="icon" src="~/assets/search-icon.png" alt="search" />
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#icon {
  width: 19px;
  height: 19px;
}
#search {
  display: flex;
  flex-direction: row;
}
.display {
  display: flex;
  align-content: center;
  justify-content: center;
}
#brand {
  font-size: 100px;
}
#logo {
  position: relative;
  width: 35%;
  height: 35%;
}
</style>