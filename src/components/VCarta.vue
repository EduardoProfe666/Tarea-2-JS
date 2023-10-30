<template>
  <div class="componente-cristal carta">
    <img class="carta-cover" :src="props.cover" />
    <label class="carta-titulo">{{ props.titulo }}</label>
    <label class="carta-subtitulo">por {{ props.autor }}</label>
    <label class="carta-subtitulo">publicado por {{ props.publicador }} en {{ props.anio }}</label>
    <p class="carta-contenido">{{ props.contenido }}</p>
    <div class="boton-modificar" @click="modificar_libro(props.codigo)">
      <img src="/icons/edit_icon.png">
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  codigo:String,
  titulo: String,
  autor: String,
  anio: Number,
  publicador:String,
  contenido:String,
  cover: {
    type: String,
    default: '/covers/default.png',
    required: true
  },
})
const emit = defineEmits(['modificar_libro'])

const modificar_libro = (id) => emit('modificar_libro', id)
</script>

<style scoped>
.carta {
  box-shadow: 0px 0px 8px white;
  padding: 20px;
  flex-direction: column;
  margin-right: 10%;
  width: 60%;
  overflow: auto;
}
.carta:hover {
  scale: 1.05;
}
.carta-cover {
  border-color: white;
  border-radius: 15px;
  border-style: solid;
  width: 250px;
  pointer-events: none;
  user-select: none;
  box-shadow: 0px 0px 8px white;
}
.carta-titulo {
  font-weight: bold;
  padding-top: 20px;
  font-size: 30px;
}
.carta-subtitulo {
  font-size: 20px;
  padding: 3px;
}
.carta-contenido {
  font-size: 20px;
  text-align: justify;
}
.boton-modificar{
  transition: all ease 250ms;
  background-color: white;
  position:fixed;
  left: 5px;
  padding: 3px;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  box-shadow: 0px 0px 10px black;
  display: flex;
  justify-content: center;
  opacity:0;
}
.boton-modificar img{
  width:100%;
  height: 100%;
}
.boton-modificar:hover {
  scale: 1.2;
}
.boton-modificar:active {
  scale: 1.4;
}
.carta:hover .boton-modificar {
  opacity: 1;
}
@media only screen and (max-width: 700px) {
  .boton-modificar {
    border-radius: 7px;
    width: 20px;
    height: 20px;
  }
  .carta-titulo {
    padding-top: 20px;
    font-size: 18px;
  }
  .carta-cover {
    width: 150px;
  }
  .carta-subtitulo {
    font-size: 15px;
    padding: 3px;
  }
  .carta-contenido {
    font-size: 14px;
  }

}
</style>
