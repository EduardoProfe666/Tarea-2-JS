<template>
  <div class="modal">
    <div class="componente-cristal contenedor">
      <label class="titulo">¿Está seguro de que desea eliminar el libro?</label>
      <div class="contenedor-botones">
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
<style scoped>

.contenedor {
  background: rgba(255, 200, 161, 0.29);
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.titulo {
  margin-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 25px;
}

.contenedor-botones {
  display: flex;
  justify-content: center;
  gap: 50%;
  padding: 10%;
}

button {
  font-size: 20px;
  
  border-radius: 10px;
  padding:10px
}
button:hover {
  scale: 1.1;
}
button:active {
  scale: 1.2;
  opacity: 0.5;
}
@media only screen and (max-width: 700px) {
  .contenedor {
    width: 300px;
  }
  .titulo {
    font-size: 18px;
  }
  button {
    font-size: 15px;
  }
}
</style>
