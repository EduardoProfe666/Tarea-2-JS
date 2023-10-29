<script setup>
import { ref } from 'vue'
import VEstanteria from './components/VEstanteria.vue'
import VCarta from './components/VCarta.vue'
import VBarraNavegacion from './components/VBarraNavegacion.vue'
import VAniadirLibro from './components/VAniadirLibro.vue'
import VEliminarLibro from './components/VEliminarLibro.vue'
import VModificarLibro from './components/VModificarLibro.vue'
import { useEventEmitter } from './code/useEventEmitter'

const libro = ref(null)
const mostrar_componente_aniadir = ref(false)
const mostrar_componente_modificar = ref({ show: false, id: '' })
const mostrar_componente_eliminar = ref({ show: false, id: '' })
const eliminar_carta = (id) => {
  mostrar_componente_eliminar.value.show = false
  if (id === libro.value.getId()) libro.value = null
}
const actualizar_carta = () => {
  mostrar_componente_modificar.value.show = false
  // ACTUALIZAR CARTA
}
useEventEmitter().listen('eliminar_libro', (event) => {
  mostrar_componente_eliminar.value.id = event.detail
  mostrar_componente_eliminar.value.show = true
})
</script>

<template>
  <VBarraNavegacion
    v-on:aniadir_libro="() => (mostrar_componente_aniadir = true)"
  ></VBarraNavegacion>
  <div class="main">
    <VEstanteria v-on:enviar_libro="(value) => (libro = value)"></VEstanteria>
    <VCarta
      v-on:modificar_libro="() => (mostrar_componente_modificar.show = true)"
      v-if="libro"
      :codigo="libro.getId()"
      :titulo="libro.getTitulo()"
      :autor="libro.getAutor()"
      :anio="libro.getAnnoPublicacion()"
      :publicador="libro.getPublicador()"
      :contenido="libro.getContenido()"
      :cover="libro.getCover()"
    ></VCarta>
    <div v-else class="selecciona-label">
      <label>Selecciona un libro</label>
    </div>
    <VAniadirLibro
      v-on:cerrar="() => (mostrar_componente_aniadir = false)"
      v-if="mostrar_componente_aniadir === true"
    ></VAniadirLibro>
    <VEliminarLibro
      v-on:cancelar="() => (mostrar_componente_eliminar.show = false)"
      v-on:aceptar="(id) => eliminar_carta(id)"
      v-if="mostrar_componente_eliminar.show === true"
      :codigo="mostrar_componente_eliminar.id"
    ></VEliminarLibro>
    <VModificarLibro
      v-on:cancelar="() => (mostrar_componente_modificar.show = false)"
      v-on:aceptar="() => actualizar_carta()"
      v-if="mostrar_componente_modificar.show === true"
      :codigo="libro.getId()"
      :titulo="libro.getTitulo()"
      :autor="libro.getAutor()"
      :anio="libro.getAnnoPublicacion()"
      :publicador="libro.getPublicador()"
      :contenido="libro.getContenido()"
    ></VModificarLibro>
  </div>
</template>

<style scoped>
.selecciona-label {
  width: 60%;
  user-select: none;
  font-size: 40px;
  margin-top: 250px;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.main {
  height: 80vh;
  display: flex;
  margin-top: 45px;
}
</style>
