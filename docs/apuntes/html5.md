---
hide:
  - navigation
---

# UT2 Introducción a HTML5

En la UT1 viste que HTML es una de las muchas concreciones posibles de la idea de "lenguaje de marcas", con la particularidad de que su vocabulario de etiquetas está cerrado por el estándar. Ahora toca conocer ese vocabulario en profundidad, y la versión que vas a usar durante todo el módulo es **HTML5**, la que gobierna prácticamente toda la Web actual.

## De HTML a HTML5

HTML nació con Tim Berners-Lee a principios de los 90 con un puñado de etiquetas: títulos, párrafos y poco más. Las versiones siguientes (HTML 3.2, HTML 4.01) fueron añadiendo tablas, formularios y estilos, pero seguían pensadas para documentos, no para aplicaciones. Cuando la Web empezó a necesitar vídeo, audio y contenido interactivo, la solución habitual era tirar de plugins como Flash, algo lento, poco accesible y dependiente de software de terceros.

HTML5, desarrollado por el W3C y publicado como recomendación en 2014 (aunque en uso desde bastante antes), resuelve ese problema incorporando de forma nativa lo que antes requería un plugin: reproducción de audio y vídeo, dibujo con `<canvas>`, geolocalización, almacenamiento local... y, sobre todo, un conjunto de etiquetas semánticas que describen la función de cada bloque de contenido, no solo su aspecto. Esa combinación (multimedia nativo más semántica) es la que define a HTML5 frente a sus predecesores, y en la que vas a estar especialmente atento a lo largo de esta unidad: cada etiqueta que veas a partir de aquí, pregúntate qué significa, no solo qué aspecto tiene por defecto.

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

## Etiquetas semánticas de estructura: usa la que describe la función

Durante años, la forma de organizar una página era anidar `<div>` dentro de `<div>`, sin que el código dijera nada sobre qué era cada bloque. HTML5 introduce un conjunto de etiquetas de **landmark** (así las llaman las herramientas de accesibilidad) que sí lo dicen, y cada una tiene un caso de uso concreto, no intercambiable:

- **`<header>`**: la cabecera de una página o de cualquier sección dentro de ella (no confundir con `<head>`, que va dentro de `<html>` y no se ve). Puede haber varios `<header>` en un mismo documento: el de la página entera, con el logo y la navegación principal, y el de cada `<article>`, con el título y la fecha de esa pieza concreta.
- **`<nav>`**: agrupa los bloques de enlaces de navegación importantes, como el menú principal o la paginación de un listado. No todo grupo de enlaces necesita ser un `<nav>`: un puñado de enlaces sueltos en el pie de página no lo es; el menú principal del sitio, sí. Si usas más de un `<nav>` en la misma página (menú principal y migas de pan, por ejemplo), dales un `aria-label` distinto para que un lector de pantalla pueda diferenciarlos.
- **`<main>`**: envuelve el contenido principal de la página, el que la distingue de cualquier otra página del sitio. Debe haber exactamente uno por documento y no debe estar dentro de un `<article>`, `<aside>`, `<header>`, `<footer>` o `<nav>`. Es también el destino habitual de un enlace "saltar al contenido" para personas que navegan con teclado.
- **`<article>`**: contenido que tiene sentido por sí solo, independiente del resto de la página, y que podrías extraer y publicar en otro sitio (un feed RSS, un agregador) sin que perdiera sentido. Una entrada de blog, una noticia, un comentario de usuario o una tarjeta de producto en un catálogo son buenos ejemplos.
- **`<section>`**: un bloque temático con entidad propia dentro de un `<article>` o de la página, normalmente encabezado por un `<h2>`-`<h6>` que lo identifica. A diferencia de `<article>`, una `<section>` no tiene por qué tener sentido fuera de su contexto: el bloque "Servicios" de una landing page es una `<section>`, no un `<article>`, porque no lo vas a sindicar por separado.
- **`<aside>`**: contenido relacionado con lo que le rodea pero no imprescindible para entenderlo: una barra lateral, una cita destacada extraída del texto principal, publicidad o una nota al margen.
- **`<footer>`**: el pie de una página o de una sección. El de la página suele llevar el copyright y enlaces legales; el de un `<article>` puede llevar la biografía de quien lo escribió o la fecha de publicación.

La confusión más habitual es `<article>` frente a `<section>`. La pregunta que resuelve la duda es: *¿este bloque tendría sentido si lo sacara de aquí y lo pusiera en otra página?* Si la respuesta es sí, es un `<article>`. Si solo tiene sentido como una parte de un todo mayor, es una `<section>`. Un `<article>` puede contener varias `<section>` (por ejemplo, un artículo largo dividido en apartados con su propio `<h2>` cada uno), y una `<section>` puede contener varios `<article>` (por ejemplo, la sección "Últimas noticias" de una portada, que agrupa varias noticias independientes).

`<div>` no ha desaparecido: sigue siendo el contenedor genérico que usas cuando necesitas agrupar elementos solo por motivos de estilo o de JavaScript, sin que ese grupo tenga un significado propio. La regla práctica es sencilla: si existe una etiqueta semántica que describe lo que estás agrupando, úsala; si el agrupamiento no significa nada por sí mismo (es puro layout), usa `<div>`. Abusar de `<div>` cuando existe una etiqueta más precisa se conoce como *div soup*, y es uno de los errores de HTML más comunes en código de principiante.

Esto no es un capricho estético. Un lector de pantalla anuncia "navegación" al llegar a un `<nav>` y permite saltárselo, cosa que no puede hacer con un `<div class="nav">`. Un buscador entiende mejor de qué trata tu página cuando el contenido relevante está dentro de un `<article>` en lugar de perdido entre `<div>` sin etiquetar. Y una persona que navega solo con teclado puede saltar de landmark en landmark (header, nav, main, footer) sin tener que recorrer todo el documento.

## Etiquetas semánticas de texto: casos de uso concretos

Además de las etiquetas de estructura, HTML5 tiene etiquetas semánticas más pequeñas, a nivel de frase o de bloque de contenido, cada una pensada para una situación muy concreta:

- **`<figure>` y `<figcaption>`**: agrupan una imagen, un diagrama, un fragmento de código o un vídeo junto con su leyenda. Úsalas cuando el contenido y su descripción forman una unidad que podría desplazarse de sitio sin romper el flujo del texto (a diferencia de una `<img>` suelta dentro de un párrafo).

```html
<figure>
  <img src="grafico-ventas.png" alt="Gráfico de ventas del último trimestre">
  <figcaption>Ventas del tercer trimestre, por región.</figcaption>
</figure>
```

- **`<blockquote>` y `<cite>`**: `<blockquote>` marca una cita textual larga de otra fuente (con el atributo `cite` opcional apuntando a la URL de origen), y `<cite>` marca el título de la obra o el nombre de quien se cita. No los uses para sangrar texto por motivos puramente visuales: eso es trabajo de CSS.
- **`<time>`**: marca fechas y horas de forma que una máquina pueda interpretarlas, gracias al atributo `datetime` en formato ISO. Es lo que usan los navegadores y los buscadores para entender "hace 3 días" o para mostrar un evento en el huso horario correcto.

```html
<p>Publicado el <time datetime="2026-09-29">29 de septiembre</time>.</p>
```

- **`<address>`**: información de contacto de quien es responsable del documento o del `<article>` que lo contiene (autor, empresa, dirección de correo). No es para cualquier dirección postal que aparezca en el texto, solo para la del propio autor del contenido.
- **`<details>` y `<summary>`**: contenido colapsable de serie, sin una sola línea de JavaScript. `<summary>` es la parte siempre visible (lo que se pulsa para abrir o cerrar) y todo lo demás dentro de `<details>` se muestra u oculta. Ideal para una sección de preguntas frecuentes.

```html
<details>
  <summary>¿Qué navegadores son compatibles?</summary>
  <p>Todos los navegadores modernos: Chrome, Firefox, Safari y Edge.</p>
</details>
```

- **`<mark>`**: resalta texto por su relevancia en el contexto actual, como los términos que coinciden con una búsqueda. No es un subrayador de conveniencia para llamar la atención visualmente: eso, otra vez, es CSS.
- **`<abbr>`**: marca una abreviatura o sigla, con el significado completo en el atributo `title`, que el navegador muestra como tooltip al pasar el cursor: `<abbr title="HyperText Markup Language">HTML</abbr>`.

Para el texto normal usas `<h1>` a `<h6>` para títulos (en orden de importancia, sin saltarte niveles: no pongas un `<h4>` directamente después de un `<h1>`) y `<p>` para párrafos. Dentro de un párrafo, `<strong>` marca importancia real y `<em>` marca énfasis real; ambas cambian también el aspecto (negrita y cursiva) pero ese no es su propósito, es una consecuencia. Si solo quieres cambiar el aspecto sin dar significado, están `<b>` e `<i>`, pero son la excepción, no la norma: en la inmensa mayoría de los casos, si estás tentado a usar `<b>`, lo que en realidad quieres decir es `<strong>`.

Los enlaces se construyen con `<a href="...">`, y las imágenes con `<img src="..." alt="...">`. El atributo `alt` no es opcional: es lo que lee un lector de pantalla y lo que se muestra si la imagen no carga. Si la imagen es puramente decorativa y no aporta información, se usa `alt=""` (vacío, pero presente) para que se ignore explícitamente, nunca se omite el atributo.

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

Un formulario es la forma que tiene una página de recibir información de la persona usuaria. `<form>` es el contenedor; dentro van los campos, cada uno con su `<label>` asociado para que quede claro qué se está pidiendo. La asociación entre `<label>` y campo no es cosmética: el atributo `for` del `<label>` debe coincidir con el `id` del campo, porque eso es lo que permite que al pulsar la etiqueta se active el campo, y lo que un lector de pantalla anuncia al entrar en él.

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
    ├── header
    │   └── nav
    ├── main
    │   └── article
    └── footer
```

Ese árbol no es solo una representación interna: es lo que ves renderizado en la pantalla, y es también la estructura que CSS recorre para decidir cómo pintar cada elemento y que JavaScript recorrerá y modificará a partir de la UT4, con métodos como `document.querySelector()`. Cuando en el futuro selecciones un elemento por su etiqueta, su clase o su id, en realidad le estarás pidiendo al navegador que busque un nodo concreto dentro de este mismo árbol.

Por eso escribir HTML bien anidado, bien estructurado y con la etiqueta semántica correcta en cada nodo no es solo una cuestión de estilo: cuanto más claro y significativo sea el árbol que generas, más fácil será seleccionar, dar estilo y manipular cada parte de tu página más adelante, y más accesible será para quien no la vea con los ojos.

## Buenas prácticas: errores que conviene evitar desde el principio

- **No abuses de `<div>` cuando existe una etiqueta semántica equivalente.** Antes de escribir `<div class="header">`, pregúntate si eso no es directamente un `<header>`.
- **No saltes niveles de encabezado.** La jerarquía `<h1>` → `<h2>` → `<h3>` debe ser continua; no es una herramienta de tamaño de letra, así que no elijas un nivel u otro porque "queda mejor" visualmente (eso lo resuelve CSS).
- **Un único `<h1>` y un único `<main>` por página.** Son las dos anclas que identifican, respectivamente, el tema central y el contenido principal del documento.
- **No confundas `<b>`/`<i>` con `<strong>`/`<em>`.** Los primeros cambian el aspecto; los segundos cambian el significado (y de paso, el aspecto).
- **El `alt` de una imagen se piensa, no se rellena por rellenar.** Describe lo que la imagen aporta al contenido, no repitas "imagen de..." ni dejes el nombre del fichero.
- **Un `<article>` que solo tiene sentido dentro de su página no es un `<article>`, es una `<section>`.** Aplica el criterio de "¿tendría sentido si lo sindicara aparte?" antes de elegir.
- **Valida siempre.** Un documento con errores de sintaxis puede renderizarse igualmente (los navegadores son muy tolerantes), lo que hace que el error pase desapercibido hasta que causa un problema real en CSS o JavaScript.

## Validar tu HTML

Un documento HTML puede tener errores de sintaxis (una etiqueta sin cerrar, un atributo mal escrito) y aun así el navegador lo va a mostrar, porque los navegadores son muy tolerantes con el código mal formado. Eso no significa que el documento esté bien: significa que el error está oculto. El [validador del W3C](https://validator.w3.org/) comprueba tu HTML contra la especificación oficial y señala exactamente dónde está el problema. Acostumbra a pasar tu código por él antes de darlo por terminado: en este módulo, la validación es un criterio que se evalúa, no un paso opcional.

## Lo que te llevas de esta unidad

HTML5 estructura el contenido con etiquetas semánticas que describen qué es cada bloque, no solo cómo se ve, y cada una de ellas tiene un caso de uso concreto que no es intercambiable con las demás. El navegador convierte ese HTML en el árbol DOM, la misma estructura que vas a dar estilo con CSS en la próxima unidad y que manipularás con JavaScript más adelante: cuanto más semántico y mejor estructurado sea tu HTML de partida, más fácil será todo lo que venga después.

## Recursos complementarios

- [HTML5 by Manz](https://lenguajehtml.com/html/)
- [DOM by Manz](https://lenguajejs.com/dom/)
- [Documentación de HTML (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/HTML)
- [Validador HTML del W3C](https://validator.w3.org/)

## Material de refuerzo y ampliación

Se recomienda completar el curso [Learn HTML by Building a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1) de freeCodeCamp.
