<template>
    <div class="filter-bar">
         <b-button-group size="lg" class="conj">
             <b-button v-for="item in categorias" :key="item.id" class="botao" :id="item.name">{{ item.name }} </b-button>
        </b-button-group>
    </div>
</template>

<script>
export default {
    name: "FilterBar",
    middleware: "categorias",
    computed:{
        categorias: function(){
            console.log(this.$store.getters['categories/getAll']);
            return this.$store.getters['categories/getAll'];
        }
    },
    // data(){
    //     hover: false
    // },
    async fetch({ store }){
        await store.dispatch("categories/getAll");
    },
    methods:{
        styleObject: function(id) {
            console.log(id);
            console.log(this.categorias);
            return{
                if(hover){
                    background: id;
                }
            }
        }
    }
};
</script>

<style>

.filter-bar {
    display: flex;
    flex-direction: row;
    width: match-parent;
    height: match-parent;
    justify-content: center;
    margin-top: 20px;
}

.botao {
    background-color: #eeeeee;
    color: black;
    border-style: none;
    size: 10px;
}

#geral {
    border-bottom: 6px solid gray;
}
#geral:hover {
    background-color: gray;
}

#Infraestrutura {
    border-bottom: 6px solid #1DBDFF;
}
#Infraestrutura:hover {
    background-color: #1DBDFF;
}
#Experiência\ em\ disciplinas {
    border-bottom: 6px solid #16D64C;
}
#Experiência\ em\ disciplinas:hover {
    background-color: #16D64C;
}
#Atividades\ extracurriculares {
    border-bottom: 6px solid #FF8E20;
}
#Atividades\ extracurriculares:hover {
    background-color:#FF8E20;
}
#Arredores {
    border-bottom: 6px solid #FF6DD5;
}
#Arredores:hover {
    background-color:#FF6DD5;
}


</style>
