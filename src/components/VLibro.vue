<template>
    <div @click="action(props.codigo)" id="libro">
        <img src ="@/assets/images/placeholder.png">
        <label id="titulo">{{ props.titulo }}</label>
    </div>
    
</template>

<script setup>
const props = defineProps({

    titulo:{
        type:String,
        default:'Titulo'
    },
    codigo:{
        default:'1'
    }
    
})
const emit = defineEmits(['enviar_id'])
const action= (id)=>emit('enviar_id', id)
    
</script>
<style scoped>
    #libro{
        width: 80%;
        margin-bottom: 10%;
        max-width: 150px;
        background-color: white;
        transition: all ease 250ms;
        border-radius: 10px;
        text-align: center;
        padding: 5px;
        box-shadow: 0px 0px 8px  black;
    }
    #libro:hover{
        transform: scale(1.2);
        margin-top: 15%;
        cursor: pointer;
        margin-bottom: 25%;
    }
    #libro:active{
        transform: scale(1.3);
        margin-top: 15%;
        opacity: 0.5;
        margin-bottom: 25%;
    }
    #titulo{
       
        font-size: 18px;
        user-select: none;
        color: black;
    }
    img{
        height: 75%;
        width: 100%;
        border-radius: 5px;
        pointer-events: none;
        user-select: none;
    }



</style>