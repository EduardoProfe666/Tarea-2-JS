import { ref, watch } from "vue";
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
    flag.value=!flag.value;
};

export const solicitarLibros = () => {
    const data = ref(null);

    watch(flag, async ()=>{
        try {
            data.value=null;    
            data.value = biblioteca.buscarLibros(titulo.value);
        } catch (err) {
            console.log(err);
        }
    }, {immediate:true});

    return data;
}

export const buscarLibroporID = (id)=>biblioteca.buscarLibro(id);