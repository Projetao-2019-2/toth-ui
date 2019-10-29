<template>
    <div class="rankingb">
        <RankingTable />
    </div>
</template>

<script>
import RankingTable from '../../components/ranking/RankingTable'

export default {
    name: 'RankingBoard',
    components: {
        RankingTable
    }
}
</script>

<style>

.rankingb {
    width: 420px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.col { border: 1px solid transparent;}

</style>