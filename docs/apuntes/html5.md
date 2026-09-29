---
hide:
  - navigation
---

# UT2 Introducción a HTML5

En la UT1 viste que HTML es una de las muchas concreciones posibles de la idea de "lenguaje de marcas", con la particularidad de que su vocabulario de etiquetas está cerrado por el estándar. Ahora toca conocer ese vocabulario en profundidad, y la versión que vas a usar durante todo el módulo es **HTML5**, la que gobierna prácticamente toda la Web actual.

## De HTML a HTML5

HTML nació con Tim Berners-Lee a principios de los 90 con un puñado de etiquetas: títulos, párrafos y poco más. Las versiones siguientes (HTML 3.2, HTML 4.01) fueron añadiendo tablas, formularios y estilos, pero seguían pensadas para documentos, no para aplicaciones. Cuando la Web empezó a necesitar vídeo, audio y contenido interactivo, la solución habitual era tirar de plugins como Flash, algo lento, poco accesible y dependiente de software de terceros.

HTML5, desarrollado por el W3C y publicado como recomendación en 2014 (aunque en uso desde bastante antes), resuelve ese problema incorporando de forma nativa lo que antes requería un plugin: reproducción de audio y vídeo, dibujo con `<canvas>`, geolocalización, almacenamiento local... y, sobre todo, un conjunto de etiquetas semánticas que describen la función de cada bloque de contenido, no solo su aspecto. Esa combinación (multimedia nativo más semántica) es la que define a HTML5 frente a sus predecesores.

## La estructura de un documento HTML5

Todo documento HTML5 empieza con una declaración de tipo (`<!DOCTYPE html>`) que le dice al navegador "interpreta esto como HTML5, no como una versión antigua". A partir de ahí, el documento se organiza en dos grandes bloques: un `<head>` con información sobre el documento que no se muestra directamente, y un `<body>` con el contenido que sí ve la persona usuaria.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer documento HTML5</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es un documento básico en HTML5.</p>
  </body>
</html>
```

El atributo `lang="es"` en `<html>` no es decorativo: le dice a los lectores de pantalla en qué idioma pronunciar el contenido y ayuda a los buscadores a servir la página a la audiencia correcta.

## La cabecera: metadatos que no se ven

Dentro de `<head>` no hay contenido visible, sino información sobre el documento. `<meta charset="UTF-8">` fija la codificación de caracteres (con eso te aseguras de que las tildes y la "ñ" se vean bien en cualquier navegador). `<meta name="viewport">` controla cómo se escala la página en pantallas pequeñas, y es imprescindible para que el diseño responsive que verás en la UT3 funcione. `<title>` define el texto que aparece en la pestaña del navegador y en los resultados de búsqueda. Y `<link rel="stylesheet" href="...">` es la forma habitual de conectar una hoja de estilos externa, algo que retomarás en cuanto empieces con CSS.

## Agrupar contenido: de `<div>` a las etiquetas semánticas

Durante años, la forma de organizar una página era anidar `<div>` dentro de `<div>`, sin que el código dijera nada sobre qué era cada bloque. HTML5 introduce etiquetas que sí lo dicen:

- `<header>`: la cabecera de una página o de una sección (no confundir con `<head>`, que va dentro de `<html>` y no se ve).
- `<nav>`: el bloque de navegación principal.
- `<main>`: el contenido principal de la página (debería haber solo uno por documento).
- `<article>`: contenido independiente y reutilizable, como una entrada de blog o una noticia.
- `<section>`: un bloque temático dentro de un `<article>` o de la página, normalmente con su propio título.
- `<aside>`: contenido relacionado pero secundario, como una barra lateral.
- `<footer>`: el pie de una página o de una sección.

`<div>` no ha desaparecido: sigue siendo el contenedor genérico que usas cuando necesitas agrupar elementos solo por motivos de estilo o de JavaScript, sin que ese grupo tenga un significado propio. La regla práctica es sencilla: si existe una etiqueta semántica que describe lo que estás agrupando, úsala; si no, usa `<div>`.

Esto no es un capricho estético. Un lector de pantalla anuncia "navegación" al llegar a un `<nav>` y permite saltárselo, cosa que no puede hacer con un `<div class="nav">`. Y un buscador entiende mejor de qué trata tu página cuando el contenido relevante está dentro de un `<article>` en lugar de perdido entre `<div>` sin etiquetar.

## Texto, enlaces y multimedia

Para el texto normal usas `<h1>` a `<h6>` para títulos (en orden de importancia, sin saltarte niveles) y `<p>` para párrafos. Dentro de un párrafo, `<strong>` marca importancia real (no solo negrita visual) y `<em>` marca énfasis (no solo cursiva); si solo quieres cambiar el aspecto sin dar significado, están `<b>` e `<i>`, pero úsalas con moderación.

Los enlaces se construyen con `<a href="...">`, y las imágenes con `<img src="..." alt="...">`. El atributo `alt` no es opcional: es lo que lee un lector de pantalla y lo que se muestra si la imagen no carga.

HTML5 trajo también soporte nativo para audio y vídeo, sin depender de ningún plugin:

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta video.
</video>
```

## Tablas: organizar datos, no maquetar

Antes de que existiera CSS, era habitual usar tablas para maquetar páginas enteras. Hoy eso está desaconsejado: una tabla se reserva para datos tabulares reales, filas y columnas con una relación entre sí.

```html
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Juan</td>
      <td>25</td>
      <td>Madrid</td>
    </tr>
    <tr>
      <td>Ana</td>
      <td>30</td>
      <td>Barcelona</td>
    </tr>
  </tbody>
</table>
```

`<thead>` agrupa la cabecera y `<tbody>` el cuerpo; dentro de cada fila (`<tr>`), `<th>` marca una celda de encabezado y `<td>` una celda de datos. Cuando una celda necesita ocupar varias columnas o varias filas, se usan los atributos `colspan` y `rowspan`.

## Formularios: la puerta de entrada de datos

Un formulario es la forma que tiene una página de recibir información de la persona usuaria. `<form>` es el contenedor; dentro van los campos, cada uno con su `<label>` asociado para que quede claro qué se está pidiendo:

```html
<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Correo:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Enviar</button>
</form>
```

El atributo `type` de `<input>` cambia por completo el comportamiento del campo: `email` valida que el texto tenga forma de correo, `number` restringe a valores numéricos, `date` abre un selector de fecha. Esa validación básica (`required`, `type`, `pattern`) la hace el propio navegador, sin una sola línea de JavaScript, aunque en la UT3 verás cómo reforzarla con CSS y más adelante con JavaScript.

## El árbol DOM: cómo ve el navegador tu HTML

En la UT1 viste que los documentos marcados se organizan como árboles. Cuando el navegador carga un documento HTML, hace exactamente eso: lee las etiquetas y construye una estructura en memoria llamada **DOM** (*Document Object Model*), donde cada etiqueta se convierte en un nodo y las relaciones de anidamiento se convierten en relaciones de padre e hijo.

```text
html
├── head
│   ├── meta
│   └── title
└── body
    ├── h1
    └── p
```

Ese árbol no es solo una representación interna: es lo que ves renderizado en la pantalla, y es también la estructura que CSS recorre para decidir cómo pintar cada elemento y que JavaScript recorrerá y modificará a partir de la UT4, con métodos como `document.querySelector()`. Cuando en el futuro selecciones un elemento por su etiqueta, su clase o su id, en realidad le estarás pidiendo al navegador que busque un nodo concreto dentro de este mismo árbol.

Por eso escribir HTML bien anidado y bien estructurado no es solo una cuestión de estilo: cuanto más claro sea el árbol que generas, más fácil será seleccionar, dar estilo y manipular cada parte de tu página más adelante.

## Validar tu HTML

Un documento HTML puede tener errores de sintaxis (una etiqueta sin cerrar, un atributo mal escrito) y aun así el navegador lo va a mostrar, porque los navegadores son muy tolerantes con el código mal formado. Eso no significa que el documento esté bien: significa que el error está oculto. El [validador del W3C](https://validator.w3.org/) comprueba tu HTML contra la especificación oficial y señala exactamente dónde está el problema. Acostumbra a pasar tu código por él antes de darlo por terminado: en este módulo, la validación es un criterio que se evalúa, no un paso opcional.

## Lo que te llevas de esta unidad

HTML5 estructura el contenido con etiquetas semánticas que describen qué es cada bloque, no solo cómo se ve, y trae soporte nativo para multimedia y formularios sin depender de plugins. El navegador convierte ese HTML en el árbol DOM, la misma estructura que vas a dar estilo con CSS en la próxima unidad y que manipularás con JavaScript más adelante.

## Recursos complementarios

- [HTML5 by Manz](https://lenguajehtml.com/html/)
- [DOM by Manz](https://lenguajejs.com/dom/)
- [Documentación de HTML (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/HTML)
- [Validador HTML del W3C](https://validator.w3.org/)

## Material de refuerzo y ampliación

Se recomienda completar el curso [Learn HTML by Building a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1) de freeCodeCamp.
