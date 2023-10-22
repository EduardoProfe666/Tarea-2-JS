<template>
    <div id="barradenavegacion">
  
        <input placeholder="Buscar un libro..." id = "buscador">
        <button id="boton_aniadir" >Añadir Libro</button>
    </div>
</template>
<style scoped>

    #buscador{
        border-radius: 15px;
        position: absolute;
        margin-left: 35%;
        margin-right: 5%;
        width:45%;
        border:0px;
        height: 45px;
        font-size: 20px;
        outline: none;
    }
    #buscador::placeholder{
        color:gray;
    }
    #buscador:focus{
        box-shadow: 0px 0px 8px  white;
        border-color: white;
        border-style:solid;
    }
    #boton_aniadir{
        border-radius: 15px;
        position: absolute;
        margin-left: 2%;
        width: 25%;
        
        color: white;
        box-shadow: 0px 0px 8px  white;
        border-color: white;
        border-style:solid;
        cursor: pointer;
        transition: all ease 250ms;
        background: rgba(255, 255, 255, 0.29);
        backdrop-filter: blur(12.1px);
        -webkit-backdrop-filter: blur(12.1px);
        height: 45px;
        font-weight: bold;
        font-size: 17px;
        max-width:300px;
        padding-left: 20px;
        padding-right: 20px;
    }
    #boton_aniadir:hover{
        transform: scale(1.1);
    }
    #boton_aniadir:active{
        transform: scale(1.2);
        opacity: 0.5;
    }
</style>