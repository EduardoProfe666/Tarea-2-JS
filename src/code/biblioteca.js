import { Libro } from './libro.js'
import { validarNoNullUndefined } from './utilidades.js'

/**
 * Permite modelar una biblioteca con su listado de libros y las funcionalidades
 * de agregar, editar y eliminar libros, además de buscar libros por autor
 */
class Biblioteca {
  constructor() {
    const _listado_libros = []

    //------- Getters -----------//
    this.getListadoLibros = () => _listado_libros
  }

  //----------------- Agregar, Editar, Eliminar --------------//
  /**
   * Permite agregar un libro dado en el listado de libros, siempre y cuando
   * no sea null o undefined, sea una instancia de la clase Libro y no se
   * encuentre incluida ya en el listado
   * @param {Libro} libro Libro a agregar
   */
  agregarLibro(libro) {
    if (
      !validarNoNullUndefined(libro) ||
      !(libro instanceof Libro) ||
      this.getListadoLibros().includes(libro)
    )
      throw new Error('Libro no válido')
    this.getListadoLibros().push(libro)
  }
  /**
   * Permite editar todos los parámetros editables de un libro determinado, pudiendo cambiar
   * parcialmente los datos pasando como null o undefined aquellos parámetros que no se
   * requieran cambios
   *
   * @param {string} id_libro
   * @param {string | null | undefined} titulo
   * @param {string | null | undefined} autor
   * @param {number} anno_publicacion
   * @param {string | null | undefined} publicador
   * @param {string | null | undefined} contenido
   * @param {string | null | undefined} cover
   * @param {string | null | undefined} thumbnail
   */
  editarLibro(id_libro, titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail) {
    let libro = this.getListadoLibros()[this.buscarIndiceLibro(id_libro)]
    if (validarNoNullUndefined(titulo)) libro.setTitulo(titulo)
    if (validarNoNullUndefined(autor)) libro.setAutor(autor)
    if (validarNoNullUndefined(anno_publicacion)) libro.setAnnoPublicacion(anno_publicacion)
    if (validarNoNullUndefined(publicador)) libro.setPublicador(publicador)
    if (validarNoNullUndefined(contenido)) libro.setContenido(contenido)
    if (validarNoNullUndefined(cover)) libro.setCover(cover)
    if (validarNoNullUndefined(thumbnail)) libro.setThumbnail(thumbnail)
  }

  /**
   * Permite eliminar un libro dado su id
   * @param {string} id_libro
   */
  eliminarLibro(id_libro) {
    this.getListadoLibros().splice(this.buscarIndiceLibro(id_libro), 1)
  }

  buscarIndiceLibro(id_libro) {
    return this.getListadoLibros().findIndex((libro) => libro.getId() == id_libro)
  }
  //--------------- Buscadores ---------------//
  /**
   * Permite filtrar el listado de libros por un autor, un título, un año de publicación y un publicador determinado,
   * pudiendo ser algunos de estos parámetros omitidos.
   *
   * @param {string} titulo
   * @param {string} autor
   * @param {number} annoPublicacion
   * @param {string} publicador
   * @returns Listado de libros filtrado
   */
  buscarLibros(titulo, autor, annoPublicacion, publicador) {
    let libros = this.getListadoLibros()
    if (validarNoNullUndefined(titulo)) {
      libros = libros.filter((libro) => libro.getTitulo().includes(titulo))
    }
    if (validarNoNullUndefined(autor)) {
      libros = libros.filter((libro) => libro.getAutor().includes(autor))
    }
    if (validarNoNullUndefined(annoPublicacion)) {
      libros = libros.filter((libro) =>
        libro.getAnnoPublicacion().toString().includes(annoPublicacion.toString())
      )
    }
    if (validarNoNullUndefined(publicador)) {
      libros = libros.filter((libro) => libro.getPublicador().includes(publicador))
    }

    return libros
  }

  /**
   * Permite encontrar un libro determinado por su id, devolviendo su
   * índice en el listado de libros
   * @param {string} id_libro
   * @returns Índice del libro en el listado de libros
   */
  buscarLibro(id_libro) {
    if (!validarNoNullUndefined(id_libro) || typeof id_libro !== 'string' || id_libro.length != 9)
      throw new Error('Identificador no válido')

    return this.getListadoLibros().find((libro) => libro.getId() == id_libro)
  }

  //----------------- Otros --------------//
  /**
   * Permite imprimir el listado de libros de la biblioteca
   */
  imprimirListadoLibros() {
    console.log('Listado de libros:')
    for (let libro of this.getListadoLibros()) libro.imprimir()
  }

  /**
   * Permite imprimir el listado de libros pasado por parámetros
   *
   * @param {Libro[]} libros Listado de libros
   */
  static imprimirListadoLibros(libros) {
    console.log('Listado de libros:')
    for (let libro of libros) libro.imprimir()
  }

  editar(libro, titulo, autor, annoPublicacion, publicador, contenido) {
    if (
      validarNoNullUndefined(titulo) &&
      typeof titulo === 'string' &&
      titulo.trim().length !== 0
    ) {
      if (validarNoNullUndefined(autor) && typeof autor === 'string' && autor.trim().length !== 0) {
        if (validarNoNullUndefined(annoPublicacion) && typeof annoPublicacion === 'number') {
          if (
            validarNoNullUndefined(publicador) &&
            typeof publicador === 'string' &&
            publicador.trim().length !== 0
          ) {
            if (
              validarNoNullUndefined(contenido) &&
              typeof contenido === 'string' &&
              contenido.trim().length !== 0
            ) {
              libro.setTitulo(titulo)
              libro.setAutor(autor)
              libro.setAnnoPublicacion(annoPublicacion)
              libro.setPublicador(publicador)
              libro.setContenido(contenido)
            } else throw new Error('El contenido no es válido')
          } else throw new Error('El publicador no es válido')
        } else throw new Error('El año de publicación no es válido')
      } else throw new Error('El autor no es válido')
    } else throw new Error('El autor no es válido')
  }
}

const biblioteca = new Biblioteca()

export default biblioteca
