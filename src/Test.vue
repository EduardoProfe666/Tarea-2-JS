<script setup>
import { ref, onMounted, computed } from 'vue';
import { nuevoLibro, solicitarLibros } from './code/controller.js';
import './code/pruebas.js';

const titulo = ref('');
const autor = ref('');
const anno = ref(1900);

let data = ref([]);

onMounted(()=>{
    data.value = solicitarLibros();
})

const libros = computed(()=>data.value);
</script>

<template>
    <form action="" @submit.prevent="()=>nuevoLibro(titulo, autor, anno)">
        <input type="text" placeholder="titulo" v-model="titulo">
        <input type="text" placeholder="autor" v-model="autor">
        <input type="number" min="1900" v-model="anno">
        <button>nuevo libro</button>
    </form>
    <div>
        <p v-for="libro in libros" :key="libro.id">
            {{ libro }}
        </p>
    </div>
</template>