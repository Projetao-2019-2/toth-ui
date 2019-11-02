<template>
    <div class="dashboard">
        <b-card-group columns>
            <b-card img-src="https://placekitten.com/500/350" img-alt="Image" overlay v-for="n in 3" :key="n"></b-card>
            <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>
            <b-card img-src="https://placekitten.com/g/400/450" img-alt="Image" overlay v-for="y in 3" :key="y"></b-card>
        </b-card-group>
    </div>
</template>

<script>
import axios from "axios";
import PostBox from '../../components/posts/PostBox';

export default {
    name: 'Dashboard',
    components: {
        PostBox
    }
}
</script>

<style>
 .dashboard {
    display: flex;
    flex-direction: row;
    width: match-parent;
    height: match-parent;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
 }

 .card {
     border: 2px solid green;
     max-width: 375px;
 }
</style>