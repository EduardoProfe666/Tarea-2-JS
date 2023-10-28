<template>
  <div class="componente-cristal carta">
    <img class="caratula" :src="props.cover" />
    <label class="titulo">{{ props.titulo }}</label>
    <label class="subtitulo">por {{ props.autor }}</label>
    <label class="subtitulo">publicado por {{ props.publicador }} en {{ props.anio }}</label>
    <p class="contenido">{{ props.contenido }}</p>
    <div class="boton-modificar" @click="modificar_libro(props.codigo)">
      <img src="./../assets/images/icons/edit_icon.png">
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
    default: './src/assets/images/covers/default.png',
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
  height: 600px;
  overflow: auto;
}
.carta:hover {
  scale: 1.05;
}
.caratula {
  border-color: white;
  border-radius: 15px;
  border-style: solid;
  width: 250px;
  pointer-events: none;
  user-select: none;
  box-shadow: 0px 0px 8px white;
}
.titulo {
  padding-top: 20px;
  font-size: 30px;
}
.subtitulo {
  font-size: 20px;
  padding: 3px;
}
.contenido {
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
@media only screen and (max-width: 700px) {
  .boton-modificar {
    border-radius: 7px;
    width: 20px;
    height: 20px;
  }
  .titulo {
    padding-top: 20px;
    font-size: 18px;
  }
  .caratula {
    width: 150px;
  }
  .subtitulo {
    font-size: 15px;
    padding: 3px;
  }
  .contenido {
    font-size: 14px;
  }

}
</style>
