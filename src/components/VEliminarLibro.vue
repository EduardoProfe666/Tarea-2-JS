<template>

  <div class="modal">
    <div class="componente-cristal modal-contenedor">
      <label class="modal-titulo">¿Está seguro de que desea eliminar el libro?</label>
      <div class="modal-botones">
        <button class="componente-cristal" @click="aceptar(props.codigo)">Aceptar</button>
        <button class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { eliminarLibro } from '../code/controller';

const props = defineProps({
  codigo: String
})
const emit = defineEmits(['aceptar','cancelar'])
const cancelar = () => emit('cancelar')
const aceptar = (id) => {eliminarLibro(props.codigo);emit('aceptar',id)}
</script>
