<template>
    <div class="board">
        <b-list-group v-for="n in 4" :key="n">
            <b-list-group-item> {{ n }}
            </b-list-group-item>
        </b-list-group>
        <div class="space"></div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'RankingTable',
    data() {
        return {
            users: []
        }
    },
    methods: {
        async getUsers() {
            try{
                const response = await this.$axios.$get("users");
                //this.users = response;
                console.log(response);
            } catch (err) { 
                console.log(err);
            }
        }
    },
    mounted() {
        this.getUsers();
    }
}
</script>

<style>
.board {
    margin-top: 10px;
    width: 420px;
}

.list-group-item {
    margin-top: 2px;
}

.space {
    width: 100%;
    height: 50px;
}
</style>