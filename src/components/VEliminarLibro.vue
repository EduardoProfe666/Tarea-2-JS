<template>
  <div class="contenedor-principal">
    <div class="eliminar-contenedor">
      <h2 class="eliminar-titulo">¿Está seguro que desea eliminar el libro?</h2>
      <div class="eliminar-botones">
        <button class="eliminar-button-aceptar">Aceptar</button>
        <button class="eliminar-button-cancelar">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<style>
.contenedor-principal {
  /* background-color: blue; */
  display: flex;
  align-items: center;
  flex-direction: column;
}

.eliminar-contenedor {
  background-color: burlywood;
  width: 500px;
  border-radius: 10%;
  border: 0.2em solid white;
}


.eliminar-titulo {
  padding-top: 1%;
  padding-left: 20%;
  padding-right: 20%;
  font-size: 1.5em;
}

.eliminar-botones {
  padding-left: 20%;
  padding-bottom: 1em;

}

.eliminar-button-aceptar {

  font-size: 1.5em;
  border-radius: 45%;
  background-color: white;
  margin-left: 1em;
  margin-right: 1em;
  border: none;
  padding: 1% 3% 1% 3%;
  cursor: pointer;
  color: dimgray;
}

.eliminar-button-cancelar {
  font-size: 1.5em;
  border-radius: 45%;
  background-color: white;
  border: none;
  padding: 1% 3% 1% 3%;
  cursor: pointer;
  color: dimgray;
}
</style>
