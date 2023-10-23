<template>
        <div id="estanteria">
            <VLibro v-for="libro in libros" :key="libro.getId()" :codigo="libro.getId()" :titulo="libro.getTitulo()" :autor="libro.getAutor()" :thumbnail="libro.getThumbnail()" v-on:eliminar_libro="(id)=>enviar_libro_para_eliminar(id)" v-on:enviar_id="(id)=>enviar_libro_para_carta(id)" />
        </div>
</template>

<script setup>
import { computed } from 'vue';
import { solicitarLibros, buscarLibroporID } from '../code/controller';
import VLibro from './VLibro.vue';

const data = solicitarLibros();


const emit = defineEmits(['enviar_libro','eliminar_libro'])

const libros = computed(()=>data.value);

const enviar_libro_para_carta = (id)=>{
    const libro = buscarLibroporID(id);
    emit('enviar_libro', libros.value[libro]);
}

const enviar_libro_para_eliminar = (id)=>{
    const libro = buscarLibroporID(id);
    emit('eliminar_libro', libros.value[libro]);
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
        margin-left:3%;
        margin-top: 90px;
        margin-bottom: 10%;
        height: 80%;
        width: 30%;
        overflow: auto;
        box-shadow: 0px 0px 8px  white;
    }
</style>