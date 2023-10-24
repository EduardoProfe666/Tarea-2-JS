<template>
  <div @click="emit_id(props.codigo)" id="libro">
    <img id="caratula" :src="props.thumbnail" />
    <img
      @click="emit_eliminar(props.codigo)"
      id="borrar"
      src="@/assets/images/icons/delete_icon.png"
    />
  </div>
</template>

<script setup>
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

const emit_eliminar = (id) => emit('eliminar_libro', id)
</script>
<style scoped>
#libro {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 130px;
  height: 150px;
  background-color: white;
  transition: all ease 250ms;
  border-radius: 15px;
  box-shadow: 0px 0px 8px black;
  align-items: center;
}
#libro:hover {
  transform: scale(1.1);
  cursor: pointer;
}
#libro:active {
  transform: scale(1.2);
  opacity: 0.5;
}
#caratula {
  height: 150px;
  width: 100%;
  border-radius: 15px;
  pointer-events: none;
  user-select: none;
}
#borrar {
  transition: all ease 250ms;
  opacity: 0;
  width: 30px;
  padding: 3px;
  margin-top: 80%;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px black;
}
#libro:hover #borrar {
  opacity: 1;
}
#borrar:hover {
  scale: 1.2;
}
#borrar:active {
  scale: 1.4;
}
@media only screen and (max-width: 700px) {
  #caratula {
    height: 90px;
  }
  #libro {
    margin-bottom: 20px;
    width: 80px;
  }
  #borrar {
    width: 20px;
  }
}
</style>
