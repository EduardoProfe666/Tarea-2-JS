<template>
  <div class="modal">

    <form action="" class="componente-cristal contenedor" @submit.prevent="aceptar()">
      <label class="titulo-componente">Por favor, provéenos los datos del libro a añadir:</label>
      <div class="contenedor-inputs">
      <label for="titulo">
        <span>Título: </span>
        <input type="text" v-model="titulo"/>
      </label>
      <label for="autor">
        <span>Autor: </span>
        <input type="text" id="autor" v-model="autor"/>
      </label>
      <label for="anio-publicacion">
        <span>Año Publicación: </span>
        <input type="number" id="anio-publicacion" v-model="anio"/>
      </label>
      <label for="publicador">
        <span>Publicador: </span>
        <input type="text" id="publicador" v-model="publicador"/>
      </label>
      <label for="contenido">
        <span>Contenido: </span>
        <textarea name="t_area" id="area_t" cols="30" rows="10" v-model="contenido"></textarea>
      </label>
    </div>
      <div class="contenedor-botones">
        <button type="submit" class="componente-cristal">
          Aceptar
        </button>
        <button class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { nuevoLibro } from '../code/controller.js';

const titulo = ref('')
const autor = ref('')
const anio = ref(0)
const publicador = ref('')
const contenido = ref('')

const emit = defineEmits(['cerrar'])
const cancelar = () => emit('cerrar')
const aceptar = async () => {
  try{
    await nuevoLibro(titulo.value, autor.value, anio.value, publicador.value, contenido.value);
    emit('cerrar')
  }catch(e){
    alert(e.message)
  }

}
</script>

<style scoped>
.contenedor {
  background: rgba(255, 200, 161, 0.29);
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90%;

}

.titulo-componente {
  margin-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 25px;
  width: 80%;
}
.contenedor-inputs {
  height: 80%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contenedor-botones {
  display: flex;
  justify-content: center;
  gap: 50%;
  padding: 5%;
}

button {
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
}

button:hover {
  scale: 1.1;
}

button:active {
  scale: 1.2;
  opacity: 0.5;
}

label {
  font-size: 20px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  width: 60%;
}

input,
textarea {
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 5px;
  margin-top: 5px;
}

textarea:focus {
  height: 100px;
}

@media only screen and (max-width: 700px) {
  .contenedor {
    width: 300px;
  }

  .titulo-componente {
    font-size: 18px;
  }

  label {
    font-size: 14px;
  }

  textarea {
    font-size: 12px;
    height: 20px;
  }

  button {
    font-size: 15px;
  }
}
</style>

