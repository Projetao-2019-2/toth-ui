<template>
  <div class="box-spinner">
    <p>{{message ? message : 'Carregando ....'}}</p>
    <b-spinner variant="success" style="width: 5rem; height: 5rem;" label="Large Spinner"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'LoadingIcon',
  props: ['message']
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
  color: whitesmoke;
  font-size: 2em;
}
</style>
