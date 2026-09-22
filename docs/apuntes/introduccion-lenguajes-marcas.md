---
hide:
  - navigation
---

# UT1 Introducción a los Lenguajes de Marcas

Antes de escribir la primera línea de HTML del curso, conviene entender qué es exactamente un lenguaje de marcas y por qué existen. No es solo "un tipo de código que usan las páginas web": es una familia de lenguajes con una idea común detrás, que lleva más de sesenta años resolviendo el mismo problema de fondo — cómo describir la estructura de un documento sin mezclarla con su significado o su presentación. Entender esa idea te va a servir durante todo el módulo, porque HTML, XML, JSON y hasta Markdown son variaciones sobre el mismo tema.

## ¿Qué es un lenguaje de marcas y para qué sirve?

Un **lenguaje de marcas** es un sistema que usa etiquetas — las **marcas** — para señalar qué es cada parte de un documento: esto es un título, esto es una lista, esto es el precio de un producto. Las marcas no aparecen en el resultado final que ve la persona usuaria (nadie ve las etiquetas `<h1>` en una web renderizada, ni las llaves de un JSON en la respuesta de una app); están ahí para que un programa sepa cómo tratar cada trozo de contenido.

Esto tiene una consecuencia importante: un lenguaje de marcas **separa el contenido de su estructura y de su presentación**. El contenido es la información en sí ("Lenguajes de Marcas"); la estructura es cómo se organiza esa información (es un título de nivel 1, dentro de una sección); la presentación es cómo se ve (en negrita, tamaño 24px, color azul). HTML se ocupa sobre todo de la estructura; CSS, que verás en la próxima unidad, se ocupa de la presentación. Esta separación es la razón por la que puedes cambiar el diseño completo de una web sin tocar ni una palabra del contenido, o por la que la misma respuesta JSON de una API puede alimentar tanto una app móvil como una web sin que el formato de los datos tenga que cambiar.

Hay una segunda idea, más sutil, que conviene dejar clara desde ya: **un lenguaje de marcas no es un lenguaje de programación**. HTML no tiene variables, ni condicionales, ni bucles — no le puedes pedir que "si el usuario está logueado, muestra este botón". Eso se lo delegas a JavaScript. XML no calcula nada; solo describe datos. Esta distinción parece obvia, pero es un error común al empezar: pensar que porque algo tiene "código" entre etiquetas, es programación. Los lenguajes de marcas son **declarativos** — describen *qué* es algo, no *cómo* debe comportarse.

## Documentos como árboles: la estructura jerárquica

Casi todos los lenguajes de marcas que vas a usar en este módulo comparten un mismo modelo de organización: el **árbol**. Un documento marcado no es una lista plana de elementos, es una jerarquía: hay un elemento raíz que contiene a otros elementos, que a su vez pueden contener otros, y así sucesivamente.

Piénsalo como el índice de un libro: el libro es la raíz, contiene capítulos, cada capítulo contiene secciones, cada sección contiene párrafos. En HTML, la raíz es `<html>`, que contiene `<head>` y `<body>`; dentro de `<body>` puede haber un `<article>` que contenga un `<h1>` y varios `<p>`. En XML pasa exactamente lo mismo, pero con las etiquetas que tú definas. Esta estructura en árbol es la que luego, en JavaScript, vas a poder recorrer y modificar a través del **DOM** (Document Object Model) — cuando en la Unidad 4 hagas `document.querySelector()`, en realidad estás pidiéndole al navegador que busque un nodo concreto dentro de ese árbol.

Que un documento tenga esta forma no es casualidad: los árboles son fáciles de procesar mecánicamente (un programa puede recorrerlos nodo a nodo), fáciles de validar (puedes comprobar que cada nodo está donde le corresponde) y fáciles de transformar de un formato a otro, que es exactamente lo que harás en la UT5 cuando conviertas datos entre XML y JSON.

## Un poco de historia: de las imprentas a las APIs

La necesidad de marcar documentos no nació con la Web. Nació en la industria editorial, en los años 60, cuando IBM tuvo un problema muy concreto: un mismo documento tenía que imprimirse en distintos formatos y tamaños, y reescribirlo cada vez a mano era absurdo. De ahí surgió el **GML** (*Generalized Markup Language*), el primer intento serio de separar "esto es un título" de "el título se imprime en tamaño 18 y centrado". El GML era rudimentario para lo que estamos acostumbrados hoy, pero la idea que planteaba — marcar la estructura, no el aspecto — es la misma que sigue viva en HTML y en CSS.

```text
:title.General Markup Language
:author.John Doe
:section.Starting GML
This is a paragraph in GML.
```

En 1986 esa idea se formalizó como estándar internacional con el **SGML** (*Standard Generalized Markup Language*). SGML no era ya un lenguaje concreto, sino un **metalenguaje**: un conjunto de reglas para poder crear otros lenguajes de marcas a medida, definiendo tus propias etiquetas según lo que necesitaras describir. Esa flexibilidad tenía un precio — SGML es complejo de implementar y de aprender —, así que en la práctica casi nadie lo usaba directamente. Lo importante de SGML no es que lo vayas a usar (no lo harás), sino que sentó las reglas de sintaxis — etiquetas de apertura y cierre, atributos, anidamiento — de las que heredan tanto HTML como XML.

```html
<!DOCTYPE example SYSTEM "example.dtd">
<document>
  <title>This is SGML</title>
  <body>
    <p>SGML example content</p>
  </body>
</document>
```

Cuando Tim Berners-Lee necesitó una forma de estructurar páginas para la Web naciente, a principios de los 90, no inventó algo desde cero: cogió SGML y lo simplificó drásticamente, dando lugar al **HTML** (*HyperText Markup Language*) que conocerás en la Unidad 2. HTML tiene una particularidad frente a SGML y XML: sus etiquetas están **predefinidas** — no puedes inventarte una etiqueta `<precio>`, tienes que trabajar con el vocabulario cerrado que define el estándar (`<p>`, `<table>`, `<article>`...). Eso lo hace mucho más fácil de aprender, pero también más rígido cuando lo que quieres describir no encaja bien en ese vocabulario.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph in HTML.</p>
  </body>
</html>
```

Ese último problema — "necesito describir mis propios datos, no una página" — es el que resuelve el **XML** (*eXtensible Markup Language*), estandarizado en 1998. XML retoma la idea de SGML de dejarte definir tus propias etiquetas, pero simplificando mucho las reglas: es legible tanto por personas como por máquinas, y durante más de una década fue el formato por defecto para intercambiar datos entre sistemas empresariales — bases de datos, servicios web SOAP, ficheros de configuración. Todavía hoy lo vas a encontrar en sitios muy concretos: la mayoría de los `sitemap.xml` que indexan los buscadores, muchos formatos de documento de oficina (un `.docx` es, por dentro, una colección de ficheros XML comprimidos), o sistemas bancarios y administrativos donde la validación estricta de la estructura es un requisito legal, no una comodidad.

```xml
<book>
  <title>XML Developer's Guide</title>
  <author>Jane Doe</author>
  <price>44.95</price>
</book>
```

A partir de ahí, la historia se acelera y se ramifica: en vez de un único lenguaje "ganador", aparecen formatos ligeros pensados para necesidades muy específicas. El **Markdown**, creado por John Gruber en 2004, nace para poder escribir texto con formato usando una sintaxis que se lee cómoda incluso sin renderizar — es la razón por la que estás leyendo estos apuntes en Markdown, por la que los `README` de GitHub se ven bien, y por la que hoy es, junto con HTML, el formato que mejor entienden los modelos de lenguaje a la hora de generar o resumir texto estructurado.

```markdown
# This is a title
This is a paragraph with **bold** and *italic* text.
```

El **LaTeX**, bastante anterior en el tiempo (1980s) pero que conviene mencionar aquí por su enfoque, resuelve un problema distinto: la composición tipográfica de documentos científicos, con fórmulas matemáticas, numeración automática y bibliografía. Su curva de aprendizaje es empinada porque, a diferencia de HTML o Markdown, tienes que compilarlo para ver el resultado — no hay "vista previa en vivo" — pero sigue siendo el estándar de facto en física, matemáticas e ingeniería para publicaciones académicas.

```latex
\documentclass{article}
\title{LaTeX Example}
\author{John Doe}
\begin{document}
\maketitle
\section{Introduction}
This is a paragraph in LaTeX.
\end{document}
```

Y por último, el que hoy domina el intercambio de datos en la Web: **JSON** (*JavaScript Object Notation*). Técnicamente JSON no es un lenguaje de marcas en el sentido estricto — no usa etiquetas de apertura y cierre, sino pares clave-valor —, pero cumple exactamente la misma función que XML (describir datos de forma estructurada e independiente de la plataforma) con una sintaxis mucho más ligera y que además coincide con la forma en que JavaScript representa objetos de forma nativa. Esa comodidad es la razón por la que, desde mediados de la década de 2010, JSON desplazó a XML como formato por defecto en la inmensa mayoría de las APIs REST que vas a consumir en la UT5.

```json
{
  "title": "JSON Example",
  "author": "John Doe",
  "published": true
}
```

## ¿Cómo sabemos si un documento está bien escrito?

Cuando defines tu propio vocabulario de etiquetas en XML, o tu propia estructura de datos en JSON, surge una pregunta inevitable: ¿cómo se asegura alguien de que un documento cumple el formato esperado antes de procesarlo? Aquí aparecen dos conceptos que verás con detalle en la UT5, pero que conviene que tengas en la cabeza desde ahora:

Un documento está **bien formado** (*well-formed*) cuando respeta las reglas de sintaxis del lenguaje — cada etiqueta que se abre se cierra, los atributos van entre comillas, no hay caracteres sueltos donde no toca. Es una condición puramente sintáctica, independiente del contenido.

Un documento es **válido** cuando, además de estar bien formado, cumple una estructura concreta que tú has definido de antemano: que el elemento `<libro>` tenga siempre un `<titulo>` y un `<precio>`, que el precio sea siempre un número. Para comprobar esto no basta con leer el documento; hace falta compararlo contra un **esquema** que describe las reglas — un DTD o un XML Schema en el mundo XML, un JSON Schema en el mundo JSON. Este mecanismo de definir reglas y validar contra ellas es exactamente lo que vas a construir en la UT5.1, y es una de las ventajas más importantes de trabajar con lenguajes de marcas frente a, por ejemplo, un fichero de texto plano sin ninguna estructura: puedes detectar automáticamente si los datos que has recibido son los que esperabas, antes de que rompan tu aplicación.

## Cuadro resumen comparativo

| Lenguaje | Propósito | Basado en | Dónde lo vas a encontrar hoy | Sintaxis | Ejemplo |
|---|---|---|---|---|---|
| GML | Estructurar documentos para impresión | — | Interés histórico | Básico | `:title.General Markup` |
| SGML | Definir otros lenguajes de marcas | GML | Interés histórico (base de HTML/XML) | Complejo | `<document><title>SGML` |
| HTML | Estructurar páginas web | SGML | Toda la Web | Etiquetas predefinidas | `<html><body><h1>` |
| XML | Estructurar e intercambiar datos | SGML | Sitemaps, ficheros de oficina, sistemas empresariales/bancarios | Etiquetas propias | `<book><title>XML Guide</title>` |
| Markdown | Escribir texto con formato ligero | — | Documentación, README, estos mismos apuntes | Ligero | `# Title` |
| LaTeX | Composición tipográfica científica | TEX | Publicaciones académicas | Rígido, se compila | `\section{Introduction}` |
| JSON | Intercambio de datos | Objetos de JS | La inmensa mayoría de APIs REST actuales | Clave-valor | `{ "title": "JSON" }` |

## Lo que te llevas de esta unidad

Un lenguaje de marcas separa contenido, estructura y presentación, y no es un lenguaje de programación: describe, no calcula. La mayoría organiza el documento como un árbol jerárquico, la misma forma que luego manipularás con el DOM. Y aunque hoy convivan HTML, XML, Markdown y JSON, cada uno ha sobrevivido o ha sido desplazado según lo bien que resolviera un problema concreto — algo que conviene recordar la próxima vez que tengas que elegir un formato para tus propios datos.
