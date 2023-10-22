import { validarNoNullUndefined, generarIdUnico, dormirEjecucion } from './utilidades.js'

/**
 * Permite modelar un libro con: título, autor, año de publicación,
 * publicador, contenido, imagen de portada (cover) y thumbnail de la portada
 */
export class Libro {
  constructor(titulo, autor, anno_publicacion, publicador, contenido, cover, thumbnail) {
    //--------------- Atributos Privados ------------//
    let _id
    let _titulo
    let _autor
    let _anno_publicacion
    let _publicador
    let _contenido
    let _cover //Es una ruta
    let _thumbnail //Es una ruta

    //-------------------- Getters -----------------//
    this.getId = () => _id
    this.getTitulo = () => _titulo
    this.getAutor = () => _autor
    this.getAnnoPublicacion = () => _anno_publicacion
    this.getPublicador = () => _publicador
    this.getContenido = () => _contenido
    this.getCover = () => _cover
    this.getThumbnail = () => _thumbnail

    //-------------------- Setters ---------------//
    this.setTitulo = (titulo) => {
      if (!validarNoNullUndefined(titulo) || typeof titulo !== 'string')
        throw new Error('Título no válido')
      _titulo = titulo
    }
    this.setAutor = (autor) => {
      if (!validarNoNullUndefined(autor) || typeof autor !== 'string')
        throw new Error('Autor no válido')
      _autor = autor
    }
    this.setAnnoPublicacion = (anno_publicacion) => {
      if (!validarNoNullUndefined(anno_publicacion) || typeof anno_publicacion !== 'number')
        throw new Error('Año de publicación no válido')
      _anno_publicacion = anno_publicacion
    }
    this.setPublicador = (publicador) => {
      if (!validarNoNullUndefined(publicador) || typeof publicador !== 'string')
        throw new Error('Publicador no válido')
      _publicador = publicador
    }
    this.setContenido = (contenido) => {
      if (!validarNoNullUndefined(contenido) || typeof contenido !== 'string')
        throw new Error('Contenido no válido')
      _contenido = contenido
    }
    this.setCover = (cover) => {
      if (!validarNoNullUndefined(cover) || typeof cover !== 'string')
        throw new Error('Cover no válido')
      _cover = cover
    }
    this.setThumbnail = (thumbnail) => {
      if (!validarNoNullUndefined(thumbnail) || typeof thumbnail !== 'string')
        throw new Error('Thumbnail no válido')
      _thumbnail = thumbnail
    }

    //---------------- Inicializar datos --------------//
    _id = generarIdUnico()
    this.setTitulo(titulo)
    this.setAutor(autor)
    this.setAnnoPublicacion(anno_publicacion)
    this.setPublicador(publicador)
    this.setContenido(contenido)
    this.setCover(cover)
    this.setThumbnail(thumbnail)
    dormirEjecucion(2)
  }

  // ----------------- Otros ---------------//
  imprimir() {
    console.log(
      `Libro con id: ${this.getId()}, título: ${this.getTitulo()}, autor: ${this.getAutor()} y 
      año de publicación: ${this.getAnnoPublicacion()}, publicador: ${this.getPublicador()}, contenido: 
      ${this.getContenido()}, cover: ${this.getCover()}, thumbnail: ${this.getThumbnail()}`
    )
  }
}
