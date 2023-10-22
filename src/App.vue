<script setup>
import { ref } from 'vue'
import VEstanteria from './components/VEstanteria.vue';
import VCarta from './components/VCarta.vue';
import { Libro } from './code/libro';
import VBarraNavegacion from './components/VBarraNavegacion.vue'
const libro = ref(new Libro('','Autor',2000,'Publicador','Sinopsis...','',''))

</script>

<template>
    <VBarraNavegacion></VBarraNavegacion>
    
    <div id="main">
            <VEstanteria v-on:enviar_libro="(value)=>libro = value"></VEstanteria>
            <VCarta v-if="libro.getThumbnail()!==''" :titulo="libro.getTitulo()" :autor="libro.getAutor()" :anno="libro.getAnnoPublicacion()" :publicador="libro.getPublicador()" :contenido="libro.getContenido()" :cover="libro.getCover()"></VCarta>
            <h2 v-else id ="titulo">Selecciona un libro</h2>
        </div>
    
</template>

<style scoped>
    
    #titulo{
        user-select: none;
        font-size: 40px;
        position: absolute;
        margin-left: 40%;
        margin-right: 10%;
        margin-top: 300px;
        text-align: center;
    }
   
</style>
