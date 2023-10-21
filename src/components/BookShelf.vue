<template>
        <div class="bookshelf">
            <VisualBook v-for="libro in libros" :key="libro.getId()" :title="libro.getTitulo()" :author="libro.getAutor()"/>
        </div>
</template>

<script setup>
import { computed } from 'vue';
import { solicitarLibros } from '../code/controller';
import VisualBook from './VisualBook.vue';

const data = solicitarLibros();

const libros = computed(()=>data.value);
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