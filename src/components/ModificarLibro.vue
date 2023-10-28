<template>
    <div class="mother_container">
        <form action="" class="container">
            <h1> Por favor, provéenos los nuevos datos:</h1>
            <label for="Title" class="labl1 labl">
                <span>Título: </span>
                <input type="text" id="Title">
            </label>
            <label for="Author" class="labl2 labl">
                <span>Autor: </span>
                <input type="text" id="Title">
            </label>
            <label for="Release year" class="labl3 labl">
                <span>Año Publicación: </span>
                <input type="text" id="Release year">
            </label>
            <label for="Publisher" class="labl4 labl">
                <span>Publicador: </span>
                <input type="text" id="Publisher">
            </label>
            <button type="submit">Enter</button>
            <label for="Content" class="labl5 labl">
                <span>Contenido: </span>
                <textarea name="t_area" id="area_t" cols="30" rows="10"></textarea>
            </label>
           
        </form>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div {
    font-size: 62.5%;
}

.mother_container {
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    position: relative;
    top: 3rem;
    left: 10rem;
}

.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 37rem;
    width: 75rem;
    border-radius: 2rem;
    position: relative;
    box-shadow: 0 0 10px #fff;
    animation: glow-effect 1.5s ease-in-out infinite alternate;
}

h1 {
    font-size: 3.5rem;
    position: relative;
    left: 5rem;
}

/*@keyframes glow-effect {
    0% {
        box-shadow: 0 0 10px #fff;
    }
    100% {
        box-shadow: 0 0 50px #fff;
    }
}*/

.labl {
    font-size: 2.8rem;
    margin-top: 3rem;
    margin-left: 2rem;
}

.labl5 {
    position: relative;
    margin-top: 7rem;
    right: 18rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.labl5 span{
    position: relative;
    left: 5rem;
}
.labl5 textarea{
    height: 2.5rem;
    font-size: 2rem;
    box-shadow: 0 0 10px #fff;
    resize: none;
    position: fixed;
}



input {
    height: 2.5rem;
    border-radius: 0.2rem;
    font-size: 1.5rem;
    bottom: 0.5rem;
    position: relative;
    box-shadow: 0 0 10px #fff;
    animation: glow-effect 1.5s ease-in-out infinite alternate;
}

.labl5 textarea:focus {
   height: 60%;
}

button {
    width: 10rem;
    height: 5rem;
    font-size: 2.4rem;
    background-color: transparent;
    border-radius: 0.5rem;
    color: #fff;
    box-shadow: 0 0 10px #fff;
    position: relative;
    top: 4.5rem;
    right: 2rem;
    animation: glow-effect 1.5s ease-in-out infinite alternate;
}
</style>

