<template>
  <div class="total">
    <nuxt-link to="/profile">
      <b-img left src="../../assets/left-arrow.png" alt="Medal icon" class="arrow"></b-img>
    </nuxt-link>
    <div class="rankingPage">
      <RankingHead />
      <RankingBoard />
    </div>
  </div>
</template>

<script>
import RankingHead from "../../components/ranking/RankingHead";
import RankingBoard from "../../components/ranking/RankingBoard";

export default {
  components: {
    RankingHead,
    RankingBoard
  }
};
</script>

<style>
.rankingPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

.arrow {
  width: 35px;
  height: 35px;
  margin-top: 1.5rem;
}

.total {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
}
</style>
