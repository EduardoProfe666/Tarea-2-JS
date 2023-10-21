<template>
    <div id="bookcard">
        <img id="cover" :src ="props.image" >
        <label id="title" >{{ props.title }}</label>
        <label id="author">by {{ props.author }}</label>
        <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur delectus laboriosam nam, corrupti nisi similique beatae libero expedita, modi ut assumenda alias quae quis vel. Sit ut quis ullam.</p>
        <p style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur delectus laboriosam nam, corrupti nisi similique beatae libero expedita, modi ut assumenda alias quae quis vel. Sit ut quis ullam.</p>
    
    </div>
</template>
<script setup>
const props = defineProps({

    title:{
        type:String,
        default:'Title'
    },
    image:{
        type:String,
        default:'./src/assets/images/placeholder.png',
        required:true
    },
    author:{
        type:String,
        default:'Author'
    }
    
})

    
</script>


<style scoped>
    #bookcard{
        box-shadow: 0px 0px 15px  white;
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
        height: 80%;
        width: 50%;
        overflow: scroll;
        background: rgba(255, 255, 255, 0.29);
        backdrop-filter: blur(12.1px);
        -webkit-backdrop-filter: blur(12.1px);
    }
    #cover{
        border-color: white;
        border-radius: 15px;
        border-style:solid;
        width: 50%;
    }
    #title{
        padding: 20px;
        font-size: 30px;
    }
</style>