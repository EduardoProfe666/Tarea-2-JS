import { validarNoNullUndefined, generarIdUnico } from './utilidades.js'

export class Libro {
  //---------------- Atributos privados ---------------//
  #id
  #titulo
  #autor
  #anno_publicacion

  //---------------- Getters -----------//
  getId() {
    return this.#id
  }
  getTitulo() {
    return this.#titulo
  }
  getAutor() {
    return this.#autor
  }
  getAnnoPublicacion() {
    return this.#anno_publicacion
  }

  //----------------- Setters ---------------//
  setTitulo(titulo) {
    if (!validarNoNullUndefined(titulo) || typeof titulo !== 'string')
      throw new Error('Título no válido')
    this.#titulo = titulo
  }
  setAutor(autor) {
    if (!validarNoNullUndefined(autor) || typeof autor !== 'string')
      throw new Error('Autor no válido')
    this.#autor = autor
  }
  setAnnoPublicacion(anno_publicacion) {
    if (!validarNoNullUndefined(anno_publicacion) || typeof anno_publicacion !== 'number')
      throw new Error('Año de publicación no válido')
    this.#anno_publicacion = anno_publicacion
  }

  //------------- Constructor ------------//
  constructor(titulo, autor, anno_publicacion) {
    this.#id = generarIdUnico()
    this.setTitulo(titulo)
    this.setAutor(autor)
    this.setAnnoPublicacion(anno_publicacion)
  }

  // ----------------- Otros ---------------//
  imprimir() {
    console.log(
      `Libro con id: ${this.getId()}, título: ${this.getTitulo()}, autor: ${this.getAutor()} y año de publicación: ${this.getAnnoPublicacion()}`
    )
  }
}

export class Biblioteca {
  //---------------- Atributos privados ---------------//
  #listado_libros = []

  //--------------- Getters ---------------//
  getListadoLibros() {
    return this.#listado_libros
  }

  //----------------- Agregar, Editar, Eliminar --------------//
  agregarLibro(libro) {
    if (
      !validarNoNullUndefined(libro) ||
      !(libro instanceof Libro) ||
      this.getListadoLibros().includes(libro)
    )
      throw new Error('Libro no válido')
    this.getListadoLibros().push(libro)
  }
  eliminarLibro(id_libro) {
    this.getListadoLibros().splice(this.buscarLibro(id_libro), 1)
  }
  editarLibro(id_libro, titulo, autor, anno_publicacion) {
    let libro = this.getListadoLibros()[this.buscarLibro(id_libro)]
    if (validarNoNullUndefined(titulo)) libro.setTitulo(titulo)
    if (validarNoNullUndefined(autor)) libro.setAutor(autor)
    if (validarNoNullUndefined(anno_publicacion)) libro.setAnnoPublicacion(anno_publicacion)
  }

  //--------------- Buscadores ---------------//
  buscarLibrosAutor(autor) {
    if (!validarNoNullUndefined(autor) || typeof autor !== 'string')
      throw new Error('Autor no válido')

    return this.getListadoLibros().filter((libro) => libro.getAutor() === autor)
  }
  buscarLibro(id_libro) {
    if (!validarNoNullUndefined(id_libro) || typeof id_libro !== 'string' || id_libro.length != 9)
      throw new Error('Identificador no válido')
    let indice = -1

    for (let i = 0; i < this.getListadoLibros().length && indice == -1; i++) {
      if (this.getListadoLibros()[i].getId() === id_libro) {
        indice = i
      }
    }

    if (indice == -1) throw new Error('No existe un libro con el identificador: ' + id_libro)

    return indice
  }

  //----------------- Otros --------------//
  imprimirListadoLibros() {
    console.log('Listado de libros:')
    for (let libro of this.getListadoLibros()) libro.imprimir()
  }
  static imprimirListadoLibros(libros) {
    console.log('Listado de libros:')
    for (let libro of libros) libro.imprimir()
  }
}
