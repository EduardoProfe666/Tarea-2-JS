<script setup>
import { ref } from 'vue'
import VEstanteria from './components/VEstanteria.vue'
import VCarta from './components/VCarta.vue'
import VBarraNavegacion from './components/VBarraNavegacion.vue'
import VAniadirLibro from './components/VAniadirLibro.vue'
import VEliminarLibro from './components/VEliminarLibro.vue'
import VModificarLibro from './components/VModificarLibro.vue'
import VCrearUsuario from './components/VCrearUsuario.vue'
import { useEventEmitter } from './code/useEventEmitter'

const libro = ref(null)
const mostrar_componente_aniadir = ref(false)
const mostrar_componente_crear_usu = ref(false)
const mostrar_componente_modificar = ref(false)
const mostrar_componente_eliminar = ref({ show: false, id: '' })
const eliminar_carta = (id) => {
  mostrar_componente_eliminar.value.show = false
  if (id === libro.value.getId()) libro.value = null
}

useEventEmitter().listen('eliminar_libro', (event) => {
  mostrar_componente_eliminar.value.id = event.detail
  mostrar_componente_eliminar.value.show = true
})
</script>

<template>
  <VBarraNavegacion
    v-on:aniadir_libro="() => (mostrar_componente_aniadir = true)"
    v-on:crear_usuario="() => (mostrar_componente_crear_usu = true)"
  ></VBarraNavegacion>
  <div class="main">
    <VEstanteria v-on:enviar_libro="(value) => (libro = value)"></VEstanteria>
    <VCarta
      v-on:modificar_libro="() => (mostrar_componente_modificar = true)"
      v-if="libro"
      :codigo="libro.getId()"
      :titulo="libro.getTitulo()"
      :autor="libro.getAutor()"
      :anio="libro.getAnnoPublicacion()"
      :publicador="libro.getPublicador()"
      :contenido="libro.getContenido()"
      :cover="libro.getCover()"
    ></VCarta>
    <div v-else class="label-selecciona-un-libro">
      <label>Selecciona un libro</label>
    </div>
    <VAniadirLibro
      v-on:cerrar="() => (mostrar_componente_aniadir = false)"
      v-if="mostrar_componente_aniadir === true"
    ></VAniadirLibro>
    <v-crear-usuario 
      v-on:cerrar="() => (mostrar_componente_crear_usu = false)"
      v-if="mostrar_componente_crear_usu === true">
    </v-crear-usuario>
    <VEliminarLibro
      v-on:cancelar="() => (mostrar_componente_eliminar.show = false)"
      v-on:aceptar="(id) => eliminar_carta(id)"
      v-if="mostrar_componente_eliminar.show === true"
      :codigo="mostrar_componente_eliminar.id"
    ></VEliminarLibro>
    <VModificarLibro
      v-on:cerrar="() => (mostrar_componente_modificar = false)"
      v-if="mostrar_componente_modificar === true"
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
.label-selecciona-un-libro {
  width: 60%;
  font-size: 40px;
  display: flex;
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
