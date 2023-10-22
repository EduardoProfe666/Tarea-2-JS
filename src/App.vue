<script setup>
import { ref } from 'vue'
import VEstanteria from './components/VEstanteria.vue';
import VCarta from './components/VCarta.vue';
import { Libro } from './code/libro';
const libro = ref(new Libro('Titulo','Autor',2000,'Publicador','Sinopsis...','',''))


</script>

<template>
    <h1 id ="title">Selecciona un libro</h1>
    <div id="main">
            <VEstanteria v-on:enviar_libro="(value)=>libro = value"></VEstanteria>
            <VCarta :titulo="libro.getTitulo()" :autor="libro.getAutor()" :anno="libro.getAnnoPublicacion()" :publicador="libro.getPublicador()" :contenido="libro.getContenido()" :cover="libro.getCover()"></VCarta>
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
