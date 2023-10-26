<script setup>
import { ref } from 'vue'
import VEstanteria from './components/VEstanteria.vue'
import VCarta from './components/VCarta.vue'
import VBarraNavegacion from './components/VBarraNavegacion.vue'
import VAniadirLibro from './components/VAniadirLibro.vue'
import VEliminarLibro from './components/VEliminarLibro.vue'
import { useEventEmitter } from './code/useEventEmitter'

const libro = ref(null)

let mostrar_componente_aniadir = ref(false)
let mostrar_componente_eliminar = ref({ show: false, id: ''})


useEventEmitter().listen('eliminar_libro', (event) => {
  mostrar_componente_eliminar.value.id = event.detail;
  mostrar_componente_eliminar.value.show=true;
  console.log(mostrar_componente_eliminar.value);
})

</script>

<template>
  <VBarraNavegacion v-on:aniadir_libro="() => (mostrar_componente_aniadir = true)"></VBarraNavegacion>
  <div id="main">
    <VEstanteria v-on:enviar_libro="(value) => (libro = value)"></VEstanteria>
    <VCarta v-if="libro" :titulo="libro.getTitulo()" :autor="libro.getAutor()" :anno="libro.getAnnoPublicacion()"
      :publicador="libro.getPublicador()" :contenido="libro.getContenido()" :cover="libro.getCover()"></VCarta>
    <h2 v-else id="titulo">Selecciona un libro</h2>
  </div>
  <VAniadirLibro v-if="mostrar_componente_aniadir === true"></VAniadirLibro>
  <VEliminarLibro v-on:cerrar="() => mostrar_componente_eliminar.show = false" v-on:cerrar_refrescar="(id) => {mostrar_componente_eliminar.show = false; if(id === libro.getId()) libro = null}" v-if="mostrar_componente_eliminar.show === true"
    :codigo="mostrar_componente_eliminar.id"></VEliminarLibro>
</template>

<style scoped>
#titulo {
  user-select: none;
  font-size: 40px;
  position: absolute;
  margin-left: 50%;
  margin-right: 10%;
  margin-top: 300px;
  text-align: center;
}
</style>
