<template>
  <div class="modal no_modal">
    <form action="" class="componente-cristal modal-contenedor" @submit.prevent="aceptar()">
      <label class="modal-titulo">Inicia sesión</label>
      <span>Es bueno tenerte de vuelta</span>
      <div class="modal-inputs">
      <label for="usuario">
        <span>Nombre usuario: </span>
        <input type="text" v-model="usuario"/>
      </label>
      <label for="contraseña">
        <span>Contraseña: </span>
        <input type="text" v-model="contraseña"/>
      </label>
      <a href="" class="uao">¿Aún no te has registrado?</a>
    </div>
      <div class="modal-botones">
        <button type="submit" class="componente-cristal">
          Aceptar
        </button>
        <button class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
</script>

<style scoped>
.uao{
  color: whitesmoke;
}

.no_modal{
  background: none;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}
</style>
