<template>
    <div @click="action(props.titulo)" id="libro">
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
        background-color: white;
        transition: all ease 250ms;
        border-radius: 10px;
        text-align: center;
        padding: 5px;
    }
    #libro:hover{
        transform: scale(1.2);
        margin-top: 15%;
        cursor: pointer;
        margin-bottom: 25%;
    }
    #titulo{
       
        font-size: 20px;
        user-select: none;
        color: black;
    }
    img{
        height: 80%;
        width: 100%;
        border-radius: 5px;
    }



</style>