import biblioteca from "./biblioteca";
import { Libro } from "./libro";
import { useEventEmitter } from "./useEventEmitter";

export const eliminarLibro = async (id)=>{
    biblioteca.eliminarLibro(id);
    useEventEmitter().dispatchEvent('actualizar');
}

export const nuevoLibro = async () => {}

export const buscarLibroporID = async (id) =>{
    return biblioteca.buscarLibro(id);
}

export const buscarLibro = async ()=>{
    
}

export const solicitarLibros = async (titulo, autor, anno, publicador) => {
    return biblioteca.buscarLibros(titulo, autor, anno, publicador);
}