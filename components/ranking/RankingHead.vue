<template>
    <div class="ranking">
        <b-img center src="../../assets/medal.png" alt="Medal icon" class="imagem"></b-img>
        <h3>TOP AJUDANTES DO SEMESTRE</h3>
        <h5 id="rankingd">Engenharia da Computação - UFPE</h5>
        <h6 id="rankingd">Sua pontuação: total</h6>
    </div>
</template>

<script>

export default {
    name: 'RankingHead'
}
</script>

<style>
.ranking {
    width: 420px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-end;
    justify-content: center;
}

h3 {
    margin-right: 10px;
    margin-top: 10px;
}

h6 {
    font-size: 10px;
}

.imagem {
    width: 55px;
    height: 55px;
}

</style>