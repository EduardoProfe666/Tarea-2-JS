<template>
  <div class="componente-cristal" id="carta">
    <img id="caratula" :src="props.cover" />
    <label id="titulo">{{ props.titulo }}</label>
    <label class="subtitulo">por {{ props.autor }}</label>
    <label class="subtitulo">publicado por {{ props.publicador }} en {{ props.anno }}</label>
    <p id="contenido">{{ props.contenido }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  titulo: {
    type: String,
    default: 'Titulo'
  },
  cover: {
    type: String,
    default: './src/assets/images/covers/default.png',
    required: true
  },
  autor: {
    type: String,
    default: 'Autor'
  },
  anno: {
    type: Number,
    default: 2000
  },
  publicador: {
    type: String,
    default: 'Publicador'
  },
  contenido: {
    type: String,
    default: 'Sinopsis...'
  }
})
</script>

<style scoped>
#carta {
  box-shadow: 0px 0px 8px white;
  padding: 20px;
  position: fixed;
  flex-direction: column;
  margin-left: 40%;
  margin-right: 10%;
  margin-top: 90px;
  height: 80%;
  overflow: auto;
  transition: all ease 250ms;
}
#carta:hover {
  scale: 1.05;
}
#caratula {
  border-color: white;
  border-radius: 15px;
  border-style: solid;
  width: 250px;
  pointer-events: none;
  user-select: none;
  box-shadow: 0px 0px 8px white;
}
#titulo {
  padding-top: 20px;
  font-size: 30px;
}
.subtitulo {
  font-size: 20px;
  padding: 3px;
}
#contenido {
  font-size: 20px;
  text-align: justify;
}
@media only screen and (max-width: 700px) {
  #titulo {
    padding-top: 20px;
    font-size: 18px;
  }
  #caratula {
    width: 150px;
  }
  .subtitulo {
    font-size: 15px;
    padding: 3px;
  }
  #contenido {
    font-size: 14px;
  }
}
</style>
