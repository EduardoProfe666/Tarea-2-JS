<template>
  <div class="barranavegacion">
    <button @click="action()" class="boton_aniadir componente-cristal">
      Añadir Libro<img src="@/assets/images/icons/add_icon.png" />
    </button>

    <form
      class="buscador"
      action=""
      @submit.prevent="enviarEvento"
    >
      <input placeholder="titulo" class="barra-busqueda" v-model="titulo" />
      <input type="text" placeholder="autor" class="barra-busqueda" v-model="autor" />
      <input type="number" placeholder="año de publicacion" min="0" class="barra-busqueda" v-model="anno" />
      <input type="text" placeholder="publicador" class="barra-busqueda" v-model="publicador" />
      <button class="componente-cristal">Search</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEventEmitter } from '../code/useEventEmitter.js';

const emit = defineEmits(['aniadir_libro']);
const action = () => emit('aniadir_libro');
const titulo = ref('');
const autor = ref('');
const anno = ref('');
const publicador = ref('');

const enviarEvento = () =>{
  useEventEmitter().dispatchEvent('actualizar', { 
    titulo: titulo.value,
    autor: autor.value,
    anno: anno.value,
    publicador: publicador.value
   })
}
</script>

<style scoped>
.barranavegacion {
  display: flex;
  margin-top: 15px;
}
.buscador {
  margin-right: 10%;
  width: 100%;
}
.barra-busqueda {
  border-radius: 15px;
  height: 45px;
  width: 100%;
}
.barra-busqueda::placeholder {
  color: gray;
}
.boton_aniadir {
  margin-left: 10%;
  gap: 10px;
  box-shadow: 0px 0px 8px white;
  height: 45px;
  font-weight: bold;
  font-size: 17px;
  padding-left: 20px;
  padding-right: 20px;
  width: 200px;
  min-width: 200px;
  margin-right: 5%; 
}
.boton_aniadir:hover {
  transform: scale(1.1);
}
.boton_aniadir:active {
  transform: scale(1.2);
  opacity: 0.5;
}

form{
  display: flex;
}
form input{
  margin-right: 10px;
}
@media only screen and (max-width: 700px) {
  .boton_aniadir {
    min-width: 130px;
    width: 130px;
  }
}
</style>
