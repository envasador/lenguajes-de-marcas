# UT2 Introducción a HTML5

En la UT1 viste que HTML es una de las muchas concreciones posibles de la idea de "lenguaje de marcas", con la particularidad de que su vocabulario de etiquetas está cerrado por el estándar. Ahora toca conocer ese vocabulario en profundidad, y la versión que vas a usar durante todo el módulo es **HTML5**, la que gobierna prácticamente toda la Web actual.

## Qué hace el navegador con tu HTML

Cuando escribes una URL, el navegador le pide al servidor un documento de texto. Ese texto, en la inmensa mayoría de los casos, está escrito en HTML: *HyperText Markup Language*, lenguaje de marcas de hipertexto. El navegador lee ese texto, reconoce las etiquetas y decide cómo mostrar cada trozo de contenido según la etiqueta que lo envuelve.

Puedes comprobarlo tú mismo: en cualquier página web, pulsa `Ctrl+U` (o `Cmd+Option+U` en Mac) y verás el HTML tal cual lo recibió tu navegador, antes de que lo convierta en lo que ves en pantalla. Ese ejercicio, ver el código fuente de páginas que usas a diario, es una de las mejores formas de aprender HTML: te vas a encontrar patrones que ya conoces y otros que todavía no, y eso da pistas de qué te queda por aprender.

## Anatomía de una etiqueta

Toda la sintaxis de HTML gira en torno a la etiqueta, así que merece la pena diseccionar una:

```html
<p class="destacado">Este es el contenido.</p>
```

- **Etiqueta de apertura**: `<p class="destacado">`. El nombre (`p`) indica de qué tipo de elemento se trata; puede llevar uno o varios atributos.
- **Contenido**: `Este es el contenido.`, todo lo que queda entre la apertura y el cierre.
- **Etiqueta de cierre**: `</p>`, el mismo nombre que la de apertura, con una barra `/` delante.
- **Atributo**: `class="destacado"`, un par nombre-valor que añade información extra a la etiqueta, siempre dentro de la etiqueta de apertura y con el valor entre comillas.

No todas las etiquetas tienen contenido ni etiqueta de cierre. `<img src="foto.jpg" alt="...">` o `<br>` son **elementos vacíos** (*void elements*): no envuelven nada, así que no necesitan cerrarse. Y las etiquetas se pueden anidar unas dentro de otras (`<p>Un texto con <strong>una parte importante</strong>.</p>`), siempre que el orden de cierre respete el de apertura: la última etiqueta que abres es la primera que cierras.

## Atributos comunes en HTML

Hay un puñado de atributos que puedes usar en casi cualquier etiqueta, independientemente de cuál sea:

- **`id`**: identifica un elemento de forma única dentro de todo el documento (no puede repetirse). Sirve como destino de un enlace interno (`<a href="#seccion-2">`) y como gancho para seleccionar ese elemento concreto desde CSS o JavaScript.
- **`class`**: asigna una o varias etiquetas (separadas por espacios) a un elemento, a diferencia de `id`, puede repetirse en cuantos elementos quieras. Es el atributo que más vas a usar para dar estilo con CSS.
- **`title`**: añade un texto informativo adicional que el navegador muestra como tooltip al pasar el cursor por encima. Útil para aclarar algo sin sobrecargar el contenido visible.
- **`lang`**: indica el idioma de ese fragmento de texto, no solo el del documento entero (útil cuando citas una frase en otro idioma dentro de un párrafo).
- **`data-*`**: cualquier atributo que empiece por `data-` (por ejemplo, `data-id-producto="42"`) es un atributo personalizado tuyo, pensado para guardar información que luego leerás desde JavaScript. El navegador lo ignora a efectos de renderizado; es solo para ti.

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

Durante años, la forma de organizar una página era anidar `<div>` dentro de `<div>`, con clases que describían la función a base de nombres (`class="header"`, `class="nota-al-pie"`), pero sin que la propia etiqueta dijera nada. Así se veía una página típica antes de HTML5:

```html
<div class="articulo">
  <div class="cabecera">
    <h1>Título del artículo</h1>
  </div>
  <p>Contenido del artículo...</p>
  <div class="pie">
    <p>Publicado por Ana</p>
  </div>
</div>
```

El problema es que, para un navegador, un lector de pantalla o un buscador, todo son `<div>`: no hay forma de distinguir automáticamente la cabecera del contenido o del pie sin leer el nombre de la clase, que es solo una convención tuya, no algo que la etiqueta garantice. HTML5 sustituye esa convención por etiquetas de **landmark** (así las llaman las herramientas de accesibilidad) que llevan el significado incorporado:

```html
<article>
  <header>
    <h1>Título del artículo</h1>
  </header>
  <p>Contenido del artículo...</p>
  <footer>
    <p>Publicado por Ana</p>
  </footer>
</article>
```

Cada una de estas etiquetas tiene un caso de uso concreto, no intercambiable:

- **`<header>`**: la cabecera de una página o de cualquier sección dentro de ella (no confundir con `<head>`, que va dentro de `<html>` y no se ve). Puede haber varios `<header>` en un mismo documento: el de la página entera, con el logo y la navegación principal, y el de cada `<article>`, con el título y la fecha de esa pieza concreta.
- **`<nav>`**: agrupa los bloques de enlaces de navegación importantes, como el menú principal o la paginación de un listado. No todo grupo de enlaces necesita ser un `<nav>`: un puñado de enlaces sueltos en el pie de página no lo es; el menú principal del sitio, sí. Si usas más de un `<nav>` en la misma página (menú principal y migas de pan, por ejemplo), dales un `aria-label` distinto para que un lector de pantalla pueda diferenciarlos.
- **`<main>`**: envuelve el contenido principal de la página, el que la distingue de cualquier otra página del sitio. Debe haber exactamente uno por documento y no debe estar dentro de un `<article>`, `<aside>`, `<header>`, `<footer>` o `<nav>`. Es también el destino habitual de un enlace "saltar al contenido" para personas que navegan con teclado.
- **`<article>`**: contenido que tiene sentido por sí solo, independiente del resto de la página, y que podrías extraer y publicar en otro sitio (un feed RSS, un agregador) sin que perdiera sentido. Una entrada de blog, una noticia, un comentario de usuario o una tarjeta de producto en un catálogo son buenos ejemplos.
- **`<section>`**: un bloque temático con entidad propia dentro de un `<article>` o de la página, normalmente encabezado por un `<h2>`-`<h6>` que lo identifica. A diferencia de `<article>`, una `<section>` no tiene por qué tener sentido fuera de su contexto: el bloque "Servicios" de una landing page es una `<section>`, no un `<article>`, porque no lo vas a sindicar por separado.
- **`<aside>`**: contenido relacionado con lo que le rodea pero no imprescindible para entenderlo: una barra lateral, una cita destacada extraída del texto principal, publicidad o una nota al margen.
- **`<footer>`**: el pie de una página o de una sección. El de la página suele llevar el copyright y enlaces legales; el de un `<article>` puede llevar la biografía de quien lo escribió o la fecha de publicación.

La confusión más habitual es `<article>` frente a `<section>`. La pregunta que resuelve la duda es: *¿este bloque tendría sentido si lo sacara de aquí y lo pusiera en otra página?* Si la respuesta es sí, es un `<article>`. Si solo tiene sentido como una parte de un todo mayor, es una `<section>`. Un `<article>` puede contener varias `<section>` (por ejemplo, un artículo largo dividido en apartados con su propio `<h2>` cada uno), y una `<section>` puede contener varios `<article>` (por ejemplo, la sección "Últimas noticias" de una portada, que agrupa varias noticias independientes). Los dos anidamientos son válidos porque `<section>` forma parte del contenido que `<article>` admite, y viceversa; de hecho pueden combinarse en la misma estructura, como en esta reseña de película con sus comentarios:

```html
<article class="resena-pelicula">
  <h2>Jurassic Park</h2>

  <section class="resena-principal">
    <h3>Crítica</h3>
    <p>Los dinosaurios estaban geniales.</p>
  </section>

  <section class="comentarios">
    <h3>Comentarios de usuarios</h3>
    <article class="comentario">
      <h4>¡Demasiado terror!</h4>
      <p>Me pareció excesivamente terrorífica.</p>
    </article>
  </section>
</article>
```

Aquí el `<article>` principal (la reseña) contiene dos `<section>` (la crítica y el bloque de comentarios), y esa segunda `<section>` a su vez contiene un `<article>` (el comentario), porque un comentario de usuario tiene sentido por sí solo y podrías moverlo a otro sitio sin que perdiera significado.

`<div>` no ha desaparecido: sigue siendo el contenedor genérico que usas cuando necesitas agrupar elementos solo por motivos de estilo o de JavaScript, sin que ese grupo tenga un significado propio. La regla práctica es sencilla: si existe una etiqueta semántica que describe lo que estás agrupando, úsala; si el agrupamiento no significa nada por sí mismo (es puro layout), usa `<div>`. Abusar de `<div>` cuando existe una etiqueta más precisa se conoce como *div soup*, y es uno de los errores de HTML más comunes en código de principiante.

Esto no es un capricho estético. Un lector de pantalla anuncia "navegación" al llegar a un `<nav>` y permite saltárselo, cosa que no puede hacer con un `<div class="nav">`. Un buscador entiende mejor de qué trata tu página cuando el contenido relevante está dentro de un `<article>` en lugar de perdido entre `<div>` sin etiquetar. Y una persona que navega solo con teclado puede saltar de landmark en landmark (header, nav, main, footer) sin tener que recorrer todo el documento.

Hay un último landmark que conviene conocer porque es de los más recientes del estándar: **`<search>`**. Envuelve un formulario o un conjunto de controles cuya función es buscar o filtrar contenido, como el buscador de la cabecera de un sitio o los filtros de un catálogo. Igual que `<nav>`, no cambia nada visualmente, pero un lector de pantalla lo anuncia como zona de búsqueda y permite saltar directamente a ella.

```html
<header>
  <a href="/">Mi tienda</a>
  <search>
    <form action="/buscar">
      <label for="q">Buscar productos</label>
      <input type="search" id="q" name="q">
      <button>Buscar</button>
    </form>
  </search>
</header>
```

## Encabezados: el índice de tu documento

Las etiquetas `<h1>` a `<h6>` marcan títulos, en orden de importancia. No son seis tamaños de letra entre los que elegir el que mejor quede: son seis niveles de un índice. Si lees solo los encabezados de una página bien construida, deberías obtener algo parecido a la tabla de contenidos de un libro, y eso es exactamente lo que hacen los lectores de pantalla cuando ofrecen a la persona usuaria la lista de encabezados para saltar directamente a la parte que le interesa.

```html
<h1>Recetas de la abuela</h1>
  <h2>Primeros platos</h2>
    <h3>Gazpacho</h3>
    <h3>Salmorejo</h3>
  <h2>Postres</h2>
    <h3>Tocino de cielo</h3>
```

La sangría del ejemplo es solo para que veas la jerarquía; en tu código no hace falta. Lo que sí importa es que la jerarquía sea continua: después de un `<h1>` viene un `<h2>`, no un `<h4>`. Puedes volver a niveles superiores siempre que quieras (de un `<h3>` a un `<h2>`, como en el ejemplo), pero no saltarte niveles al bajar. Normalmente hay un único `<h1>` por página, que describe su tema central, y cada `<section>` o `<article>` arranca con el encabezado del nivel que le corresponde. Si un título te parece demasiado grande o demasiado pequeño, lo arreglarás con CSS en la UT3, nunca cambiando su nivel.

## Párrafos, listas y otros bloques de contenido

Dentro de cada zona de la página, el contenido se organiza en bloques. Manz los llama **etiquetas de agrupación**: no dicen qué papel tiene una zona entera de la página, como los landmarks, sino cómo se organiza un trozo concreto de contenido.

### Párrafos, saltos de línea y separadores

`<p>` es la unidad básica de texto: un párrafo. Nunca uses varios `<br>` seguidos para separar párrafos; si dos bloques de texto son párrafos distintos, son dos `<p>`, y la separación entre ellos la controla CSS.

`<br>` es un salto de línea **dentro** de un mismo bloque, y solo tiene sentido cuando el salto forma parte del contenido: los versos de un poema o las líneas de una dirección postal. Su pariente `<wbr>` no fuerza ningún salto: indica un punto en el que el navegador *puede* partir una palabra muy larga si no cabe, algo útil con URL o palabras compuestas interminables.

`<hr>` marca un **cambio temático** entre dos bloques de contenido, como el cambio de escena en un relato. El navegador lo dibuja como una línea horizontal, pero su significado no es "pon una línea aquí", sino "aquí cambia el tema". Si solo quieres una línea decorativa, es trabajo de CSS.

```html
<p>
  Asociación Cultural Bahía<br>
  Calle Ancha 10<br>
  11001 Cádiz
</p>
```

### Listas no ordenadas y ordenadas

Cuando tienes varios elementos del mismo tipo, uno detrás de otro, tienes una lista. HTML distingue dos tipos según si el orden importa o no. **`<ul>`** (*unordered list*) es una lista en la que el orden da igual, como los ingredientes de una receta, y el navegador la muestra con viñetas. **`<ol>`** (*ordered list*) es una lista en la que el orden forma parte del significado, como los pasos de esa misma receta, y el navegador la numera automáticamente. En ambos casos, cada elemento va dentro de un **`<li>`** (*list item*), y una lista solo puede contener `<li>` como hijos directos.

```html
<h3>Ingredientes</h3>
<ul>
  <li>1 kg de tomates maduros</li>
  <li>1 pimiento verde</li>
  <li>1 diente de ajo</li>
</ul>

<h3>Preparación</h3>
<ol>
  <li>Lava y trocea las verduras.</li>
  <li>Tritúralo todo con el aceite y la sal.</li>
  <li>Cuélalo y déjalo enfriar.</li>
</ol>
```

`<ol>` admite atributos que cambian la numeración sin que tengas que escribirla a mano: `start="5"` empieza a contar desde 5, `reversed` cuenta hacia atrás (útil para un "top 10") y `type` cambia el tipo de numeración (`a`, `A`, `i`, `I`). Las listas, además, se pueden anidar: un `<li>` puede contener otra lista completa, que es como se construyen los submenús.

Esto último es importante: **los menús de navegación son listas**. Un menú es un conjunto de enlaces del mismo tipo, así que lo habitual es marcarlo como una `<ul>` dentro de un `<nav>`. Que luego se vea en horizontal y sin viñetas es cosa de CSS.

```html
<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#programa">Programa</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
```

### Listas de descripción

Hay un tercer tipo de lista, menos conocido, para pares de término y descripción: **`<dl>`** (*description list*). Dentro, cada **`<dt>`** es un término y el **`<dd>`** que le sigue es su descripción. Es la estructura de un glosario, pero también de cualquier conjunto de pares clave-valor: la ficha técnica de una película, las características de un producto o los metadatos de una publicación. Un término puede tener varias descripciones, y varios términos pueden compartir una.

```html
<dl>
  <dt>Dirección</dt>
  <dd>Lucía Ferrer</dd>
  <dt>Duración</dt>
  <dd>14 minutos</dd>
  <dt>Género</dt>
  <dd>Drama</dd>
  <dd>Documental</dd>
</dl>
```

### Citas largas y texto preformateado

**`<blockquote>`** marca una cita textual larga, de uno o varios párrafos, extraída de otra fuente. Puede llevar el atributo `cite` con la URL de origen, aunque el navegador no lo muestra. No lo uses para sangrar texto por motivos visuales: eso es trabajo de CSS.

```html
<blockquote cite="https://www.w3.org/standards/">
  <p>Los estándares web son las reglas que hacen que la Web funcione para todo el mundo.</p>
</blockquote>
<p>— Fuente: <cite>W3C</cite></p>
```

**`<pre>`** (*preformatted text*) respeta los espacios y saltos de línea tal cual los escribes, y muestra el texto con una fuente de ancho fijo. En el resto de etiquetas, el navegador colapsa todos los espacios y saltos consecutivos en un único espacio; en `<pre>`, no. Por eso es la etiqueta que se usa para mostrar bloques de código o arte ASCII, normalmente con un `<code>` dentro para indicar que ese texto es código.

```html
<pre><code>&lt;ul&gt;
  &lt;li&gt;Elemento&lt;/li&gt;
&lt;/ul&gt;</code></pre>
```

Fíjate en que, para mostrar etiquetas HTML como texto, hay que escribir `&lt;` y `&gt;` en lugar de `<` y `>`; si no, el navegador intentaría interpretarlas. Lo verás en detalle en el apartado de caracteres especiales.

## Etiquetas semánticas de texto: casos de uso concretos

Además de las etiquetas de estructura y de agrupación, HTML5 tiene etiquetas semánticas más pequeñas, a nivel de frase, que van dentro de un párrafo. Cada una está pensada para una situación muy concreta, y la pregunta para elegir entre ellas es siempre la misma: ¿qué **significa** este fragmento de texto?

### Importancia, énfasis y aspecto

Dentro de un párrafo, `<strong>` marca importancia real y `<em>` marca énfasis real; ambas cambian también el aspecto (negrita y cursiva) pero ese no es su propósito, es una consecuencia. La diferencia entre las dos es sutil: `<strong>` indica que algo es importante, grave o urgente ("**No desconectes el equipo durante la actualización**"), mientras que `<em>` cambia la entonación de la frase, como cuando lo dices en voz alta cargando la voz en una palabra ("Yo no he dicho que *tú* lo hicieras").

Si solo quieres cambiar el aspecto sin dar significado, están `<b>` e `<i>`, pero son la excepción, no la norma: en la inmensa mayoría de los casos, si estás tentado a usar `<b>`, lo que en realidad quieres decir es `<strong>`. `<i>` tiene un uso legítimo para términos en otro idioma, nombres científicos o títulos de barcos (`<i lang="la">Homo sapiens</i>`), es decir, texto que tradicionalmente se escribe en cursiva sin que eso implique énfasis. `<u>`, que subraya, se reserva para anotaciones como marcar una palabra mal escrita; como un subrayado se confunde fácilmente con un enlace, úsalo con mucha moderación.

### Citas en línea y fuentes

Para una cita corta dentro de una frase está **`<q>`**, que el navegador muestra automáticamente entre comillas (así que no las escribas tú). **`<cite>`** marca el título de una obra: un libro, una película, una canción, un artículo. Según el estándar actual, `<cite>` es para el título de la obra y no para el nombre de una persona, aunque en la práctica verás ambos usos.

```html
<p>Como dice Ian Malcolm en <cite>Jurassic Park</cite>, <q>la vida se abre camino</q>.</p>
```

### Siglas y definiciones

**`<abbr>`** marca una abreviatura o sigla, con el significado completo en el atributo `title`, que el navegador muestra como tooltip al pasar el cursor: `<abbr title="HyperText Markup Language">HTML</abbr>`.

**`<dfn>`** marca el término que se está definiendo en ese mismo párrafo, el momento en que un concepto aparece por primera vez y se explica. Es una etiqueta útil en apuntes y documentación técnica, y se puede combinar con `<abbr>` cuando el término definido es una sigla.

```html
<p>El <dfn><abbr title="Document Object Model">DOM</abbr></dfn> es la representación en memoria que el navegador construye a partir de tu HTML.</p>
```

### Resaltado y letra pequeña

**`<mark>`** resalta texto por su relevancia en el contexto actual, como los términos que coinciden con una búsqueda. No es un subrayador de conveniencia para llamar la atención visualmente: eso, otra vez, es CSS.

**`<small>`** no significa "letra más pequeña", sino **letra pequeña** en el sentido legal: avisos, condiciones, información de copyright o atribuciones. Es la etiqueta natural para el texto legal del pie de página.

```html
<footer>
  <p><small>© 2026 IES Rafael Alberti. Contenido bajo licencia CC BY-SA 4.0.</small></p>
</footer>
```

### Cambios en el contenido

A veces necesitas mostrar que un texto ha cambiado. **`<del>`** marca texto eliminado del documento e **`<ins>`** marca texto añadido; ambas admiten `datetime` para indicar cuándo se hizo el cambio. Son las etiquetas de un historial de cambios o de una errata corregida.

**`<s>`** es diferente: marca algo que ya no es correcto o relevante, pero que se mantiene visible por contexto. El ejemplo clásico es un precio rebajado: el precio original no se ha "eliminado" del documento, sencillamente ya no es el que se aplica.

```html
<p>Precio: <s>49,99 €</s> 34,99 €</p>
<p>La entrega es el <del datetime="2026-10-01">lunes</del> <ins datetime="2026-10-01">martes</ins>.</p>
```

### Superíndices y subíndices

**`<sup>`** coloca texto como superíndice y **`<sub>`** como subíndice. Úsalos cuando la posición forma parte del significado: fórmulas químicas, exponentes, unidades o abreviaturas ordinales. No los uses para subir o bajar texto por estética.

```html
<p>El agua es H<sub>2</sub>O y una habitación de 3 × 4 m mide 12 m<sup>2</sup>.</p>
```

### Fechas y valores para máquinas

**`<time>`** marca fechas y horas de forma que una máquina pueda interpretarlas, gracias al atributo `datetime` en formato ISO. Es lo que usan los navegadores y los buscadores para entender "hace 3 días" o para mostrar un evento en el huso horario correcto. El formato es año-mes-día para fechas (`2026-09-29`), horas-minutos para horas (`18:30`) y ambas cosas separadas por una `T` cuando necesitas fecha y hora (`2026-11-12T18:00`).

```html
<p>Publicado el <time datetime="2026-09-29">29 de septiembre</time>.</p>
<p>La sesión empieza el <time datetime="2026-11-12T18:00">jueves 12 a las seis de la tarde</time>.</p>
```

**`<data>`** hace lo mismo que `<time>` para cualquier otro tipo de valor: el contenido es la versión legible para personas y el atributo `value` es la versión para máquinas, como el código de un producto o un valor numérico.

```html
<p>Producto: <data value="ISBN-978-84-1234-567-8">Manual de HTML5</data></p>
```

### Código, teclado y variables

Para texto técnico hay cuatro etiquetas que conviene no confundir. **`<code>`** marca un fragmento de código fuente, como un nombre de etiqueta, de propiedad o de función. **`<kbd>`** marca algo que la persona usuaria debe teclear, ya sea una tecla, una combinación o un comando. **`<samp>`** marca la salida que muestra un programa, como un mensaje de error. **`<var>`** marca una variable, en una fórmula matemática o en un fragmento de código.

```html
<p>Pulsa <kbd>Ctrl</kbd> + <kbd>U</kbd> para ver el código fuente.</p>
<p>Si escribes <code>&lt;p&gt;</code> sin cerrar, el validador mostrará <samp>Error: Unclosed element p</samp>.</p>
<p>El área de un rectángulo es <var>b</var> × <var>h</var>.</p>
```

### Datos de contacto

**`<address>`** marca la información de contacto de quien es responsable del documento o del `<article>` que lo contiene: autor, empresa, dirección de correo. No es para cualquier dirección postal que aparezca en el texto, solo para la del propio autor del contenido. Suele ir dentro del `<footer>` de la página o del artículo.

```html
<footer>
  <address>
    Escrito por Ana López · <a href="mailto:ana@ejemplo.com">ana@ejemplo.com</a>
  </address>
</footer>
```

### span: el contenedor genérico en línea

**`<span>`** es a las etiquetas de texto lo que `<div>` es a las de estructura: un contenedor que no significa nada. Lo usas cuando necesitas envolver un trozo de texto dentro de un párrafo para darle estilo o para seleccionarlo desde JavaScript, y ninguna etiqueta semántica describe lo que es. La regla es la misma que con `<div>`: si hay una etiqueta que describe el fragmento, usa esa; si no, `<span>`.

```html
<p>Estado del pedido: <span class="estado-enviado">Enviado</span></p>
```

### Elementos de bloque y elementos en línea

Habrás notado que algunas etiquetas ocupan todo el ancho disponible y empiezan en una línea nueva (`<p>`, `<h1>`, `<ul>`, `<div>`, `<section>`), mientras que otras se colocan dentro del texto, una detrás de otra, sin romper la línea (`<strong>`, `<a>`, `<span>`, `<code>`). Las primeras se suelen llamar **elementos de bloque** y las segundas **elementos en línea**. Esa diferencia es en realidad un comportamiento visual por defecto que CSS puede cambiar, como verás en la UT3, pero sirve para recordar una regla de anidamiento: un elemento en línea puede ir dentro de un bloque, pero no al revés. Un `<p>` dentro de un `<span>` es un error, y un `<div>` dentro de un `<p>`, también.

## Caracteres especiales y comentarios

Algunos caracteres tienen un significado especial en HTML y no se pueden escribir directamente en el contenido. El ejemplo obvio es `<`: si lo escribes, el navegador cree que empieza una etiqueta. Para estos casos existen las **entidades HTML**, códigos que empiezan por `&` y terminan en `;` y que el navegador sustituye por el carácter correspondiente.

| Entidad | Carácter | Uso habitual |
|---|---|---|
| `&lt;` | < | Mostrar etiquetas como texto |
| `&gt;` | > | Mostrar etiquetas como texto |
| `&amp;` | & | El propio símbolo *ampersand* |
| `&quot;` | " | Comillas dentro de un atributo |
| `&nbsp;` | (espacio) | Espacio que impide el salto de línea, como en "10&nbsp;km" |
| `&copy;` | © | Copyright |

Como trabajas con codificación UTF-8, la mayoría de caracteres (tildes, eñe, ©, €) puedes escribirlos directamente sin entidad. Las imprescindibles son `&lt;`, `&gt;` y `&amp;`, y `&nbsp;` cuando necesites que dos palabras no se separen nunca en líneas distintas.

Los **comentarios** se escriben entre `<!--` y `-->`. El navegador los ignora por completo, pero cualquiera puede verlos con `Ctrl+U`, así que nunca pongas en ellos nada que no quieras que se lea. Son útiles para dejar notas sobre la estructura o para desactivar temporalmente un trozo de código.

```html
<!-- Bloque de últimas noticias: se rellenará desde JavaScript en la UT4 -->
<section id="noticias">
  <h2>Últimas noticias</h2>
</section>
```

## Enlaces: lo que convierte un documento en hipertexto

Los enlaces son la razón de que HTML se llame *HyperText*: lo que conecta un documento con otro. Se construyen con `<a>` (*anchor*, ancla) y su atributo `href` indica el destino. El contenido de la etiqueta es el texto en el que se pulsa, y ese texto tiene que describir adónde lleva el enlace. "Pincha aquí" o "más información" no dicen nada fuera de contexto, y un lector de pantalla que ofrece la lista de enlaces de una página mostraría diez "pincha aquí" idénticos.

```html
<!-- Mal -->
<p>Para ver el horario, <a href="horario.html">pincha aquí</a>.</p>

<!-- Bien -->
<p>Consulta el <a href="horario.html">horario completo del curso</a>.</p>
```

### Rutas absolutas y relativas

El valor de `href` (y de `src` en imágenes, vídeos o scripts) puede ser una ruta absoluta o relativa. Una **ruta absoluta** incluye el protocolo y el dominio completo (`https://developer.mozilla.org/es/`) y se usa para enlazar a otros sitios. Una **ruta relativa** se calcula desde la ubicación del documento actual y se usa para enlazar a ficheros de tu propio proyecto.

Imagina este proyecto:

```text
mi-web/
├── index.html
├── contacto.html
├── img/
│   └── logo.png
└── blog/
    └── primera-entrada.html
```

Desde `index.html`, la ruta a la página de contacto es `contacto.html`, la del logo es `img/logo.png` y la de la entrada es `blog/primera-entrada.html`. Pero desde `blog/primera-entrada.html`, para volver a la portada tienes que subir un nivel con `../`: la ruta es `../index.html`, y la del logo es `../img/logo.png`. La mayoría de imágenes rotas y enlaces que no funcionan en un proyecto de clase se deben a una ruta relativa mal calculada, así que acostúmbrate a pensar siempre desde qué carpeta estás enlazando. Fíjate también en que las rutas distinguen mayúsculas de minúsculas en un servidor real: `Logo.png` y `logo.png` son ficheros distintos, aunque en tu ordenador con Windows parezca que funcionan igual.

### Enlaces internos

Un enlace puede llevar a un punto concreto de la misma página si apunta al `id` de un elemento precedido de `#`. Es el mecanismo de los índices, de los menús de las páginas de una sola pantalla y de los enlaces "Saltar al contenido" que permiten a quien navega con teclado ir directamente al `<main>` sin recorrer todo el menú.

```html
<a href="#contenido">Saltar al contenido</a>
<nav>...</nav>
<main id="contenido">
  ...
</main>
```

También puedes combinar ambas cosas y enlazar a un punto concreto de otra página: `contacto.html#horario`.

### Atributos útiles de los enlaces

El atributo **`target="_blank"`** abre el enlace en una pestaña nueva. Úsalo con moderación, porque le quita a la persona usuaria la decisión de dónde abrir el enlace, y reserva su uso para casos con sentido, como un documento externo de consulta mientras rellena un formulario. Cuando lo uses con sitios externos, acompáñalo de `rel="noopener noreferrer"`, que impide que la página de destino pueda manipular la tuya; los navegadores actuales ya aplican `noopener` por defecto, pero es una buena costumbre dejarlo explícito.

El atributo `href` no solo admite páginas web. Con **`mailto:`** abre el programa de correo con la dirección ya escrita, y con **`tel:`** marca un número de teléfono al pulsarlo desde el móvil. El atributo **`download`** indica que el enlace descarga el fichero en lugar de abrirlo en el navegador, y opcionalmente le da un nombre (solo funciona con ficheros de tu propio sitio).

```html
<a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer">Documentación de MDN</a>
<a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
<a href="tel:+34956000000">956 00 00 00</a>
<a href="docs/temario.pdf" download="temario-lmsgi.pdf">Descargar el temario en PDF</a>
```

## Imágenes y multimedia

### Imágenes

Las imágenes se insertan con `<img src="..." alt="...">`, un elemento vacío. El atributo `alt` no es opcional: es lo que lee un lector de pantalla y lo que se muestra si la imagen no carga. Si la imagen es puramente decorativa y no aporta información, se usa `alt=""` (vacío, pero presente) para que se ignore explícitamente, nunca se omite el atributo.

Hay otros tres atributos que conviene poner casi siempre. **`width`** y **`height`** indican las dimensiones originales de la imagen en píxeles; no sirven para cambiar su tamaño (eso es CSS), sino para que el navegador reserve el hueco antes de que la imagen termine de descargarse y el resto de la página no dé saltos mientras carga. **`loading="lazy"`** pide al navegador que no descargue la imagen hasta que la persona usuaria se acerque a ella al hacer scroll, lo que acelera mucho la carga de páginas con muchas imágenes. No lo uses en la imagen principal que se ve nada más abrir la página, porque retrasaría justo la que más importa.

```html
<img src="img/sala-principal.webp" alt="Público llenando la sala principal durante la gala"
     width="1200" height="675" loading="lazy">
```

El formato de la imagen también importa. **JPG** es adecuado para fotografías, **PNG** para imágenes con transparencias o con zonas de color plano y texto, **SVG** para logotipos e iconos (es un formato vectorial, y de hecho es un lenguaje de marcas basado en XML) y **WebP** y **AVIF** son los formatos modernos que ocupan bastante menos que JPG y PNG con la misma calidad. **GIF** apenas tiene sentido hoy salvo para animaciones muy sencillas.

### figure y figcaption

**`<figure>`** y **`<figcaption>`** agrupan una imagen, un diagrama, un fragmento de código o un vídeo junto con su leyenda. Úsalas cuando el contenido y su descripción forman una unidad que podría desplazarse de sitio sin romper el flujo del texto (a diferencia de una `<img>` suelta dentro de un párrafo).

```html
<figure>
  <img src="grafico-ventas.png" alt="Gráfico de barras: el sur duplica las ventas del norte" width="800" height="450">
  <figcaption>Ventas del tercer trimestre, por región.</figcaption>
</figure>
```

El `alt` y el `<figcaption>` no son lo mismo y no deben repetirse: el `alt` sustituye a la imagen para quien no puede verla, mientras que el `<figcaption>` es un pie que acompaña a la imagen para todo el mundo.

### Imágenes adaptables: srcset y picture

Una imagen de 2000 píxeles de ancho es perfecta para un monitor grande, pero en un móvil supone descargar muchos más datos de los necesarios. El atributo **`srcset`** te permite ofrecer varias versiones de la misma imagen para que el navegador elija la más adecuada según el tamaño de la pantalla, y **`sizes`** le dice qué ancho ocupará la imagen en la página.

```html
<img src="foto-800.jpg"
     srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Puerta de Tierra al atardecer" width="800" height="533">
```

`400w` significa "esta versión mide 400 píxeles de ancho". El `src` sigue siendo obligatorio como opción por defecto.

Cuando no quieres la misma imagen en distintos tamaños sino imágenes distintas o formatos distintos, entra en juego **`<picture>`**. Dentro lleva varios `<source>` con condiciones y, al final, un `<img>` obligatorio que sirve como opción por defecto y que es el que lleva el `alt`. El navegador usa el primer `<source>` cuya condición cumple.

```html
<picture>
  <source srcset="cartel.avif" type="image/avif">
  <source srcset="cartel.webp" type="image/webp">
  <img src="cartel.jpg" alt="Cartel del festival: una claqueta sobre la bahía" width="600" height="850">
</picture>
```

En este ejemplo, un navegador compatible con AVIF descarga esa versión, que es la más ligera; si no, prueba con WebP, y si tampoco, se queda con el JPG. Con el atributo `media` en lugar de `type` puedes servir, por ejemplo, un recorte vertical de la imagen en móviles y uno horizontal en escritorio.

### Audio y vídeo

HTML5 trajo soporte nativo para audio y vídeo, sin depender de ningún plugin. Las dos etiquetas funcionan igual: pueden llevar el fichero directamente en `src` o, mejor, varios `<source>` en distintos formatos para que el navegador elija el primero que sepa reproducir. El texto que pongas dentro solo se muestra en navegadores que no soporten la etiqueta.

```html
<video controls width="640" height="360" poster="img/portada-corto.jpg">
  <source src="video/corto.webm" type="video/webm">
  <source src="video/corto.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta video.
</video>

<audio controls>
  <source src="audio/entrevista.ogg" type="audio/ogg">
  <source src="audio/entrevista.mp3" type="audio/mpeg">
  Tu navegador no soporta la etiqueta audio.
</audio>
```

El atributo **`controls`** muestra los controles de reproducción del navegador; sin él, la persona usuaria no tiene forma de reproducir ni de pausar. **`poster`** indica la imagen que se ve antes de que el vídeo empiece. **`loop`** lo repite al terminar y **`muted`** lo silencia. **`autoplay`** lo reproduce al cargar la página, pero los navegadores bloquean la reproducción automática con sonido, así que en la práctica solo funciona junto con `muted`; y aun así, piensa si de verdad es necesario, porque un vídeo que se mueve solo distrae y consume datos. **`preload`** indica cuánto descargar antes de que se pulse reproducir (`none`, `metadata` o `auto`).

En cuanto a formatos, **MP4** (con códec H.264) es el más compatible para vídeo y **WebM** suele ocupar menos. Para audio, **MP3** es compatible con todo, y **OGG** y **AAC** son alternativas habituales.

### Subtítulos con track

Un vídeo con diálogos necesita subtítulos para ser accesible a personas sordas o para quien lo ve sin sonido. La etiqueta **`<track>`**, dentro de `<video>`, enlaza un fichero de subtítulos en formato **WebVTT** (`.vtt`), un fichero de texto plano con los tiempos y los textos. `kind` indica el tipo de pista (`subtitles`, `captions`, `descriptions`...), `srclang` el idioma, `label` el nombre que se muestra en el menú del reproductor y `default` la pista activada por defecto.

```html
<video controls>
  <source src="video/corto.mp4" type="video/mp4">
  <track src="subs/corto-es.vtt" kind="subtitles" srclang="es" label="Español" default>
  <track src="subs/corto-en.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

```text
WEBVTT

00:00:01.000 --> 00:00:04.000
Cada madrugada vuelvo al mismo muelle.

00:00:05.500 --> 00:00:08.000
El mar ya no me reconoce.
```

### Contenido externo con iframe

**`<iframe>`** incrusta una página web completa dentro de la tuya, en un recuadro. Es lo que usan los botones de "Insertar" de YouTube, Google Maps o una presentación compartida: te dan un `<iframe>` listo para pegar. Lleva siempre un atributo `title` que describa qué contiene, porque es lo único que un lector de pantalla anuncia al llegar a él, y conviene añadir `loading="lazy"` igual que en las imágenes.

```html
<iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO"
        title="Tráiler oficial del festival" width="560" height="315"
        loading="lazy" allowfullscreen></iframe>
```

Ten en cuenta que estás cargando una página ajena dentro de la tuya, con su propio código. Solo incrusta contenido de fuentes de confianza, y si necesitas limitar lo que puede hacer, el atributo `sandbox` le retira permisos (ejecutar scripts, enviar formularios, abrir ventanas). Además, muchos sitios, como los bancos o las redes sociales, impiden que se les incruste en un `<iframe>` precisamente por seguridad.

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

`<thead>` agrupa la cabecera y `<tbody>` el cuerpo; dentro de cada fila (`<tr>`), `<th>` marca una celda de encabezado y `<td>` una celda de datos.

### Título, pie y encabezados de fila

Una tabla completa tiene algunas piezas más. **`<caption>`** es el título de la tabla, y va justo después de abrir `<table>`: es lo primero que anuncia un lector de pantalla y lo que permite saber de qué trata la tabla sin leerla entera. **`<tfoot>`** agrupa las filas de resumen, como los totales, y va después de `<tbody>`.

Los encabezados no tienen por qué estar solo arriba. Cuando la primera celda de cada fila identifica esa fila, también es un `<th>`. El atributo **`scope`** aclara si un encabezado se aplica a su columna (`scope="col"`) o a su fila (`scope="row"`), lo que permite a un lector de pantalla anunciar, al llegar a una celda, a qué fila y columna pertenece.

```html
<table>
  <caption>Notas del primer trimestre</caption>
  <thead>
    <tr>
      <th scope="col">Alumno</th>
      <th scope="col">HTML</th>
      <th scope="col">CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lucía</th>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">Marcos</th>
      <td>6</td>
      <td>7</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Media</th>
      <td>7</td>
      <td>8</td>
    </tr>
  </tfoot>
</table>
```

### Celdas que ocupan varias filas o columnas

Cuando una celda necesita ocupar varias columnas se usa **`colspan`**, y cuando necesita ocupar varias filas, **`rowspan`**, en ambos casos con el número de celdas que abarca. Lo que suele despistar es que, al combinar celdas, **las filas afectadas tienen menos celdas escritas**: si una celda de la primera fila ocupa dos filas con `rowspan="2"`, en la fila siguiente no escribes esa celda, porque su hueco ya está ocupado.

```html
<table>
  <caption>Horario del martes</caption>
  <thead>
    <tr>
      <th scope="col">Hora</th>
      <th scope="col">Módulo</th>
      <th scope="col">Aula</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8:15</td>
      <td rowspan="2">Lenguajes de Marcas</td>
      <td rowspan="2">Aula 12</td>
    </tr>
    <tr>
      <td>9:15</td>
      <!-- Sin celdas de módulo ni aula: las ocupan las de la fila anterior -->
    </tr>
    <tr>
      <td>10:15</td>
      <td colspan="2">Recreo</td>
    </tr>
  </tbody>
</table>
```

Un buen truco para no perderse es dibujar la tabla en papel con su cuadrícula completa, tachar los huecos que ocupan las celdas combinadas y escribir solo las celdas que quedan.

### Columnas: colgroup y col

Las tablas se escriben fila a fila, así que no hay una etiqueta que envuelva una columna entera. Para eso existen **`<colgroup>`** y **`<col>`**, que van después del `<caption>` y antes del `<thead>`, y permiten referirse a columnas completas, normalmente para darles un ancho o un color de fondo desde CSS. `span` indica cuántas columnas abarca cada `<col>`. Solo admiten unas pocas propiedades de CSS, así que su uso es limitado, pero conviene que sepas que existen.

```html
<table>
  <caption>Comparativa de formatos de imagen</caption>
  <colgroup>
    <col class="col-formato">
    <col span="2" class="col-datos">
  </colgroup>
  ...
</table>
```

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

### Cómo viajan los datos: action, method y name

Cuando se envía un formulario, el navegador recoge el valor de cada campo y lo manda a la dirección indicada en **`action`**. Si no pones `action`, se envía a la misma página. Cada dato viaja como un par `nombre=valor`, y el nombre lo pone el atributo **`name`** del campo. Esto es fundamental: **un campo sin `name` no se envía**, aunque tenga un `id` y aunque la persona lo haya rellenado. El `id` sirve para enlazar el `<label>` y para CSS y JavaScript; el `name` sirve para el servidor.

El atributo **`method`** decide cómo viajan esos pares. Con **`GET`** (el valor por defecto) se añaden a la URL, detrás de una interrogación: `buscar?q=html&orden=fecha`. Es lo adecuado para búsquedas y filtros, porque la URL resultante se puede guardar o compartir. Con **`POST`** viajan dentro de la petición, sin aparecer en la URL, y es lo adecuado cuando el envío crea o modifica algo (un registro, un pedido, un mensaje) o cuando incluye datos que no deben quedar en el historial, como una contraseña. Ojo: POST no cifra nada, solo evita que los datos aparezcan en la URL; lo que protege los datos es que la página use HTTPS.

Durante esta unidad no tendrás un servidor que reciba los datos, pero puedes comprobar qué se enviaría con un formulario GET sin `action`: al enviarlo, verás los pares en la barra de direcciones.

### Tipos de input

El atributo `type` de `<input>` cambia por completo el comportamiento del campo, y elegir el tipo correcto tiene ventajas inmediatas: el navegador valida el formato, muestra un control adecuado (un calendario, un selector de color) y, en el móvil, despliega el teclado apropiado.

| Tipo | Para qué sirve |
|---|---|
| `text` | Texto corto de una línea. Es el valor por defecto |
| `email` | Correo electrónico; valida que tenga forma de correo |
| `password` | Contraseña; oculta los caracteres al escribir |
| `number` | Números; muestra flechas para subir y bajar |
| `tel` | Teléfono; abre el teclado numérico en el móvil, pero no valida el formato |
| `url` | Dirección web; valida que empiece por un protocolo |
| `search` | Campo de búsqueda; algunos navegadores añaden un botón para borrar |
| `date`, `time`, `datetime-local`, `month`, `week` | Fechas y horas, con selector del navegador |
| `range` | Deslizador entre un mínimo y un máximo, cuando el valor exacto no importa |
| `color` | Selector de color |
| `file` | Selección de ficheros del dispositivo |
| `checkbox`, `radio` | Casillas y botones de opción (los ves a continuación) |
| `hidden` | Campo invisible que se envía con el formulario |

`type="file"` merece un par de apuntes: con `accept` limitas el tipo de fichero (`accept="image/*"` o `accept=".pdf"`), con `multiple` permites elegir varios, y para que el fichero se envíe de verdad el formulario necesita `method="POST"` y `enctype="multipart/form-data"`.

### Casillas de verificación y botones de opción

**`type="checkbox"`** es una casilla que se marca o se desmarca, independiente de las demás: "Acepto las condiciones" o una lista de intereses de la que puedes elegir varios. **`type="radio"`** es un botón de opción que forma grupo con otros: de todos los radios que comparten el mismo **`name`**, solo uno puede estar marcado a la vez. Ese `name` compartido es lo que crea el grupo; si cada radio tiene un `name` distinto, se podrán marcar todos y dejarán de funcionar como opciones excluyentes.

En ambos casos, el atributo **`value`** es lo que se envía si la opción está marcada (si no lo pones, se envía un poco útil `on`), y **`checked`** la deja marcada de inicio. Aquí el `<label>` es todavía más importante que en un campo de texto, porque una casilla es un objetivo diminuto y la etiqueta asociada amplía la zona en la que se puede pulsar.

```html
<p>Formato de la inscripción:</p>
<input type="radio" id="presencial" name="formato" value="presencial" checked>
<label for="presencial">Presencial</label>
<input type="radio" id="online" name="formato" value="online">
<label for="online">Online</label>

<input type="checkbox" id="bases" name="bases" value="aceptadas" required>
<label for="bases">He leído y acepto las bases</label>
```

### Agrupar campos: fieldset y legend

En el ejemplo anterior, la pregunta "Formato de la inscripción" está en un `<p>` suelto, y un lector de pantalla que llega a la opción "Online" no sabe a qué pregunta pertenece. La forma correcta de agrupar campos relacionados es **`<fieldset>`**, con un **`<legend>`** como primer hijo que actúa de título del grupo. Es obligatorio en la práctica para cualquier grupo de radios o de checkboxes, y muy recomendable para dividir formularios largos en bloques ("Datos personales", "Datos del pedido").

```html
<fieldset>
  <legend>Formato de la inscripción</legend>
  <input type="radio" id="presencial" name="formato" value="presencial" checked>
  <label for="presencial">Presencial</label>
  <input type="radio" id="online" name="formato" value="online">
  <label for="online">Online</label>
</fieldset>
```

### Listas desplegables, texto largo y sugerencias

**`<select>`** crea una lista desplegable, y cada opción es un **`<option>`** con su `value`. Las opciones se pueden agrupar con **`<optgroup label="...">`**, `selected` marca la opción elegida de inicio y el atributo `multiple` en el `<select>` permite elegir varias. Un patrón muy habitual es poner una primera opción vacía que obligue a elegir, combinada con `required`: como su `value` está vacío, el navegador no deja enviar el formulario hasta que se elija otra.

```html
<label for="categoria">Categoría</label>
<select id="categoria" name="categoria" required>
  <option value="">Elige una categoría</option>
  <optgroup label="Imagen real">
    <option value="ficcion">Ficción</option>
    <option value="documental">Documental</option>
  </optgroup>
  <option value="animacion">Animación</option>
</select>
```

Cuando hay pocas opciones (dos, tres, cuatro), un grupo de radios suele ser más cómodo que un `<select>`, porque todas las opciones están a la vista sin desplegar nada. El `<select>` compensa a partir de unas cuantas opciones.

**`<textarea>`** es un campo de texto de varias líneas, para comentarios, mensajes o descripciones. A diferencia de `<input>`, no es un elemento vacío: tiene etiqueta de cierre y el texto inicial va entre las dos etiquetas, no en un atributo `value`. `rows` y `cols` indican su tamaño visible en líneas y caracteres, aunque normalmente lo controlarás con CSS.

```html
<label for="sinopsis">Sinopsis</label>
<textarea id="sinopsis" name="sinopsis" rows="5" maxlength="500"></textarea>
```

**`<datalist>`** ofrece sugerencias a un campo de texto sin obligar a elegir una de ellas: la persona puede escribir lo que quiera, pero mientras escribe ve una lista de opciones. Se enlaza con el atributo `list` del `<input>`, que debe coincidir con el `id` del `<datalist>`.

```html
<label for="ciudad">Ciudad</label>
<input type="text" id="ciudad" name="ciudad" list="ciudades">
<datalist id="ciudades">
  <option value="Cádiz">
  <option value="Jerez de la Frontera">
  <option value="San Fernando">
</datalist>
```

### Botones

**`<button>`** es la forma moderna de crear botones, y su atributo `type` decide qué hace. `type="submit"` envía el formulario, `type="reset"` devuelve todos los campos a su valor inicial (rara vez es buena idea: es muy fácil pulsarlo por error y perderlo todo) y `type="button"` no hace nada por sí mismo, se reserva para botones que controlarás con JavaScript. Hay una trampa importante: **dentro de un formulario, un `<button>` sin `type` es de tipo `submit`**, así que cualquier botón que añadas para otra cosa enviará el formulario si no le indicas `type="button"`.

También verás `<input type="submit" value="Enviar">`, que hace lo mismo que un `<button type="submit">`. La ventaja de `<button>` es que puede contener otras etiquetas, como un icono junto al texto.

### Validación nativa

La validación básica la hace el propio navegador, sin una sola línea de JavaScript, aunque en la UT3 verás cómo reforzarla con CSS y más adelante con JavaScript. Ya conoces `required` y la validación que aporta el propio `type`; estos son el resto de atributos que la completan:

- **`required`**: el campo no puede quedar vacío.
- **`min`** y **`max`**: valor mínimo y máximo en campos numéricos, de fecha y de rango (`max="20"` en una duración, `min="2026-01-01"` en una fecha).
- **`step`**: el intervalo entre valores válidos (`step="0.5"` admite 1, 1,5, 2...; por defecto, `number` solo admite enteros).
- **`minlength`** y **`maxlength`**: longitud mínima y máxima del texto.
- **`pattern`**: una expresión regular que el valor tiene que cumplir entero. Por ejemplo, `pattern="[0-9]{5}"` para un código postal. Acompáñalo de un `title` que explique el formato esperado, porque el navegador lo incluye en el mensaje de error.

```html
<label for="cp">Código postal</label>
<input type="text" id="cp" name="cp" pattern="[0-9]{5}" title="Cinco cifras, por ejemplo 11001" required>

<label for="duracion">Duración (minutos)</label>
<input type="number" id="duracion" name="duracion" min="1" max="20" required>
```

Dos atributos más que no validan pero mejoran mucho la experiencia. **`placeholder`** muestra un texto de ejemplo dentro del campo vacío, pero **nunca sustituye al `<label>`**: desaparece en cuanto empiezas a escribir, suele tener poco contraste y no todos los lectores de pantalla lo anuncian. Úsalo para un ejemplo de formato (`placeholder="nombre@ejemplo.com"`), no para el nombre del campo. **`autocomplete`** le dice al navegador qué tipo de dato es (`name`, `email`, `tel`, `postal-code`...) para que pueda rellenarlo automáticamente con los datos guardados.

Por último, recuerda que la validación del navegador es una comodidad para la persona usuaria, no una medida de seguridad: cualquiera puede saltársela desde las herramientas de desarrollo. Un servidor siempre debe volver a comprobar los datos que recibe.

### Indicadores: meter y progress

Hay dos etiquetas que no son campos de formulario, pero que se suelen ver junto a ellos porque muestran un valor numérico de forma gráfica. **`<meter>`** representa una medida dentro de un rango conocido, como el espacio ocupado de un disco o la fortaleza de una contraseña; con `low`, `high` y `optimum` el navegador colorea la barra según si el valor es bueno o malo. **`<progress>`** representa el avance de una tarea, como una subida de ficheros o los pasos completados de un formulario; si no le das `value`, se muestra como una barra en movimiento que indica que algo está en curso sin saber cuánto falta.

```html
<label for="espacio">Espacio usado</label>
<meter id="espacio" min="0" max="100" low="70" high="90" optimum="20" value="85">85 %</meter>

<label for="subida">Subiendo vídeo</label>
<progress id="subida" max="100" value="40">40 %</progress>
```

## Elementos interactivos sin JavaScript

Durante años, cualquier interacción en una página (un desplegable, una ventana emergente, un menú que se abre) necesitaba JavaScript. HTML ha ido incorporando etiquetas y atributos que resuelven los casos más habituales de forma nativa, y con mejor accesibilidad que la mayoría de soluciones hechas a mano.

### details y summary

**`<details>`** y **`<summary>`** crean contenido colapsable de serie, sin una sola línea de JavaScript. `<summary>` es la parte siempre visible (lo que se pulsa para abrir o cerrar) y todo lo demás dentro de `<details>` se muestra u oculta. Ideal para una sección de preguntas frecuentes. El atributo `open` lo deja desplegado de inicio, y si das el mismo atributo `name` a varios `<details>`, se convierten en un acordeón: al abrir uno, se cierra el que estuviera abierto.

```html
<details name="faq">
  <summary>¿Qué navegadores son compatibles?</summary>
  <p>Todos los navegadores modernos: Chrome, Firefox, Safari y Edge.</p>
</details>
<details name="faq">
  <summary>¿Necesito instalar algo?</summary>
  <p>No, basta con un editor de texto y un navegador.</p>
</details>
```

### Ventanas de diálogo: dialog

**`<dialog>`** es una ventana de diálogo: un aviso, una confirmación o un pequeño formulario que aparece sobre la página. Lo interesante es lo que el navegador hace por ti cuando lo abre como ventana **modal**: oscurece el resto de la página e impide interactuar con ella, mueve el foco del teclado al interior del diálogo y lo cierra al pulsar `Esc`. Dentro de un diálogo, un formulario con `method="dialog"` lo cierra al enviarse, sin necesidad de ningún código.

### Popovers

El atributo **`popover`** convierte cualquier elemento en un contenido emergente que aparece por encima de todo lo demás, como un menú desplegable, un aviso o un panel de ayuda. Se enlaza con un botón mediante **`popovertarget`**, que apunta a su `id`. Por defecto se cierra solo al pulsar fuera o al pulsar `Esc`.

```html
<button popovertarget="ayuda">¿Qué es esto?</button>
<div id="ayuda" popover>
  <p>El código de inscripción aparece en el correo de confirmación.</p>
</div>
```

### Invocadores: command y commandfor

Los **invocadores** generalizan la idea de `popovertarget`: un `<button>` con el atributo **`commandfor`** apunta al `id` del elemento que quiere controlar, y con **`command`** indica qué acción ejecutar sobre él. Es lo que permite, por fin, abrir un `<dialog>` como ventana modal sin JavaScript. Es una de las incorporaciones más recientes del estándar, así que antes de usarlo en un proyecto real comprueba su compatibilidad en [Baseline](https://web.dev/baseline) o en [caniuse.com](https://caniuse.com/).

```html
<button commandfor="confirmar" command="show-modal">Borrar inscripción</button>

<dialog id="confirmar">
  <p>¿Seguro que quieres borrar tu inscripción? No se puede deshacer.</p>
  <button commandfor="confirmar" command="close">Cancelar</button>
  <form method="dialog">
    <button value="borrar">Sí, borrar</button>
  </form>
</dialog>
```

Otras acciones disponibles son `close`, `toggle-popover`, `show-popover` y `hide-popover`.

### Atributos interactivos: hidden y contenteditable

El atributo **`hidden`** oculta un elemento por completo, tanto visualmente como para los lectores de pantalla. Es la forma semántica de decir "este contenido no es relevante ahora mismo", y lo usarás mucho en la UT4 para mostrar y ocultar partes de la página desde JavaScript.

El atributo **`contenteditable`** convierte cualquier elemento en editable: la persona usuaria puede hacer clic y escribir directamente sobre él. Es la base de los editores de texto que funcionan dentro del navegador, aunque lo escrito no se guarda en ningún sitio a menos que lo recojas con JavaScript.

Hay una última etiqueta de esta familia, **`<template>`**, que contiene un fragmento de HTML que el navegador no muestra ni procesa hasta que JavaScript lo clona y lo inserta en la página. Su sentido aparece cuando generas contenido de forma dinámica, así que la retomarás en la UT4.

## Más sobre la cabecera: recursos, buscadores y redes sociales

En la cabecera ya conoces `charset`, `viewport`, `<title>` y el `<link>` a la hoja de estilos. Una página real lleva algo más.

### Favicon

El **favicon** es el icono que aparece en la pestaña del navegador, en los marcadores y en el acceso directo del móvil. Se enlaza con un `<link rel="icon">`; el formato SVG es el más cómodo porque se ve nítido a cualquier tamaño, y `apple-touch-icon` es el icono que usan los dispositivos de Apple al guardar la página en la pantalla de inicio.

```html
<link rel="icon" href="img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="img/icono-180.png">
```

### Metadatos para buscadores

**`<meta name="description">`** es un resumen de una o dos frases de la página. Los buscadores lo usan a menudo como el texto que aparece bajo el título en los resultados, así que debe describir el contenido de forma clara y distinta en cada página. **`<meta name="robots">`** indica a los buscadores si deben indexar la página (`noindex` la excluye de los resultados).

```html
<meta name="description" content="Festival de cortometrajes para estudiantes y creadores emergentes de Andalucía. Programa, ganadores e inscripción.">
```

### Metadatos para redes sociales

Cuando compartes un enlace en una red social o en una aplicación de mensajería, aparece una tarjeta con título, descripción e imagen. Esa tarjeta sale de los metadatos **Open Graph**, un vocabulario creado por Facebook que hoy usan prácticamente todas las plataformas. Fíjate en que usan el atributo `property` en lugar de `name`.

```html
<meta property="og:title" content="Festival de Cortometrajes de la Bahía">
<meta property="og:description" content="Del 12 al 14 de noviembre en Cádiz. Proyecciones gratuitas.">
<meta property="og:image" content="https://festivalbahia.example/img/tarjeta.jpg">
<meta property="og:url" content="https://festivalbahia.example/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

### base y la precarga de recursos

**`<base href="...">`** cambia la dirección desde la que se calculan **todas** las rutas relativas del documento. Puede ser útil en casos concretos, pero afecta también a los enlaces internos con `#`, así que provoca errores difíciles de detectar. No lo uses salvo que tengas un motivo muy claro.

`<link>` también sirve para dar pistas de rendimiento al navegador. **`rel="preload"`** le pide que empiece a descargar cuanto antes un recurso que sabes que va a necesitar, como una fuente tipográfica, y **`rel="preconnect"`** le pide que abra la conexión con un servidor externo antes de pedirle nada.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" href="fuentes/plex-sans.woff2" as="font" type="font/woff2" crossorigin>
```

### Scripts

El código JavaScript se enlaza con **`<script src="...">`**, que, a diferencia de `<link>`, no es un elemento vacío y necesita su etiqueta de cierre. El problema de un `<script>` es que, por defecto, el navegador **deja de leer el HTML** mientras lo descarga y lo ejecuta. Si está en la cabecera, la página se queda en blanco esperando, y además el script se ejecuta antes de que exista el contenido que quiere manipular. Hay tres formas de evitarlo:

- **`defer`**: descarga el script en paralelo mientras sigue leyendo el HTML y lo ejecuta cuando el documento está completo, respetando el orden entre scripts. Es la opción adecuada en la mayoría de los casos.
- **`async`**: descarga en paralelo y lo ejecuta en cuanto termina de descargarse, sin esperar al resto del documento ni respetar el orden. Solo para scripts independientes, como una analítica.
- **`type="module"`**: carga el script como un módulo de JavaScript, que se comporta como `defer` de forma automática.

```html
<head>
  ...
  <script src="js/app.js" defer></script>
</head>
```

Lo retomarás en detalle en la UT4, cuando empieces a escribir JavaScript.

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
- **Si son varios elementos del mismo tipo, es una lista.** Un menú, una serie de enlaces o una colección de tarjetas se marcan como lista, no como enlaces o bloques sueltos uno detrás de otro.
- **No separes párrafos con `<br>`.** Dos párrafos son dos `<p>`; el espacio entre ellos lo pone CSS.
- **El texto de un enlace dice adónde lleva.** Nada de "pincha aquí" ni "más información".
- **Todo campo de formulario tiene su `<label>` y su `name`.** Sin `<label>` no es accesible; sin `name`, no se envía. Y el `placeholder` no sustituye al `<label>`.
- **Los grupos de radios y checkboxes van en un `<fieldset>` con su `<legend>`.**
- **Las tablas son para datos, nunca para maquetar.** Y toda tabla de datos tiene su `<caption>`.
- **No uses etiquetas ni atributos obsoletos.** HTML5 retiró todo lo que servía solo para dar aspecto: `<center>`, `<font>`, `<big>`, `<tt>`, `<strike>` (sustituida por `<s>` o `<del>`), `<acronym>` (sustituida por `<abbr>`), `<marquee>`, los marcos `<frame>` y `<frameset>`, y atributos como `align`, `bgcolor` o `border`. Si los encuentras en un tutorial, es un tutorial antiguo. Los navegadores los siguen mostrando por compatibilidad, pero el validador los marcará como error.
- **Valida siempre.** Un documento con errores de sintaxis puede renderizarse igualmente (los navegadores son muy tolerantes), lo que hace que el error pase desapercibido hasta que causa un problema real en CSS o JavaScript.

## Validar tu HTML

Un documento HTML puede tener errores de sintaxis (una etiqueta sin cerrar, un atributo mal escrito) y aun así el navegador lo va a mostrar, porque los navegadores son muy tolerantes con el código mal formado. Eso no significa que el documento esté bien: significa que el error está oculto. El [validador del W3C](https://validator.w3.org/) comprueba tu HTML contra la especificación oficial y señala exactamente dónde está el problema. Acostumbra a pasar tu código por él antes de darlo por terminado: en este módulo, la validación es un criterio que se evalúa, no un paso opcional.

## Recursos complementarios

- [HTML5 by Manz](https://lenguajehtml.com/html/)
- [DOM by Manz](https://lenguajejs.com/dom/)
- [Documentación de HTML (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/HTML)
- [`<article>`: The Article Contents element (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article)
- [Validador HTML del W3C](https://validator.w3.org/)
- [Referencia de elementos HTML (MDN)](https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements)
- [Formularios web (MDN)](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms)
- [Baseline: qué funciones web están disponibles en todos los navegadores](https://web.dev/baseline)
- [Can I use](https://caniuse.com/)

## Material de refuerzo y ampliación

Se recomienda completar el curso [Learn HTML by Building a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1) de freeCodeCamp.
