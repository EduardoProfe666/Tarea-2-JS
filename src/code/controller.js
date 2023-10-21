import { ref } from "vue";
import biblioteca from "./biblioteca";
import { Libro } from "./libro";

export const nuevoLibro = (titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail) => {
    try {
        const libro = new Libro(titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail);
        biblioteca.agregarLibro(libro);
        biblioteca.imprimirListadoLibros();
    } catch (err) {
        console.log(err);
    }
}

export const solicitarLibros = () => {
    const data = ref(null);

    try {
        data.value = biblioteca.getListadoLibros();
    } catch (err) {
        console.log(err);
    }

    return data;
}