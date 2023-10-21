import biblioteca from "./biblioteca";
import { Libro } from "./libro";

export const nuevoLibro = (titulo, autor, anno_publicacion)=>{
    try{
        const libro = new Libro(titulo, autor, anno_publicacion);
        biblioteca.agregarLibro(libro);
        biblioteca.imprimirListadoLibros();
    }catch(err){
        console.log(err);
    }
}

export const solicitarLibros = ()=>{
    let data = [];
    try{
        data = biblioteca.getListadoLibros();
        console.log(data);
    }catch(err){
        console.log(err);
    }

    return data;
}