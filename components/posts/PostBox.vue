<template>
    <div class="postbox">
            <div class="post">
                <img src="../../assets/2.jpg" alt="">
            </div>
    </div>
</template>

<script>
export default {
    name: 'PostBox',
}
</script>

<style>
    .postbox {
        width:25%;
        height: max-content;
        padding: 10px;
    }
    .post {
        border: 3px solid #ccc;
        border-radius: 3px;
        margin: 1rem 0;
        width: match-parent;
        height: match-parent;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>