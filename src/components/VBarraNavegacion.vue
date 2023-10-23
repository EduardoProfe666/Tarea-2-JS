<template>
    <input placeholder="Buscar un libro..." id = "buscador">
    <button @click="action()" id="boton_aniadir" >Añadir Libro<img src = "@/assets/images/add_icon.png"></button>
</template>

<script setup>
const emit = defineEmits(['aniadir_libro'])
const action= ()=>emit('aniadir_libro')
</script>

<style scoped>
    #buscador{
        margin-top: 15px;
        border-radius: 15px;
        position: absolute;
        margin-left: 45%;
        margin-right: 5%;
        width:45%;
        border:0px;
        height: 45px;
        font-size: 20px;
        outline: none;
        padding-left: 20px;
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
        margin-top: 15px;
        margin-left: 3%;
        width: 150px;
        display: flex;
        align-items: center;
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
    @media only screen and (max-width:700px){
        #boton_aniadir{
            width: 110px;
        }
    }
</style>