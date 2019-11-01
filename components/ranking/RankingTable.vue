<template>
    <div class="board">
        <b-list-group >
            <b-list-group-item v-for="n in 4" :key="n" > {{ n }}
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
                //users = response.users;
                console.log(response.users);
            } catch (err) { 
                console.log(err);
            }
        }
    },
    mounted() {
        this.users = this.getUsers();
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