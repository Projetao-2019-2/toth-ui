<template>
    <div class="ranking">
        <b-img center src="../../assets/medal.png" alt="Medal icon" class="imagem"></b-img>
        <h3>TOP AJUDANTES DO SEMESTRE</h3>
        <h5 id="rankingd">{{ curso }}</h5>
        <h6 id="rankingd">Sua pontuação: {{ ranking }}</h6>
    </div>
</template>

<script>

export default {
    name: 'RankingHead',
    data() {
        return {
            ranking: 0,
            curso: String
        }
    },
    methods: {
        async getRanking() {
            try{
                const response = await this.$axios.$get("ranking");
                this.ranking = response.my_points;
                this.curso = response.curso_ies;
                //console.log(this.curso);
            } catch (err) { 
                console.log(err);
            }
        }
    },
    mounted() {
        this.users = this.getRanking();   
    }
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