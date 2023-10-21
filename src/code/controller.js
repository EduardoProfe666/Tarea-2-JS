import { ref } from "vue";
import biblioteca from "./biblioteca";
import { Libro } from "./libro";

export const nuevoLibro = (titulo, autor, anno_publicacion) => {
    try {
        const libro = new Libro(titulo, autor, anno_publicacion, 'publicador77', 'contenido', 'no', 'no');
        biblioteca.agregarLibro(libro);
        biblioteca.imprimirListadoLibros();
    } catch (err) {
        console.log(err);
    }
}

export const solicitarLibros = () => {
    const data = ref(null);

    try {
        data.value = null;
        data.value = biblioteca.getListadoLibros();
        console.log(data.value);
    } catch (err) {
        console.log(err);
    }

    return data;
}