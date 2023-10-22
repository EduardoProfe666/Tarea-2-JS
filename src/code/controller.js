import { ref, watchEffect } from "vue";
import biblioteca from "./biblioteca";
import { Libro } from "./libro";

const flag = ref(true);

export async function nuevoLibro (titulo, autor, anno_publicacion, publicador = "publicador",
    contenido = "contenido", cover = "cover", thumbnail = "thumbnail") {
    try {
        const libro = new Libro(titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail);
        biblioteca.agregarLibro(libro);
        flag.value=!flag.value;
    } catch (err) {
        console.log(err);
    }
}

export const solicitarLibros = () => {
    const data = ref(null);

    watchEffect(async ()=>{
        try {
            flag.value;
            data.value=null;    
            data.value = biblioteca.getListadoLibros();
        } catch (err) {
            console.log(err);
        }
    })

    return data;
}