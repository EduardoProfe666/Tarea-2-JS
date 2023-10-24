<script setup>
import { ref } from 'vue'
import VEstanteria from './components/VEstanteria.vue';
import VCarta from './components/VCarta.vue';
import { Libro } from './code/libro';
import VBarraNavegacion from './components/VBarraNavegacion.vue'
import VAniadirLibro from './components/VAniadirLibro.vue'
import VEliminarLibro from './components/VEliminarLibro.vue'

const libro = ref(new Libro('','Autor',2000,'Publicador','Sinopsis...','',''))

let mostrar_componente_aniadir=ref(false)

let mostrar_componente_eliminar=ref(false)

</script>

<template>
    <VBarraNavegacion v-on:aniadir_libro="()=>mostrar_componente_aniadir = true"></VBarraNavegacion>
    <div id="main">
        <VEstanteria v-on:enviar_libro="(value)=>libro = value" v-on:eliminar_libro="()=>mostrar_componente_eliminar = true"></VEstanteria>
        <VCarta v-if="libro.getThumbnail()!==''" :titulo="libro.getTitulo()" :autor="libro.getAutor()" :anno="libro.getAnnoPublicacion()" :publicador="libro.getPublicador()" :contenido="libro.getContenido()" :cover="libro.getCover()"></VCarta>
        <h2 v-else id ="titulo">Selecciona un libro</h2>
    </div>
    <VAniadirLibro v-if="mostrar_componente_aniadir===true"></VAniadirLibro>
    <VEliminarLibro v-if="mostrar_componente_eliminar===true" :codigo="libro.getId()"></VEliminarLibro>
</template>

<style scoped>
    #main{
        display: inline-block;
       align-items: center;
    }
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
