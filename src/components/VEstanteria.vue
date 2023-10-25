<template>
    <div id="estanteria">
        <VLibro v-for="libro in libros" :key="libro.getId()" :codigo="libro.getId()" :titulo="libro.getTitulo()" :autor="libro.getAutor()" :thumbnail="libro.getThumbnail()" v-on:eliminar_libro="(id)=>enviar_libro_para_eliminar(id)" v-on:enviar_id="(id)=>enviar_libro_para_carta(id)" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { solicitarLibros, buscarLibroporID } from '../code/controller';
import { useEventEmitter } from '../code/useEventEmitter';
import VLibro from './VLibro.vue';

const data = ref([]);

const libros = computed(()=>data.value);

const emit = defineEmits(['enviar_libro','eliminar_libro'])

const enviar_libro_para_carta = (id)=>{
    const libro = buscarLibroporID(id);
    emit('enviar_libro', libro);
}

const enviar_libro_para_eliminar = (id)=>{
    const libro = buscarLibroporID(id);
    emit('eliminar_libro', libros.value[libro]);
}

onMounted(async ()=>{
    data.value = await solicitarLibros()
    useEventEmitter().listen('actualizar', async (event)=>{    
        let { titulo , autor, anno, publicacion } = event.detail || [null, null, null, null];
        data.value = await solicitarLibros(titulo, autor, anno, publicacion);
    })
})

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
        margin-left:15%;
        margin-top: 90px;
        margin-bottom: 10%;
        height: 80%;
        overflow: auto;
        box-shadow: 0px 0px 8px  white;
    }
</style>