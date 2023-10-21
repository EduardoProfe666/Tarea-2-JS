<template>
        <div class="bookshelf">
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
            <VisualBook></VisualBook>
        </div>
    
</template>

<script setup>
import VisualBook from './VisualBook.vue';

</script>

<style scoped>
    .bookshelf{
        background: rgba(255, 255, 255, 0.29);
        backdrop-filter: blur(12.1px);
        -webkit-backdrop-filter: blur(12.1px);
        padding: 20px;
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        border-color: white;
        border-radius: 15px;
        border-style:solid;
        margin-left:10px;
        margin-bottom: 10px;
        height: 80%;
        width: 20%;
        overflow: scroll;
        box-shadow: 0px 0px 15px  white;
    }
</style>