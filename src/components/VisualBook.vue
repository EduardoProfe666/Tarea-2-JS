<template>
    <div id="book">
        <img src ="@/assets/images/placeholder.png">
        <label id="bookname">{{ title }}</label>
    </div>
    
</template>

<script setup>
const props = defineProps({

    title:{
        type:String,
        default:'Title'
    },
    
})

    
</script>
<style scoped>
    #book{
        width: 80%;
        margin-bottom: 10%;
        background-color: white;
        transition: all ease 250ms;
        border-radius: 10px;
        text-align: center;
        padding: 5px;
    }
    #book:hover{
        transform: scale(1.2);
        margin-top: 15%;
        cursor: pointer;
        margin-bottom: 25%;
    }
    #bookname{
       
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