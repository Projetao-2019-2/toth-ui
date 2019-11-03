<template>
    <div class="filter-bar">
         <b-button-group size="lg" class="conj">
            <b-button class="botao" id="geral">GERAL</b-button>
            <b-button class="botao" id="infra">INFRAESTRUTURA</b-button>
            <b-button class="botao" id="exp">EXPERIÊNCIA EM DISCIPLINAS</b-button>
            <b-button class="botao" id="ativext">ATIVIDADES EXTRACURRICULARES</b-button>
            <b-button class="botao" id="arredores">ARREDORES</b-button>
        </b-button-group>
    </div>
</template>

<script>
export default {
    name: "FilterBar"
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

#infra {
    border-bottom: 6px solid #1DBDFF;
}
#infra:hover {
    background-color: #1DBDFF;
}
#exp {
    border-bottom: 6px solid #16D64C;
}
#exp:hover {
    background-color: #16D64C;
}
#ativext {
    border-bottom: 6px solid #FF8E20;
}
#ativext:hover {
    background-color:#FF8E20;
}
#arredores {
    border-bottom: 6px solid #FF6DD5;
}
#arredores:hover {
    background-color:#FF6DD5;
}


</style>