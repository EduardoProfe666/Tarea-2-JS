import { ref, watchEffect } from "vue";
import biblioteca from "./biblioteca";
import { Libro } from "./libro";

const flag = ref(true);
const titulo = ref('');

export const nuevoLibro = async (titulo, autor, anno_publicacion, publicador = "publicador",
    contenido = "contenido", cover = "cover", thumbnail = "thumbnail") => {
    try {
        const libro = new Libro(titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail);
        biblioteca.agregarLibro(libro);
        flag.value=!flag.value;
    } catch (err) {
        console.log(err);
    }
}

export const buscarLibro = (param_titulo) => {
    titulo.value = param_titulo;
};

export const solicitarLibros = () => {
    const data = ref(null);

    watchEffect(async ()=>{
        try {
            flag.value;
            data.value=null;
            
            data.value = biblioteca.buscarLibros(titulo.value);
        } catch (err) {
            console.log(err);
        }
    });

    return data;
}

export const buscarLibroporID = (id)=>biblioteca.buscarLibro(id);