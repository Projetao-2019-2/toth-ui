<template>
    <div class="board">
        <b-list-group >
            <b-list-group-item v-for="user in users" :key="user.id" >
                <div class="index" id="first">
                </div>
                <div class="name">{{ user.nome }}</div>
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
                this.users = response.users;
                //console.log(response.users);
            } catch (err) { 
                console.log(err);
            }
        }
    },
    mounted() {
        this.users = this.getUsers();   
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
    height:match-parent;
    padding: 10px;
    margin-left: 10px;
    text-align: center;
}
.space {
    width: 100%;
    height: 50px;
}
</style>