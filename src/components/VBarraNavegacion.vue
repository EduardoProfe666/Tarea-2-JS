<template>
  <div class="barranavegacion">
    <button @click="action()" class="boton-aniadir componente-cristal">
      Añadir Libro<img src="/icons/add_icon.png" />
    </button>
    <div class="contenedor-buscador">
      <form class="buscador" action="" @submit.prevent="enviarEvento">
        <input placeholder="Título" class="barra-busqueda" v-model="titulo" />
        <input type="text" placeholder="Autor" class="barra-busqueda" v-model="autor" />
        <input
          type="number"
          placeholder="Año de publicación"
          min="0"
          class="barra-busqueda"
          v-model="anno"
        />
        <input type="text" placeholder="Publicador" class="barra-busqueda" v-model="publicador" />
        <button class="componente-cristal boton-buscar">
          <img src="/icons/search_icon.png" />
        </button>
      </form>
      <button class="componente-cristal boton-refrescar" @click="refrescarBuscadores()">
        <img src="/icons/refresh_icon.png" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useEventEmitter } from '../code/useEventEmitter.js'

const emit = defineEmits(['aniadir_libro'])
const action = () => emit('aniadir_libro')
const titulo = ref('')
const autor = ref('')
const anno = ref('')
const publicador = ref('')

const enviarEvento = () => {
  useEventEmitter().dispatchEvent('actualizar', {
    titulo: titulo.value,
    autor: autor.value,
    anno: anno.value,
    publicador: publicador.value
  })
}
const refrescarBuscadores = () => {
  titulo.value = ''
  autor.value = ''
  anno.value = ''
  publicador.value = ''
  enviarEvento()
}
</script>

<style scoped>
.barranavegacion {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.contenedor-buscador {
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-right: 10%;
}
.buscador {
  width: 100%;
}
.barra-busqueda {
  border-radius: 15px;
  height: 45px;
  width: 10%;
  padding-left: 1px;
}
.barra-busqueda:focus {
  width: 100%;
}
.boton-buscar,
.boton-refrescar {
  margin-right: 2px;
}
.boton-buscar:active img {
  animation-duration: 250ms;
  animation-name: pop;
}
.boton-refrescar:active img {
  animation-duration: 250ms;
  animation-name: rotate;
}
.boton-aniadir:active img {
  animation-duration: 250ms;
  animation-name: rotate;
}

.barra-busqueda::placeholder {
  color: gray;
}
.boton-aniadir {
  margin-left: 10%;
  gap: 5px;
  height: 45px;
  justify-content: center;
  font-size: 17px;
  width: 200px;
  min-width: 200px;
  margin-right: 5%;
}
form {
  display: flex;
}
form input {
  margin-right: 10px;
}
@media only screen and (max-width: 700px) {
  .boton-aniadir {
    min-width: 130px;
    width: 130px;
  }
}
</style>
