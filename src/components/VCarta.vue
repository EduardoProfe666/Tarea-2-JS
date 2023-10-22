<template>
    <div id="carta">
        <img id="caratula" :src ="props.imagen" >
        <label id="titulo" >{{ props.titulo }}</label>
        <label class="subtitulo">por {{ props.autor }}</label>
        <label class="subtitulo">publicado por {{props.publicador}} en {{ props.anno }}</label>
        <p id="contenido">{{ props.contenido }}</p>
    </div>
</template>
<script setup>
const props = defineProps({

    titulo:{
        type:String,
        default:'Titulo'
    },
    imagen:{
        type:String,
        default:'./src/assets/images/placeholder.png',
        required:true
    },
    autor:{
        type:String,
        default:'Autor'
    },
    anno:{
        type:String,
        default:'2000'
    },
    publicador:{
        type:String,
        default:'Publicador'
    },
    contenido:{
        type:String,
        default:'Sinopsis...'
    },
    
    
})

    
</script>


<style scoped>
    #carta{
        box-shadow: 0px 0px 8px  white;
        padding: 20px;
        display: flex;
        position:absolute;
        align-items: center;
        flex-direction: column;
        border-color: white;
        border-radius: 15px;
        border-style:solid;
        margin-left: 35%;
        margin-right: 5%;
        margin-bottom: 10%;
        height: 75%;
        width: 50%;
        overflow: scroll;
        background: rgba(255, 255, 255, 0.29);
        backdrop-filter: blur(12.1px);
        -webkit-backdrop-filter: blur(12.1px);
    }
    #caratula{
        border-color: white;
        border-radius: 15px;
        border-style:solid;
        width: 50%;
    }
    #titulo{
        padding-top: 20px;
        font-size: 30px;
    }
    .subtitulo{
        font-size: 20px;
        padding: 3px;
    }
    #contenido{
        font-size: 20px;
    }
</style>