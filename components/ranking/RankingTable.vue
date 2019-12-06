<template>
    <div class="board">
        <b-list-group v-if="ranking && ranking.length > 0">
                <b-list-group-item v-for="user in ranking" :key="user.user.id" >
                    <div class="index" id="first">
                    </div>
                    <div class="name"><p>{{ user.user.nome }}</p></div>
                </b-list-group-item>
        </b-list-group>
        <div v-else class="empty-result">
            <p>Não encontrei nada.</p>
        </div>
        <div class="space"></div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'RankingTable',
    data() {
        return {
            ranking: [],
            users: [],
            isRankingEmpty: true
        }
    },
    methods: {
        async getRanking() {
            try{
                const response = await this.$axios.$get("ranking");
                this.ranking = response.rankings;
                console.log(this.ranking);
            } catch (err) { 
                console.log(err);
            }
        }
    },
    mounted() {
        this.users = this.getRanking();   
    }
}
//cores p o ranking:
// #9B9B9B - 2o lugar
// #72654A - 3o lugar
// #001935 - 4o lugar
</script>

<style>
body {
    counter-reset: mycounter;
}

.index::before {
    counter-increment: mycounter;
    content: counter(mycounter);
    font-weight: bold;
}

.board {
    margin-top: 10px;
    width: 400px;
}

.list-group-item {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    height: 50px;
    padding: 0;
    background-color:#F4F4F4;
    border-style: none;
    font-weight: bold;
}

.index {
    width: 30px;
    height:match-parent;
    padding: 10px;
}

#first {
    background-color:#D0AA23;
}

#second {
    background-color:#9B9B9B;
}

#third {
    background-color: #72654A;
}

#default {
    background-color: #001935;
}

.name {
    width: 370px;
    height:match-parent;
    padding: 10px;
    margin-left: 10px;
    align-items: center;
}

p {
    text-align: center;
}

.space {
    width: 100%;
    height: 50px;
}

.empty-result {
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
}
</style>