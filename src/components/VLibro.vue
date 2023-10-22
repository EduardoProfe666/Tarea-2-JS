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
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        width: 145px;
        background-color: white;
        transition: all ease 250ms;
        border-radius: 10px;
        text-align: center;
        height: 500px;
        box-shadow: 0px 0px 8px  black;
    }
    #libro:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    #libro:active{
        transform: scale(1.2);
        opacity: 0.5; 
    }
    #titulo{
        
        font-size: 18px;
        user-select: none;
        color: black;
        padding: 10px;
        word-wrap: break-word;
    }
    img{
        height: 150px;
        width: 100%;
        border-radius: 5px;
        pointer-events: none;
        user-select: none;
    }
    @media only screen and (max-width:700px){
        #titulo{
            font-size: 12px;
        }
        img{
            height: 90px;  
        }
        #libro{
            margin-bottom: 20px;
            width: 100px;
        }
    }



</style>