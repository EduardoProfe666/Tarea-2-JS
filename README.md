# Tarea 2 de Optativa I JavaScript

![Javascript](https://img.shields.io/badge/-JavaScript-35495E?style=for-the-badge&logo=javascript)
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Static Badge](https://img.shields.io/badge/MIT-e63caa?style=for-the-badge&label=License&labelColor=35495E)

## 📚 Enunciado 1 Gestor de Libros:

Crea una clase "Libro" que tenga propiedades como "título", "autor" y "año de publicación".
Luego, implementa funciones que permitan agregar, editar y eliminar libros en una lista de
libros. Además, desarrolla otra función que permita buscar libros por autor.

## 📙 Descripción del proyecto

### 🤔 Consideraciones Generales

Al libro se le agregaron otros atributos a parte de los básicos dados en la problemática: Publicador, Contenido, Cover (ruta) y Thumbnail (ruta).

Se desarrolló una interfaz de usuario usando el framework progresivo [Vue.js](https://es.vuejs.org/).

Para iniciar el proyecto se usó el comando:

```sh
npm create vue@latest
```

<br/>

Para instalar las dependencias necesarias se empleó el comando:

```sh
npm install
```

<br/>

Para ejecutar e ir probando la visual del proyecto se usó el comando:

```sh
npm run dev
```

<br/>

Para construir la aplicación se usó el comando:

```sh
npm run build
```

Los archivos resultantes del anterior comando fueron usados para desplegar el proyecto con [Github Pages](https://pages.github.com/).

### 🏛️ Estructura del proyecto:

Se utilizó la siguiente estructura:

```bash
.
├── .vscode/
├── node_modules/
├── public/
|   ├── backgrounds/
|   ├── covers/
|   ├── icons/
|   └── thumbnails/
├── src/
|   ├── assets/
|   |   ├── main.css
|   |   └── modal.css
|   ├── code/
|   |   ├── biblioteca.js
|   |   ├── controller.js
|   |   ├── inicializacion.js
|   |   ├── libro.js
|   |   ├── pruebas.js
|   |   ├── useEventEmitter.js
|   |   └── utilidades.js
|   ├── components/
|   |   ├── VAniadirLibro.vue
|   |   ├── VBarraNavegacion.vue
|   |   ├── VCarta.vue
|   |   ├── VEstanteria.vue
|   |   ├── VEliminarLibro.vue
|   |   ├── VLibro.vue
|   |   └── VModificarLibro.vue
|   ├── App.vue
|   └── main.js
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

Donde:

| **Fichero o carpeta** | **Descripción** |
| :-------------------- | :-------------- |
| `.vscode/` | Directorio que contiene archivos de configuración del editor **Visual Studio Code**  |
| `node_modules` | Directorio que contiene los paquetes o dependencias instaladas mediante `npm` |
| | |
| `public/` | Directorio que contiene los ficheros estáticos del proyecto (imágenes) |
| `public/backgrounds/` | Directorio que contiene las imágenes de fondo |
| `public/covers/` | Directorio que contiene las imágenes de las carátulas de los libros |
| `public/icons/` | Directorio que contiene los iconos usados |
| `public/thumbnails/` | Directorio que contiene los thumbnails de las imágenes usadas |
| | |
| `src/` | Directorio donde se almacena el código fuente del proyecto |
| `src/assets` | Directorio de archivos estáticos privados usados en el proyecto |
| `src/assets/main.css` | Fichero de estilos `css` principal del proyecto |
| `src/assets/modal.css` | Fichero de estilos `css` para los ficheros modales |
| `src/code/` | Directorio que contiene la lógica del proyecto, es decir, los archivos `.js` |
| `src/code/biblioteca.js` | Fichero `.js` que contiene la lógica de la biblioteca (listado de libros) y la única instancia de la misma en la aplicación |
| `src/code/controller.js` | Fichero `.js` que contiene métodos para vincular la lógica con la interfaz |
| `src/code/inicializacion.js` | Fichero `.js` que permite inicializar la aplicación con datos de prueba |
| `src/code/libro.js` | Fichero `.js` que contiene la lógica de los libros |
| `src/code/pruebas.js` | Fichero `.js` que contiene pruebas por consola de la lógica implementada |
| `src/code/useEventEmitter.js` | Fichero `.js` que contiene los métodos para agregar y consumir eventos. |
| `src/code/utilidades.js` | Fichero `.js` que contiene las funciones auxiliares implementadas |
| | |
| `src/components/` | Directorio que contiene los componentes `.vue` del proyecto |
| `src/components/VAniadirLibro.vue` | Fichero `.vue` con la interfaz de la funcionalidad **Añadir Libro** |
| `src/components/VBarraNavegacion.vue` | Fichero `.vue` con la interfaz de la funcionalidad **Barra de Navegación**, incluyendo la **Barra de Búsqueda** |
| `src/components/VCarta.vue` | Fichero `.vue` de la interfaz de la información del libro |
| `src/components/VEliminarLibro.vue` | Fichero `.vue` de la funcionalidad de **Eliminar Libro** |
| `src/components/VEstanteria.vue` | Fichero `.vue` del listado de libros |
| `src/components/VLibro.vue` | Fichero `.vue` de cada libro del listado de libros |
| `src/components/VModificarLibro.vue` | Fichero `.vue` de la interfaz de **Editar Libro** |
| | |
| `src/App.vue` | Fichero principal de `Vue` de la aplicación desarrollada |
| `src/main.js` | Fichero principal que carga `Vue` y el proyecto |
| `.eslintrc.js` | Fichero de configuración del _linter_ de **Javascript** `ESLint` |
| `.gitignore` | Fichero que indica los archivos que `Git` debe ignorar al hacer el versionado |
| `.prettierrc.json` | Fichero de configuración del formateador de código `Prettier` |
| `index.html` | Fichero `HTML` principal de la aplicación |
| `LICENSE` | Manifiesto de la licencia utilizada (**MIT**) |
| `package-lock.json` | Fichero histórico de versionado de apoyo para `package.json` |
| `package.json` | Fichero de configuración del proyecto, usando `npm` |
| `README.md` | Fichero `Markdown` donde se documenta el proyecto |
| `vite.config.js` | Fichero de configuración de `Vite`, automatizador de aplicaciones web **Javascript** |

## 🚀 Despliegue en Github Pages:

El proyecto fue desplegado con éxito en Github Pages. Se puede acceder a dicho despliegue a través del [siguiente enlace](https://eduardoprofe666.github.io/tarea-2-js/)

## 📸 Capturas de pantalla

### Pantalla Principal

![inicio](/assets/inicio.png)

### Buscador

![buscador](/assets/buscador.png)

### Carta de Libro

![carta](/assets/carta.png)

### Modificar Libro

![modificar](/assets/modificar.png)

### Eliminar Libro

![eliminar](/assets/eliminar.png)

## 👥 Miembros del equipo

<table>
    <tbody>
        <tr>
            <td align="center" valign="top" width="32.28%"><a href="https://github.com/LilyRosa"><img src="https://avatars.githubusercontent.com/u/135471998?v=3?s=100" width="100px;" alt="Lilian Rosa Rojas Rodríguez"/><br /><sub><b>Lilian Rosa Rojas Rodríguez</b></sub></a><br/> </td>
            <td align="center" valign="top" width="32.28%"><a href="https://github.com/Acce117"><img src="https://avatars.githubusercontent.com/u/105556788?v=3?s=100" width="100px;" alt="Ernesto Alejandro Carralero Conde"/><br /><sub><b>Ernesto Alejandro Carralero Conde</b></sub></a><br/> </td>
            <td align="center" valign="top" width="32.28%"><a href="https://github.com/jezeus17"><img src="https://avatars.githubusercontent.com/u/116925902?v=3?s=100" width="100px;" alt="Jesús Manuel Castellanos Reynaldo"/><br /><sub><b>Jesús Manuel Castellanos Reynaldo</b></sub></a><br/> </td>
        </tr>
        <tr>
            <td align="center" valign="top" width="32.28%"><a href="https://github.com/alejandroES10"><img src="https://avatars.githubusercontent.com/u/135449712?v=3?s=100" width="100px;" alt="Alejandro Estrada Suarez"/><br /><sub><b>Alejandro Estrada Suarez</b></sub></a><br/> </td>
            <td align="center" valign="top" width="32.28%"><a href="https://github.com/NeoUroboros"><img src="https://avatars.githubusercontent.com/u/126987083?v=3?s=100" width="100px;" alt="Fabio Ford Campbell"/><br /><sub><b>Fabio Ford Campbell</b></sub></a><br/> </td>
            <td align="center" valign="top" width="32.28%"><a href="https://github.com/EduardoProfe666"><img src="https://avatars.githubusercontent.com/u/119138695?v=3?s=100" width="100px;" alt="Eduardo Alejandro González Martell"/><br /><sub><b>Eduardo Alejandro González Martell</b></sub></a><br/> </td>
        </tr>
    </tbody>
</table>
