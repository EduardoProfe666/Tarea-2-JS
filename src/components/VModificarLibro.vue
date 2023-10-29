<template>
  <div class="modal">
    <form
      action=""
      class="componente-cristal modal-contenedor"
      @submit.prevent="aceptar(props.codigo)"
    >
      <label class="modal-titulo">Por favor, provéenos los datos del libro a modificar:</label>
      <div class="modal-inputs">
        <label for="titulo">
          <span>Título: </span>
          <input type="text" v-model="titulo" />
        </label>
        <label for="autor">
          <span>Autor: </span>
          <input type="text" id="autor" v-model="autor" />
        </label>
        <label for="anio-publicacion">
          <span>Año Publicación: </span>
          <input type="number" id="anio-publicacion" v-model="anio" />
        </label>
        <label for="publicador">
          <span>Publicador: </span>
          <input type="text" id="publicador" v-model="publicador" />
        </label>
        <label for="contenido">
          <span>Contenido: </span>
          <textarea name="t_area" id="area_t" cols="30" rows="10" v-model="contenido"></textarea>
        </label>
      </div>
      <div class="modal-botones">
        <button type="submit" class="componente-cristal">Aceptar</button>
        <button class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { editarLibro } from '../code/controller'
const props = defineProps({
  codigo: String,
  titulo: String,
  autor: String,
  anio: Number,
  publicador: String,
  contenido: String
})

const titulo = ref(props.titulo)
const autor = ref(props.autor)
const anio = ref(props.anio)
const publicador = ref(props.publicador)
const contenido = ref(props.contenido)

const emit = defineEmits(['cerrar'])
const cancelar = () => emit('cerrar')
const aceptar = async (id) => {
  try {
    await editarLibro(id, titulo.value, autor.value, anio.value, publicador.value, contenido.value)
    emit('cerrar', id)
  } catch (e) {
    alert(e.message)
  }
}
</script>
