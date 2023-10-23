<template>
    <div @click="emit_id(props.codigo)" id="libro">
        <img id="caratula" :src ="props.thumbnail">
        <label id="titulo">{{ props.titulo }}</label>
        <img @click="emit_eliminar(props.codigo)" id = "borrar" src="@/assets/images/icons/delete_icon.png">
    </div>
    
</template>

<script setup>
const props = defineProps({

    titulo:{
        type:String,
        default:'Titulo'
    },
    thumbnail:{
        type:String,
        default:'./src//assets/images/thumbnails/default_t.png',
        required:true
    },
    codigo:{
        default:'1'
    }
    
})
const emit = defineEmits(['enviar_id', 'eliminar_libro'])
const emit_id= (id)=>emit('enviar_id', id)
const emit_eliminar = (id) => emit('eliminar_libro', id)
    
</script>
<style scoped>
    #libro{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        width: 80%;
        max-width: 200px;
        background-color: white;
        transition: all ease 250ms;
        border-radius: 10px;
        text-align: center;
        height: 500px;
        box-shadow: 0px 0px 8px  black;
        align-items: center;
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
    #caratula{
        height: 150px;
        width: 100%;
        border-radius: 5px;
        pointer-events: none;
        user-select: none;
    }
    #borrar{
        transition: all ease 250ms;
        opacity: 0;
        width: 25px;
        padding-bottom: 5px;
        
    }
    #libro:hover #borrar{
        opacity: 0.5;
    }
    #borrar:hover{
        scale: 1.2;
    }
    #borrar:active{
        scale: 1.4;
    }
    @media only screen and (max-width:700px){
        #titulo{
            font-size: 12px;
        }
        #caratula{
            height: 90px;  
        }
        #libro{
            margin-bottom: 20px;
            width: 100px;
        }
    }



</style>