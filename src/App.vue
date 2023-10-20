<script setup>
import BookShelf from './components/BookShelf.vue';
import Bookcard from './components/BookCard.vue';
</script>

<template>
    <h1 id ="title">Select a book </h1>
    <div id="main">
            <BookShelf></BookShelf>
            <Bookcard></Bookcard>
    </div>
    
</template>

<style scoped>
    #main{
        display: flex;
    }
    #title{
        padding-left: 2%;
        user-select: none;
    }

</style>
