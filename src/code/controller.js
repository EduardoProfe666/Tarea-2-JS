import { ref, watchEffect } from "vue";
import biblioteca from "./biblioteca";
import { Libro } from "./libro";

const libro = ref(null);

export const nuevoLibro = (titulo, autor, anno_publicacion, publicador = "publicador",
    contenido = "contenido", cover = "cover", thumbnail = "thumbnail") => {
    try {
        libro.value = new Libro(titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail);
        biblioteca.agregarLibro(libro.value);
        biblioteca.imprimirListadoLibros();
    } catch (err) {
        console.log(err);
    }
}

export const solicitarLibros = () => {
    const data = ref(null);

    watchEffect(()=>{
        try {
            libro.value;
            data.value=null;    
            data.value = biblioteca.getListadoLibros();
        } catch (err) {
            console.log(err);
        }
    })

    return data;
}