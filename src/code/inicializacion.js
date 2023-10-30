import { Libro } from './libro.js'
import biblioteca from './biblioteca.js'

//---------------- Declaración de variables -------------------//
let l1 = new Libro(
  'Learn Programming',
  'Antti Salonen',
  2018,
  'Autoedición',
  "This book is aimed at readers who are interested in software development but have very little to no prior experience.\r\n\r\nThe book doesn't have any new information compared to what you can find online or in other books.\r\nIt includes what I think is important for software development from a large variety of topics, saving the reader from the dilemma;what should I learn?\r\nIt collates relevant information from lots of sources in one book, saving the reader from going through several separate web sites and books;\r\n\r\nIt aims to contain an overview of almost everything that I think is important for software developers. It doesn't contain everything; but it should contain enough for the reader to understand software development, and to be able to read about and understand any topic in further detail as needed.\r\n\r\nThe book focuses on teaching the core principles around software development. It uses several technologies to this goal (e.g. C, Python, JavaScript, HTML, etc.) but is not a book about the technologies themselves. The reader will learn the basics (or in some cases more) of various technologies along the way, but the focus is on building a foundation for software development.",
  '/covers/l1.png',
  '/thumbnails/l1_t.png'
)
let l2 = new Libro(
  'Kotlin Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This Kotlin Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l2.png',
  '/thumbnails/l2_t.png'
)
let l3 = new Libro(
  'JavaScript Notes for Professional',
  'Varios',
  2018,
  'GoalKicker.com',
  'This JavaScript Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. \r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l3.png',
  '/thumbnails/l3_t.png'
)
let l4 = new Libro(
  'MongoDB Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This MongoDB Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l4.png',
  '/thumbnails/l4_t.png'
)
let l5 = new Libro(
  'React Native Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This React Native Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. \r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l5.png',
  '/thumbnails/l5_t.png'
)
let l6 = new Libro(
  'HTML5 Canvas Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This HTML5 Canvas Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. \r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l6.png',
  '/thumbnails/l6_t.png'
)
let l7 = new Libro(
  'TypeScript Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This TypeScript Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. \r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l7.png',
  '/thumbnails/l7_t.png'
)
let l8 = new Libro(
  'jQuery Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This jQuery Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. \r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l8.png',
  '/thumbnails/l8_t.png'
)
let l9 = new Libro(
  'Node.js Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This Node.js Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. \r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l9.png',
  '/thumbnails/l9_t.png'
)
let l10 = new Libro(
  'Angular 2 Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This Angular 2 Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l10.png',
  '/thumbnails/l10_t.png'
)
let l11 = new Libro(
  'AngularJS Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This AngularJS Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified.',
  '/covers/l11.png',
  '/thumbnails/l11_t.png'
)
let l12 = new Libro(
  'React JS Notes for Professionals',
  'Varios',
  2018,
  'GoalKicker.com',
  'This React JS Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow.\r\n\r\nText content is released under Creative Commons BY-SA, see credits at the end of this book whom contributed to the various chapters. Images may be copyright of their respective owners unless otherwise specified. \r\n\r\nThis is an unofficial free book created for educational purposes and is not affiliated with official React JS group(s) or company(s) nor Stack Overflow. All trademarks and registered trademarks are the property of their respective company owners',
  '/covers/l12.png',
  '/thumbnails/l12_t.png'
)
let l13 = new Libro(
  'HTML5',
  'Arkaitz Garro',
  2015,
  'Autoedición',
  'HTML5 (HyperText Markup Language, versión 5) es la quinta revisión del lenguaje HTML.\r\n\r\nEsta nueva versión (aún en desarrollo), y en conjunto con CSS3, define los nuevos estándares de desarrollo web, rediseñando el código para resolver problemas y actualizándolo as&iacute; a nuevas necesidades. No se limita solo a crear nuevas etiquetas o atributos, sino que incorpora muchas características nuevas y proporciona una plataforma de desarrollo de complejas aplicaciones web (mediante los APIs).',
  '/covers/l13.png',
  '/thumbnails/l13_t.png'
)
let l14 = new Libro(
  'Front-End Developer Handbook 2018',
  'Cody Lindley',
  2018,
  'Frontend Masters',
  'This is a guide that anyone could use to learn about the practice of front-end development. It broadly outlines and discusses the practice of front-end engineering: how to learn it and what tools are used when practicing it in 2018. \r\n\r\nIt is specifically written with the intention of being a professional resource for potential and currently practicing front-end developers to equip themselves with learning materials and development tools. Secondarily, it can be used by managers, CTOs, instructors, and head hunters to gain insights into the practice of front-end development. \r\n\r\nThe content of the handbook favors web technologies (HTML, CSS, DOM, and JavaScript) and those solutions that are directly built on top of these open technologies. The materials referenced and discussed in the book are either best in class or the current offering to a problem.\r\n\r\nThe book should not be considered a comprehensive outline of all resources available to a front-end developer. The value of the book is tied up in a terse, focused, and timely curation of just enough categorical information so as not to overwhelm anyone on any one particular subject matter.',
  '/covers/l14.png',
  '/thumbnails/l14_t.png'
)
let l15 = new Libro(
  'Eloquent Javascript 3rd Edition',
  'Marijn Haverbeke',
  2018,
  'Autoedición',
  'This is a book about instructing computers. Computers are about as common as screwdrivers today. But they are quite a bit more complex than screwdrivers, and making them do the precise thing you want them to do isn\'t always easy.\r\n\r\nIf the task you have for your computer is a common, well-understood one, such as showing you your email or acting like a calculator, you can open the appropriate application and get to work. But for unique or open ended tasks, there may not be an application.\r\n\r\nThat is where programming may come in. Programming is the act of constructing a programma set of precise instructions, that tell a computer what to do. Because computers are dumb, pedantic beasts, programming is fundamentally tedious and frustrating. \r\n\r\nFortunately, if you can get over that, and maybe even enjoy the rigor of thinking in terms that dumb machines can deal with, programming can be very rewarding. It allows you to do things that would take forever by hand in seconds. It is a way to make your computer tool do things that it couldn\'t do before. And it provides a wonderful exercise in abstract thinking.\r\n\r\nMost programming is done with programming languages. A programming language is an artificially constructed language used to instruct computers. It is interesting that the most effective way we\'ve found to communicate with a computer borrows so heavily from the way we communicate with each other. Like human languages, computer languages allow words and phrases to be combined in new ways, allowing you to express ever new concepts.',
  '/covers/l15.png',
  '/thumbnails/l15_t.png'
)
let l16 = new Libro(
  'TypeScript: Deep Dive',
  'Basarat Ali Syed',
  2016,
  'Autoedición',
  'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipado estático y objetos basados en clases. Anders Hejlsberg, diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript . Typescript puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).\r\n\r\nTypeScript extiende la sintaxis de JavaScript, por tanto cualquier código JavaScript existente debería funcionar sin problemas. Está pensado para grandes proyectos, los cuales a través de un compilador de TypeScript se traducen a código JavaScript original.\r\n\r\nTypeScript soporta ficheros de definición que contengan información sobre los tipos de librerías JavaScript existentes, similares a los ficheros de cabeceras de C/C++ que describen la estructura de ficheros de objetos existentes. Esto permite a otros programas usar los valores definidos en los ficheros como si fueran entidades TypeScript de tipado estático. Existen cabeceras para librerías populares como jQuery, MongoDB y D3.js, y los módulos básicos de Node.js.\r\n\r\nEl compilador de TypeScript está escrito asimismo en TypeScript, compilado a JavaScript y con Licencia Apache 2.',
  '/covers/l16.png',
  '/thumbnails/l16_t.png'
)
let l17 = new Libro(
  'JavaScript, ¡Inspírate!',
  'Ulises Gascón González',
  2017,
  'Leanpub',
  'He tenido grandes maestros, que me han enseñado mucho y he leído muchos libros sobre este mundillo pero nunca he logrado dar con el libro que solucionará; todas las dudas o me diera una base sólida sobre la que crecer en un lenguaje tan fascinante y estigmatizado como es JavaScript. \r\n\r\nPor eso, este libro esta escrito como me hubiera gustado que fueran aquellos que yo leía cuando empezaba a programar en JavaScript. Este libro que tienes ahora mismo ante tus ojos, es el resultado de mi esfuerzo personal, con el objeto de crear un instrumento sencillo y simple que muestre al lector la base de un lenguaje tan peculiar y extendido como JavaScript. \r\n\r\nMi idea, es empezar desde cero y hacer un viaje juntos desde los abismos profundos de la duda, pasando por el pseudocódigo hasta llegar al maravilloso mundo de las llamadas Ajax, haciendo muchas paradas en el camino, en las que aprenderemostodo lo que necesitas para empezar tu aventura como desarrollador Front-end con sólidas bases en JavaScript.',
  '/covers/l17.png',
  '/thumbnails/l17_t.png'
)
let l18 = new Libro(
  'TypeScript',
  'Emmanuel Valverde Ramos y Pedro Hernández-Mora de Fuentes',
  2016,
  'Autoedición',
  'TypeScript es un lenguaje de programación moderno que permite crear aplicaciones web robustas en JavaScript. No requiere de ningún tipo de plugin, puesto que lo que hace es generar código JavaScript que se ejecuta en cualquier navegador, plataforma o sistema operativo. \r\n\r\nTypeScript es un transpilador, es decir, un compilador que se encarga de traducir las instrucciones de un lenguaje a otro, aqui lo llamaremos también pre-compilador ya que este realmente intenta realizar las funciones de un compilandor más las funciones de un traductor de instrucciones.',
  '/covers/l18.png',
  '/thumbnails/l18_t.png'
)
let l19 = new Libro(
  'The Good, the Bad, and the Ugly: An Empirical Study of Implicit Type Conversions in Javascript',
  'Michael Pradel y Koushik Sen',
  2015,
  'ECOOP',
  'Most popular programming languages support situations where a value of one type is converted into a value of another type without any explicit cast. Such implicit type conversions, or type coercions, are a highly controversial language feature. Proponents argue that type coercions enable writing concise code. Opponents argue that type coercions are error-prone and that they reduce the understandability of programs. This paper studies the use of type coercions in JavaScript, a language notorious for its widespread use of coercions. We dynamically analyze hundreds of programs, including real-world web applications and popular benchmark programs. \r\n\r\nWe find that coercions are widely used (in 80.42% of all function executions) and that most coercions are likely to be harmless (98.85%). Furthermore, we identify a set of rarely occurring and potentially harmful coercions that safer subsets of JavaScript or future language designs may want to disallow. Our results suggest that type coercions are significantly less evil than commonly assumed and that analyses targeted at real-world JavaScript programs must consider coercions.',
  '/covers/l19.png',
  '/thumbnails/l19_t.png'
)
let l20 = new Libro(
  'Optimization Coaching for Javascript',
  'Vincent St-Amour y Shu-yu Guo',
  2015,
  'ECOOP',
  'The performance of dynamic object-oriented programming languages such as JavaScript depends heavily on highly optimizing just-in-time compilers. Such compilers, like all compilers, can silently fall back to generating conservative, low-performance code during optimization. As a result, programmers may inadvertently cause performance issues on users systems by making seemingly inoffensive changes to programs. This paper shows how to solve the problem of silent optimization failures. It specifically explains how to create a so-called optimization coach for an object-oriented just-in-time-compiled programming language. The development and evaluation build on the SpiderMonkey JavaScript engine, but the results should generalize to a variety of similar platforms.',
  '/covers/l20.png',
  '/thumbnails/l20_t.png'
)
let l21 = new Libro(
  'Mathematical Applications for Game Development',
  'Richard Baldwin',
  2013,
  'Rice University',
  'Mathematical Applications for Game Development presents applications of mathematics and science in game and simulation programming. Includes the utilization of matrix and vector operations, kinematics, and Newtonian principles in games and simulations. Also covers code optimization.\r\n\r\nThis course material consists of about 20 different modules arranged\r\n\r\nThe modules in the Math section use Java OOP to develop a game math library.',
  '/covers/l21.png',
  '/thumbnails/l21_t.png'
)
let l22 = new Libro(
  'The Missing Link: An Introduction to Web Development and Programming',
  'Michael Mendez',
  2014,
  'Open SUNY Textbooks',
  'It is always a challenge to teach a course in web design or web programming. Systems that run on the World Wide Web must necessarily change with the emergence of any sort of new computer technology, creating a rapidly evolving landscape. The students that enroll in web development courses are a particularly diverse group; the subject attracts strong programmers with weak aesthetic design skills as well as those who are more aesthetically inclined with little knowledge of programming. Finally, the visibility and mission criticality of web platforms makes the design and security of these systems paramount.\r\n\r\nThe Missing Link attempts to bridge the gap between these conflicting educational demands. While most web development texts opt to delve deeply into one or two of the tools in the belt of a web programmer, the author of this text takes a broad approach to teaching web programming and development. The result is a single resource that integrates good design practices, modern technologies, and all of the programming tools that one would need to build a successful, dynamic web site.\r\n\r\nUnlike many texts, this one begins by giving the readers a solid foundation in the technology that runs the Internet along with a sense of what technology is currently coming of age. This is followed by both a process and pattern-oriented slant on web design that focuses on the Model-View-Controller structure which underlies the rest of the text. HTML and CSS covered for the development of web interfaces. The PHP and JavaScript sections enable readers to develop the controllers for those interfaces. Finally, a concise introduction to databases and SQL allows for the development of robust data models.',
  '/covers/l22.png',
  '/thumbnails/l22_t.png'
)
let l23 = new Libro(
  'Eloquent JavaScript: Second Edition',
  'Marijn Haverbeke',
  2014,
  'Autoedición',
  'This is a book about getting computers to do what you want them to do. Computers are about as common as screwdrivers today, but they contain a lot more hidden complexity and thus are harder to operate and understand. To many, they remain alien, slightly threatening things.\r\n\r\nWeve found two effective ways of bridging the communication gap between us, squishy biological organisms with a talent for social and spatial reasoning, and computers, unfeeling manipulators of meaningless data. The first is to appeal to our sense of the physical world and build interfaces that mimic that world and allow us to manipulate shapes on a screen with our fingers. This works very well for casual machine interaction.\r\n\r\nBut we have not yet found a good way to use the point-and-click approach to communicate things to the computer that the designer of the interface did not anticipate. For open-ended interfaces, such as instructing the computer to perform arbitrary tasks, weve had more luck with an approach that makes use of our talent for language: teaching the machine a language.',
  '/covers/l23.png',
  '/thumbnails/l23_t.png'
)
let l24 = new Libro(
  'HTML 5 Shootem Up in an Afternoon',
  'Bryan Bibat',
  2014,
  'Leanpub',
  'This is usually the part where books give a lengthy intro about HTML5 to increase their word count. This is not one of those books.\r\n\r\nAll you need to know about HTML5 is that it allows you to do stuff in your browser, regardless if its on a desktop PC or a mobile phone, without the need for extra plugins. And that includes making games. If you want a better intro to HTML5, head over to Dive Into HTML5.\r\n\r\nAs the title and cover of the book implies, we will introduce you to both HTML5 and game development by guiding you in making a shoot-em-up game similar to the classic video game 1942.\r\n\r\nThere are a number of HTML5 libraries and frameworks out there right now. For this afternoon workshop, well be using Phaser, an open-source framework built on top of Pixi.js. Its a higher-level framework: its bigger and may feel like you have much less control (i.e. magical) compared to other frameworks, but at the same time, you need far less code to get things done and this makes it suitable for a short workshop such as this one.',
  '/covers/l24.png',
  '/thumbnails/l24_t.png'
)
let l25 = new Libro(
  'JavaScript Allongé (Free Edition)',
  'Reginald Braithwaite',
  2014,
  'Leanpub',
  'Café Allongé, also called Espresso Lungo, is a drink midway between an Espresso and Americano in strength. There are two different ways to make it. The first, and the one I prefer, is to add a small amount of hot water to a double or quadruple Espresso Ristretto. \r\n\r\nLike adding a splash of water to whiskey, the small dilution releases more of the complex flavours in the mouth.\r\n\r\nThe second way is to pull an extra long double shot of Espresso. This achieves approximately the same ratio of oils to water as the dilution method, but also releases a different mix of flavours due to the longer extraction. Some complain that the long pull is more bitter and detracts from the best character of the coffee, others feel it releases even more complexity.\r\n\r\nThe important thing is that neither method of preparation should use so much water as to result in a sickly, pale ghost of Espresso. Moderation in all things.',
  '/covers/l25.png',
  '/thumbnails/l25_t.png'
)

biblioteca.agregarLibro(l1)
biblioteca.agregarLibro(l2)
biblioteca.agregarLibro(l3)
biblioteca.agregarLibro(l4)
biblioteca.agregarLibro(l5)
biblioteca.agregarLibro(l6)
biblioteca.agregarLibro(l7)
biblioteca.agregarLibro(l8)
biblioteca.agregarLibro(l9)
biblioteca.agregarLibro(l10)
biblioteca.agregarLibro(l11)
biblioteca.agregarLibro(l12)
biblioteca.agregarLibro(l13)
biblioteca.agregarLibro(l14)
biblioteca.agregarLibro(l15)
biblioteca.agregarLibro(l16)
biblioteca.agregarLibro(l17)
biblioteca.agregarLibro(l18)
biblioteca.agregarLibro(l19)
biblioteca.agregarLibro(l20)
biblioteca.agregarLibro(l21)
biblioteca.agregarLibro(l22)
biblioteca.agregarLibro(l23)
biblioteca.agregarLibro(l24)
biblioteca.agregarLibro(l25)

biblioteca.imprimirListadoLibros()
