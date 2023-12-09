<template>
  <div class="modal">
    <form action="" class="componente-cristal modal-contenedor" @submit.prevent="aceptar()">
      <label class="modal-titulo">Crear cuenta</label>
      <span>Crea una cuenta ahora 😉</span>
      <div class="modal-inputs">
      <label for="usuario">
        <span>Usuario: </span>
        <input type="text" v-model="usuario"/>
      </label>
      <label for="contraseña">
        <span>Contraseña: </span>
        <input type="text" v-model="contraseña"/>
      </label>
    </div>
      <div class="modal-botones">
        <button type="submit" class="componente-cristal">
          Regístrate
        </button>
        <button class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
</script>


