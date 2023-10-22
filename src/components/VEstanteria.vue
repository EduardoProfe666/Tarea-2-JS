<template>
        <div id="estanteria">
            <VLibro v-for="libro in libros" :key="libro.getId()" :codigo="libro.getId()" :titulo="libro.getTitulo()" :autor="libro.getAutor()" v-on:enviar_id="(id)=>mostrar_en_carta(id)" />
        </div>
</template>

<script setup>
import { computed } from 'vue';
import { solicitarLibros, buscarLibroporID } from '../code/controller';
import VLibro from './VLibro.vue';

const data = solicitarLibros();


const emit = defineEmits(['enviar_libro'])

const libros = computed(()=>data.value);


const mostrar_en_carta = (id)=>{
    const libro = buscarLibroporID(id);
    emit('enviar_libro', libros.value[libro]);
}
</script>

<style scoped>
    #estanteria{
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
        margin-left:2%;
        margin-top: 60px;
        margin-bottom: 10%;
        height: 80%;
        width: 20%;
        overflow: auto;
        box-shadow: 0px 0px 8px  white;
    }
</style>