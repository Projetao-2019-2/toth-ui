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
import RankingHead from '../../components/ranking/RankingHead'
import RankingBoard from '../../components/ranking/RankingBoard'

export default {
    components: {
        RankingHead,
        RankingBoard
    }
}
</script>

<style>
.rankingPage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

.arrow {
    width: 25px;
    height: 25px;
    margin-left: 25px;
}

.total {
    width: 100%;
    display:flex;
    flex-direction: column;
}
</style>