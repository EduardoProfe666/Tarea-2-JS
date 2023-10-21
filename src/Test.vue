<script setup>
import { ref, computed } from 'vue';
import { nuevoLibro, solicitarLibros } from './code/controller.js';

const titulo = ref('');
const autor = ref('');
const anno = ref(1900);

const data = solicitarLibros();

const libros = computed(()=>data.value);
</script>

<template>
    <form action="" @submit.prevent="()=>nuevoLibro(titulo, autor, anno)">
        <input type="text" placeholder="titulo" v-model="titulo">
        <input type="text" placeholder="autor" v-model="autor">
        <input type="number" v-model="anno">
        <button>nuevo libro</button>
    </form>
    <div>
        <p v-for="libro in libros" :key="libro.id">
            {{ libro.getTitulo() }}
        </p>
    </div>
</template>