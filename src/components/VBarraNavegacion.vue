<template>
  <div class="barranavegacion">
    <button @click="action()" class="boton_aniadir componente-cristal">
      Añadir Libro<img src="@/assets/images/icons/add_icon.png" />
    </button>

    <form
      class="buscador"
      action=""
      @submit.prevent="() => useEventEmitter().dispatchEvent('actualizar', { titulo })"
    >
      <input placeholder="Buscar un libro..." class="barra-busqueda" v-model="titulo" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useEventEmitter } from '../code/useEventEmitter.js'

const emit = defineEmits(['aniadir_libro'])
const action = () => emit('aniadir_libro')
const titulo = ref('')
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
@media only screen and (max-width: 700px) {
  .boton_aniadir {
    min-width: 130px;
    width: 130px;
  }
}
</style>
