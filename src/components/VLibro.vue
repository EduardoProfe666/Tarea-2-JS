<template>
  <div class="libro">
    <div @click="emit_id(props.codigo)">
      <img class="caratula" :src="props.thumbnail" />
    </div>
    <img
      @click="emit_eliminar(props.codigo)"
      class="boton-borrar"
      src="@/assets/images/icons/delete_icon.png"
    />
  </div>
</template>

<script setup>
import { useEventEmitter } from '../code/useEventEmitter';


const props = defineProps({
  titulo: {
    type: String,
    default: 'Titulo'
  },
  thumbnail: {
    type: String,
    default: './src//assets/images/thumbnails/default_t.png',
    required: true
  },
  codigo: {
    default: '1'
  }
})

const emit = defineEmits(['enviar_id', 'eliminar_libro'])

const emit_id = (id) => emit('enviar_id', id)

const emit_eliminar = (id) =>{ 
  useEventEmitter().dispatchEvent('eliminar_libro', id);
}
</script>
<style scoped>
.libro {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 1s;
  animation-name: fade-in;
  width: 130px;
  height: 180px;
  margin-bottom: 30px;
  transition: all ease 250ms;
 
}
.libro:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.libro:active {
  transform: scale(1.2);
  opacity: 0.5;
}
.caratula {
  box-shadow: 0px 0px 8px white;
  height: 180px;
  width: 130px;
  border-radius: 10px;
  pointer-events: none;
  user-select: none;
  border-color: white;
  border-style: solid;
}
.boton-borrar {
  transition: all ease 250ms;
  position: absolute;
  margin-top: 130px;
  opacity: 0;
  width: 30px;
  height: 30px;
  padding: 3px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
  display: flex;
  justify-content: center;
}
.boton-borrar img{
  width:100%;
  height: 100%;
}

.libro:hover .boton-borrar {
  opacity: 1;
}
.boton-borrar:hover {
  scale: 1.2;
}
.boton-borrar:active {
  scale: 1.4;
}
@media only screen and (max-width: 700px) {
  .libro {
    margin-bottom: 20px;
    width: 80px;
    height: 110px;
  }
  .caratula {
    width: 80px;
    height: 110px;
  }
  .boton-borrar {
    margin-top: 80px;
    border-radius: 7px;
    width: 20px;
    height: 20px;
  }
}
</style>
