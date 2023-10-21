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