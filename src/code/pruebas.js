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
let l6 = new Libro('Las 7 vidas del gato', 'Lilian', 2003, 'B', 'ABC', 'ruta E', 'ruta T')
let l7 = new Libro('Curiosidades de gatos', 'Lilian', 2003, 'B', 'ABC', 'ruta E', 'ruta T')
let l8 = new Libro('Gato Rosa', 'Rosa', 2004, 'B', 'ABC', 'ruta E', 'ruta T')
let l9 = new Libro('Gato mejor que perro', 'Rosa', 2002, 'B', 'ABC', 'ruta E', 'ruta T')

//---------------- Pruebas -------------------//
console.log('\nPrueba de correcta agregación: ')
biblioteca.agregarLibro(l1)
biblioteca.agregarLibro(l2)
biblioteca.agregarLibro(l3)
biblioteca.agregarLibro(l4)
biblioteca.agregarLibro(l5)
biblioteca.agregarLibro(l6)
biblioteca.agregarLibro(l7)
biblioteca.agregarLibro(l8)
biblioteca.agregarLibro(l9)

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

console.log('\nPrueba de correcta búsqueda de libros')
console.log('Prueba 1:')
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibros(null, 'Rosa'))
console.log('Prueba 2:')
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibros('Las 7 vidas del gato', 'Lilian'))
console.log('Prueba 3:')
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibros(null, null, '2003'))
console.log('Prueba 4:')
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibros(null, 'Lil'))
console.log('Prueba 5:')
Biblioteca.imprimirListadoLibros(biblioteca.buscarLibros(null, null, null, 'B'))
*/
console.log('\n')

