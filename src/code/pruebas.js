import { Libro } from './libro.js'
import biblioteca from './biblioteca.js'

// Permite probar por consola las funcionalidades de la lógica

//---------------- Declaración de variables -------------------//
//let biblioteca = new Biblioteca()
let l1 = new Libro('Lib 1', 'Juan', 2002, 'A', 'ABC', 'ruta A', 'ruta Q')
let l2 = new Libro('Lib 2', 'Juan', 2003, 'B', 'ABC', 'ruta B', 'ruta W')
let l3 = new Libro('Lib 3', 'Pedro', 2004, 'C', 'ABC', 'ruta C', 'ruta E')
let l4 = new Libro('Lib 4', 'Pepe', 1985, 'A', 'ABC', 'ruta D', 'ruta R')
let l5 = new Libro('Lib 5', 'Lilian', 2003, 'B', 'ABC', 'ruta E', 'ruta T')

//---------------- Pruebas -------------------//
console.log('\nPrueba de correcta agregación: ')
biblioteca.agregarLibro(l1)
biblioteca.agregarLibro(l2)
biblioteca.agregarLibro(l3)
biblioteca.agregarLibro(l4)
biblioteca.agregarLibro(l5)
biblioteca.imprimirListadoLibros()
/*
console.log('\nPrueba de correcta edición de título')
console.log('Antes:')
biblioteca.getListadoLibros()[3].imprimir()
console.log('Después:')
biblioteca.editarLibro(l4.getId(), 'Libro G')
biblioteca.getListadoLibros()[3].imprimir()

console.log('\nPrueba de correcta edición de autor')
console.log('Antes:')
biblioteca.getListadoLibros()[2].imprimir()
console.log('Después:')
biblioteca.editarLibro(l3.getId(), null, 'José')
biblioteca.getListadoLibros()[2].imprimir()

console.log('\nPrueba de correcta edición de año de publicación')
console.log('Antes:')
biblioteca.getListadoLibros()[4].imprimir()
console.log('Después:')
biblioteca.editarLibro(l5.getId(), null, null, 2010)
biblioteca.getListadoLibros()[4].imprimir()

console.log('\nPrueba de correcta edición de publicador')
console.log('Antes:')
biblioteca.getListadoLibros()[4].imprimir()
console.log('Después:')
biblioteca.editarLibro(l5.getId(), null, null, null, 'Z')
biblioteca.getListadoLibros()[4].imprimir()

console.log('\nPrueba de correcta edición de contenido')
console.log('Antes:')
biblioteca.getListadoLibros()[4].imprimir()
console.log('Después:')
biblioteca.editarLibro(l5.getId(), null, null, null, null, 'ZXC')
biblioteca.getListadoLibros()[4].imprimir()

console.log('\nPrueba de correcta edición de cover')
console.log('Antes:')
biblioteca.getListadoLibros()[4].imprimir()
console.log('Después:')
biblioteca.editarLibro(l5.getId(), null, null, null, null, null, 'ruta 123')
biblioteca.getListadoLibros()[4].imprimir()

console.log('\nPrueba de correcta edición de thumbnail')
console.log('Antes:')
biblioteca.getListadoLibros()[4].imprimir()
console.log('Después:')
biblioteca.editarLibro(l5.getId(), null, null, null, null, null, null, 'ruta 098')
biblioteca.getListadoLibros()[4].imprimir()

console.log('\nPrueba de correcta eliminación de libro')
console.log('Antes:')
biblioteca.imprimirListadoLibros()
console.log('Después de eliminar Libro con id->' + l4.getId() + ':')
biblioteca.eliminarLibro(l4.getId())
biblioteca.imprimirListadoLibros()

console.log('\nPrueba de correcta búsqueda de libros por autor')
console.log('Libros del autor Juan:')
biblioteca.imprimirListadoLibros(biblioteca.buscarLibrosAutor('Juan'))
console.log('Libros del autor Lilian:')
biblioteca.imprimirListadoLibros(biblioteca.buscarLibrosAutor('Lilian'))
*/
console.log('\n')
