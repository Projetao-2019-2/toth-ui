<template>
  <div class="box-spinner">
    <p>{{message ? message : 'Carregando ....'}}</p>
    <b-spinner variant="primary" style="width: 4rem; height: 4rem;" label="Large Spinner"></b-spinner>
  </div>
</template>

<script>
export default {
  name: "LoadingIcon",
  props: ["message"]
};
</script>

<style>
.box-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
}
.box-spinner p {
  color: rgb(201, 200, 200);
  font-size: 2em;
}
</style>
