<template>
  <div id="contenedor-principal">
    <div class="componente-cristal" id="eliminar-contenedor">
      <h2 id="eliminar-titulo">¿Está seguro de que desea eliminar el libro?</h2>
      <div id="eliminar-botones">
        <button class="componente-cristal" @click="cerrar_refrescar(props.codigo)">Aceptar</button>
        <button class="componente-cristal" @click="cerrar()">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { eliminarLibro } from '../code/controller';

const props = defineProps({
  codigo: String
})
const emit = defineEmits(['cerrar','cerrar_refrescar'])
const cerrar = () => emit('cerrar')
const cerrar_refrescar = (id) => {eliminarLibro(props.codigo);emit('cerrar_refrescar',id)}
</script>
<style scoped>
#contenedor-principal {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(12.1px);
  -webkit-backdrop-filter: blur(12.1px);
  height: 100%;
  position: absolute;
  font-size: 50px;
  margin-top: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}
#eliminar-contenedor {
  background: rgba(255, 200, 161, 0.29);
  margin-top: 20%;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#eliminar-titulo {
  margin-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 25px;
}

#eliminar-botones {
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 30px;
}

button {
  font-size: 20px;
  cursor: pointer;
  color: white;
  transition: all ease 250ms;
}
button:hover {
  scale: 1.1;
}
button:active {
  scale: 1.2;
  opacity: 0.5;
}
@media only screen and (max-width: 700px) {
  #eliminar-contenedor {
    width: 300px;
  }
  #eliminar-titulo {
    font-size: 18px;
  }
  button {
    font-size: 15px;
  }
}
</style>
