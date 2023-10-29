import biblioteca from "./biblioteca";
import { Libro } from "./libro";
import { useEventEmitter } from "./useEventEmitter";

export const eliminarLibro = async (id)=>{
    biblioteca.eliminarLibro(id);
    useEventEmitter().dispatchEvent('actualizar');
}

export const nuevoLibro = async (titulo, autor, anio, publicador, contenido) => {
    const libro = new Libro(titulo, autor, anio, publicador, contenido, './src/assets/images/covers/default.png', './src/assets/images/thumbnails/default_t.png');
    biblioteca.agregarLibro(libro);
    useEventEmitter().dispatchEvent('actualizar');
}

export const editarLibro = async (id, titulo, autor, anio, publicador, contenido) => {
    biblioteca.editarLibro(id, titulo, autor, anio, publicador, contenido)
}

export const buscarLibroporID = async (id) =>{
    return biblioteca.buscarLibro(id);
}

export const buscarLibro = async ()=>{
    
}

export const solicitarLibros = async (titulo="", autor="", anno, publicador="") => {
    return biblioteca.buscarLibros(titulo, autor, anno, publicador);
}