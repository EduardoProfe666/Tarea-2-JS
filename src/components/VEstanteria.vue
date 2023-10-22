<template>
        <div id="estanteria">
            <VLibro v-for="libro in libros" :key="libro.getId()" :codigo="libro.getId()" :titulo="libro.getTitulo()" :autor="libro.getAutor()" v-on:enviar_id="mostrar_en_carta" />
        </div>
</template>

<script setup>
import { computed } from 'vue';
import { solicitarLibros } from '../code/controller';
import VLibro from './VLibro.vue';

const data = solicitarLibros();


const emit = defineEmits(['enviar_libro'])

const libros = computed(()=>data.value);

const mostrar_en_carta = (id)=>{
    emit('enviar_libro', libros.value[0])
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
        margin-left:10px;
        margin-bottom: 10px;
        height: 75%;
        width: 20%;
        overflow: scroll;
        box-shadow: 0px 0px 8px  white;
    }
</style>