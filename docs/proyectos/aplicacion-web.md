---
hide:
  - navigation
---

# Proyecto 1 · De la API a la página

**Resultado de aprendizaje:** RA2 (criterios a–j)  
**Entrega:** repositorio público en GitHub, publicado con GitHub Pages  
**Plazos:** Fase 1, _por fijar_ · Fase 2, _por fijar_

## El encargo

En internet hay miles de servicios que publican sus datos en abierto: las obras de un museo, recetas de cocina, países, libros, personajes de una serie, agentes de un videojuego, paradas de autobús… Casi todos los ofrecen a través de una **API**, una dirección a la que haces una petición y que te devuelve los datos en JSON. Son datos en bruto, sin diseño, pensados para que los lea un programa y no una persona.

Tu encargo es elegir una de esas API y construir el sitio web que convierte esos datos en algo que una persona quiera leer y pueda consultar desde cualquier dispositivo.

No vas a programar nada: lees el JSON, decides qué es cada dato para quien lo va a leer y lo marcas con HTML5. Después le das presentación con CSS3. Todo el trabajo está en esas dos decisiones: qué significa cada dato y cómo se presenta.

El proyecto tiene dos fases, y la segunda se apoya en la primera:

| Fase | Qué haces | Criterios que pesan más |
|---|---|---|
| 1 · Estructura | Eliges la API y construyes el sitio completo en HTML5, sin nada de CSS | a, b, c, d, g, h, i |
| 2 · Presentación | Diseñas el sitio con una única hoja de estilos, adaptada a móvil, y lo publicas | b, e, f, g, h, i, j |

## Elige tu API

Tu API tiene que salir del repositorio [Public APIs](https://github.com/public-apis/public-apis), que reúne cientos de API gratuitas agrupadas por temas. Elegir una entre tantas, leer su documentación (casi siempre en inglés) y decidir si te sirve forma parte del trabajo.

Cada API de la lista aparece en una tabla con cinco columnas: nombre, descripción, *Auth* (si necesita clave), *HTTPS* y *CORS*. La API que elijas tiene que cumplir esto:

- Está en la lista y en la columna *Auth* pone `No`. Si pone `apiKey`, solo vale si la clave se consigue gratis y sin tarjeta.
- En la columna *HTTPS* pone `Yes`.
- Responde en JSON y tiene documentación en la que se explican sus *endpoints*.
- Ofrece una colección de al menos unos veinte elementos con datos variados: textos, números, imágenes y, si puede ser, fechas. Por eso sirven las categorías de contenido (*Animals*, *Anime*, *Art & Design*, *Books*, *Food & Drink*, *Games & Comics*, *Music*, *Science & Math*, *Sports & Fitness*, *Video*…) y no las de utilidades técnicas, como acortadores de URL, validación de datos o autenticación.
- Te interesa de verdad, porque vas a pasar con ella varias semanas.
- No es ninguna de las de Pokémon, que son las que uso en los ejemplos de clase, ni ninguna de *The Legend of Zelda*, que usaremos en otro proyecto.

Para que te hagas una idea de lo que sirve, todas estas están en la lista: Art Institute of Chicago, TheMealDB, REST Countries, Open Library y Rick and Morty. La lista no siempre está al día y algunas API dejan de funcionar sin avisar, así que comprueba que la tuya responde antes de decidirte. Pon en el README la categoría de la lista en la que la encontraste.

Para explorarla basta con pegar la URL de una petición en el navegador (Firefox muestra el JSON ordenado y plegable) o usar [Hoppscotch](https://hoppscotch.io). Las respuestas que uses como contenido guárdalas como ficheros `.json` en una carpeta `datos/` del repositorio. De ahí sale todo el texto de tu sitio, y es lo que voy a consultar para comprobar que el contenido es el real.

### Antes de escribir HTML: la ficha de la API

Abre el `README.md` con una sección *La API* en la que expliques cómo se llama, quién la mantiene, dónde está su documentación, qué licencia o condiciones de uso tiene y qué *endpoints* has consultado.

Debajo, coge un elemento de la colección y haz una tabla con sus campos: el nombre del campo en el JSON, su tipo de dato y **qué es ese dato para quien lee tu web**. Esta tabla es el puente entre los datos y el marcado, y es la que vas a consultar cada vez que dudes qué etiqueta usar. Así quedaría con la PokéAPI:

| Campo del JSON | Tipo | Qué es para el lector |
|---|---|---|
| `name` | texto | El título de la ficha y el texto del enlace en el catálogo |
| `sprites.other.official-artwork.front_default` | URL | La imagen principal, acompañada de su pie |
| `types[].type.name` | lista de textos | Las categorías del elemento; también sirven para agrupar el catálogo |
| `height`, `weight` | números | Pares nombre–valor en la ficha y columnas en la comparativa (con su unidad) |
| `stats[]` | lista de objetos | Una tabla de estadísticas dentro de la ficha |

Fíjate en que la última columna no habla de etiquetas, sino de lo que *significa* cada dato. Decidir la etiqueta es trabajo tuyo.

## Fase 1 · Estructura con HTML5

En esta fase solo te importan la estructura y el significado. No hay CSS de ningún tipo: ni en línea, ni interno, ni externo. Tu sitio se verá con los estilos por defecto del navegador, y está bien así. Si con esos estilos se entiende y se puede usar, la estructura es buena.

### Las páginas

| Página | Qué contiene |
|---|---|
| `index.html` | La portada: qué es el sitio, de dónde salen los datos y una selección de al menos tres elementos destacados que enlazan a sus fichas. |
| `catalogo.html` | Al menos doce elementos de la API, cada uno con su imagen, su nombre, dos o tres datos clave y un enlace a su ficha si la tiene. Agrúpalos según alguna categoría que te den los propios datos. |
| `fichas/*.html` | Al menos tres fichas, una por elemento, con toda la información útil que ofrece la API. Las tres comparten estructura: son la misma plantilla con datos distintos. |
| `comparativa.html` | Una tabla que compara al menos ocho elementos en al menos cuatro campos. Tiene título, las cabeceras de columna y de fila están bien identificadas y, si los datos lo permiten, hay un resumen final (totales, medias, máximos…). |
| `sobre-los-datos.html` | Qué API usas, quién la mantiene, su licencia y atribución, qué *endpoints* consultas y un fragmento real de JSON mostrado como código junto al HTML en que lo has convertido. |
| `propuesta.html` | Un formulario para proponer un elemento nuevo al catálogo. Sus campos salen de los campos del JSON. Lo explicamos más abajo. |

Además, en alguna página del sitio tiene que haber al menos un vídeo o un audio que tenga sentido con tu temática (un tráiler, una entrevista, un sonido…). Puede ser un fichero propio o estar insertado desde otra plataforma.

### Lo que tiene que cumplir tu sitio

- Cada página es un documento HTML5 completo, en español, con la codificación correcta, preparado para móvil, con un título de pestaña propio y una descripción para buscadores.
- En todas las páginas se distinguen, sin leer ninguna clase, la cabecera, la navegación principal, el contenido principal y el pie. La navegación es la misma en todo el sitio e indica de forma accesible en qué página estás.
- Cada página tiene un único título principal y una jerarquía de encabezados continua, sin saltos.
- Cada elemento del catálogo y cada ficha tendrían sentido publicados fuera de tu sitio.
- Los datos de cada ficha que son pares nombre–valor están marcados como tales, no como párrafos sueltos.
- Las imágenes tienen un texto alternativo que dice lo que aportan y declaran sus dimensiones. Las que llevan pie forman una unidad con él. Guárdalas en `assets/img`, con nombres en minúsculas y sin espacios.
- Las fechas se pueden interpretar por una máquina, y las cifras llevan su unidad.
- Todos los enlaces internos funcionan con rutas relativas, también desde las fichas, que están en una subcarpeta.
- Al principio de cada página hay un enlace para saltar al contenido principal, y todo el sitio se puede recorrer solo con el teclado.
- No hay ningún elemento ni atributo obsoleto. Usa `<div>` solo cuando no exista una etiqueta que describa lo que agrupas.
- El código está bien sangrado y lleva comentarios donde ayudan a orientarse, no en cada línea.
- El contenido es el real de la API, nunca *lorem ipsum*. Si los datos vienen en inglés puedes dejarlos así, pero la navegación, los títulos y los textos que escribes tú van en español.

### El formulario de propuesta

El formulario es la otra cara del JSON: si alguien quisiera añadir un elemento nuevo a tu catálogo, ¿qué datos tendría que darte y de qué tipo? Vuelve a tu tabla de campos y diseña el formulario a partir de ella. Cada control tiene que corresponder al tipo de dato del campo: un número con su rango razonable, una fecha, una URL de imagen, un valor que solo puede ser uno de una lista cerrada, un texto largo para la descripción…

Debe tener al menos ocho campos, agrupados por temas, con cada etiqueta asociada a su control, los obligatorios bien diferenciados de los opcionales y validación nativa del navegador allí donde tenga sentido (longitudes, rangos, formatos). De momento no tiene que enviarse a ningún servidor.

### Valida antes de cerrar la fase

Pasa todas las páginas por el [validador del W3C](https://validator.w3.org/) y corrige todos los errores, como hiciste con el wireframe. Los avisos que decidas no corregir, justifícalos en el README.

### Entregable de la Fase 1

```text
tu-repositorio/
├── index.html
├── catalogo.html
├── comparativa.html
├── sobre-los-datos.html
├── propuesta.html
├── fichas/
│   ├── elemento-1.html
│   ├── elemento-2.html
│   └── elemento-3.html
├── assets/
│   ├── img/
│   └── media/
├── datos/
│   └── *.json
└── README.md
```

El README de esta fase recoge la ficha de la API con su tabla de campos, la estructura del sitio (qué hay en cada página), dos o tres decisiones de marcado en las que dudaste entre varias opciones y explicas por qué elegiste la que elegiste, y el resultado de la validación.

Haz al menos seis commits con mensajes descriptivos durante la fase. Cuando la des por cerrada, marca ese commit con la etiqueta `fase-1` y súbela a GitHub. Lo que corrijo de esta fase es lo que hay en esa etiqueta.

## Fase 2 · Presentación con CSS3

Ahora le das al sitio su aspecto. El HTML de la Fase 1 debería cambiar muy poco: si para conseguir un diseño tienes que rehacer la estructura, probablemente la estructura no era buena.

### Lo que tiene que cumplir tu hoja de estilos

- Hay un único archivo CSS externo, enlazado desde todas las páginas, y no queda ni un estilo en línea ni interno.
- Los colores, las tipografías y los espaciados se definen una sola vez como variables. Cambiar el color principal del sitio tiene que ser cuestión de tocar una línea.
- Las clases siguen la nomenclatura BEM de forma coherente, y el archivo está organizado en secciones comentadas.
- El diseño parte del móvil (360 px de ancho) y se adapta a tablet y escritorio con al menos dos puntos de ruptura. En ninguna página aparece *scroll* horizontal a 360 px.
- El catálogo cambia el número de columnas según el ancho disponible, y las fichas tienen una disposición distinta en móvil y en escritorio.
- La tabla comparativa se sigue pudiendo leer en el móvil. Cómo lo consigues lo decides tú, y lo justificas en el README.
- Las imágenes se adaptan a su contenedor sin deformarse.
- El sitio tiene modo oscuro, que se activa según la preferencia del sistema.
- Los elementos interactivos tienen transiciones, y hay al menos una animación que aporta algo a la experiencia. Si el usuario ha pedido movimiento reducido, se respeta.
- Todos los elementos interactivos muestran un foco visible, y el contraste entre texto y fondo cumple el nivel AA en los dos modos.
- El formulario está diseñado entero, incluidos los estados de campo válido e inválido.
- La tipografía crea una jerarquía clara y el texto se lee con comodidad.

### Valida, revisa la accesibilidad y publica

Pasa la hoja de estilos por el [validador de CSS del W3C](https://jigsaw.w3.org/css-validator/) y vuelve a validar el HTML. Después analiza la accesibilidad de al menos tres páginas con Lighthouse (en las herramientas del navegador) o con [WAVE](https://wave.webaim.org/), y corrige lo que te señalen. Por último, publica el sitio con GitHub Pages y pon la URL en el README y en la descripción del repositorio.

### Entregable de la Fase 2

Añade al repositorio la carpeta `css/` con tu `styles.css` y amplía el README con la paleta de colores y las tipografías, las decisiones de diseño responsive (incluida la de la tabla), capturas del sitio en móvil y en escritorio y en los dos modos de color, los enlaces a los resultados de validación, lo que encontró el análisis de accesibilidad y cómo lo corregiste, y la URL publicada.

Cierra el README con un párrafo breve sobre qué te ha aportado separar el contenido de la presentación, con un ejemplo concreto de tu proyecto: un cambio que hiciste una sola vez y se aplicó en todas las páginas.

Otra vez, al menos seis commits descriptivos durante la fase, y la etiqueta `fase-2` al cerrarla.

## Evaluación

Este proyecto evalúa los diez criterios del RA2. Cada criterio se califica de 0 a 10 con la rúbrica de abajo, y esa nota cuenta la mitad de su calificación. La otra mitad sale de la prueba práctica de la unidad. Se valora el razonamiento, no solo el resultado: una solución que no funciona del todo pero muestra que entiendes lo que hacías puntúa.

Hay dos condiciones que afectan a todo el proyecto. Si el sitio no se puede abrir desde GitHub Pages, o las rutas a imágenes, páginas u hoja de estilos están rotas, los criterios afectados no pueden pasar de 5. Y lo que no esté en las etiquetas `fase-1` y `fase-2` del repositorio no se evalúa.

### 2.a · Identificar etiquetas y atributos de HTML

Se mira en el marcado de todas las páginas de la Fase 1.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Cada contenido usa la etiqueta que describe su significado, y cada decisión dudosa está razonada en el README. Los atributos están completos y son los adecuados (idioma, metadatos, textos alternativos, fechas para máquinas, tipos y restricciones del formulario). Las tres fichas comparten exactamente la misma estructura. |
| Notable (7–8) | Marcado semántico correcto en casi todo el sitio, con algún elemento genérico donde existía uno más preciso o algún atributo útil que falta. |
| Suficiente (5–6) | La estructura general es correcta, pero hay varios contenidos marcados por su aspecto y no por su significado, o atributos que faltan en imágenes, fechas o formulario. |
| Insuficiente (0–4) | Hay un uso generalizado de elementos genéricos, la jerarquía de encabezados está rota o los atributos básicos no aparecen. |

### 2.b · Utilizar herramientas en línea para crear contenido web

Se mira en el repositorio, el historial de Git, la publicación en GitHub Pages y la exploración de la API.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Hay al menos seis commits descriptivos por fase que cuentan cómo avanzó el proyecto, y las etiquetas `fase-1` y `fase-2` están en su sitio. El sitio está publicado y funciona. Las respuestas JSON están guardadas en `datos/`, y la exploración de la API queda documentada con los *endpoints* reales. |
| Notable (7–8) | Todo está presente, pero los commits son algo genéricos o se concentran en pocos días. |
| Suficiente (5–6) | El repositorio y la publicación funcionan, pero el historial es pobre (menos commits de los pedidos o con mensajes poco útiles), o falta la carpeta `datos/`. |
| Insuficiente (0–4) | El sitio no está publicado, el trabajo está subido en uno o dos commits o no hay rastro de la exploración de la API. |

### 2.c · Identificar etiquetas para incluir elementos multimedia

Se mira en las imágenes del catálogo, las fichas y la portada, y en el vídeo o audio.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Todas las imágenes tienen un texto alternativo útil y declaran sus dimensiones, y las que llevan pie forman una unidad con él. El vídeo o audio tiene controles, sentido dentro del sitio y una alternativa para quien no puede reproducirlo. Los ficheros están ordenados en `assets/`. |
| Notable (7–8) | El multimedia está bien integrado, con algún texto alternativo genérico («imagen de…») o alguna dimensión sin declarar. |
| Suficiente (5–6) | Las imágenes y el vídeo o audio están, pero hay textos alternativos vacíos o repetidos, o el multimedia está colocado sin relación con el contenido. |
| Insuficiente (0–4) | Faltan imágenes, no hay vídeo ni audio, o se cargan con rutas rotas. |

### 2.d · Emplear lenguajes de marcas para transmitir información

Este es el criterio central del proyecto. Se mira en la tabla de campos del README y en cómo los datos del JSON se convierten en HTML: catálogo, fichas, comparativa y `sobre-los-datos.html`.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | La tabla de campos es completa y razonada, y el marcado la respeta de forma coherente en todo el sitio. Los datos están en su forma más significativa (pares nombre–valor, tabla con cabeceras de fila y columna, elementos autónomos). El fragmento de JSON y su versión en HTML muestran con claridad la transformación. |
| Notable (7–8) | La transformación es correcta y coherente, con algún dato presentado de forma más pobre de lo que permitía (por ejemplo, como texto suelto cuando era un par nombre–valor). |
| Suficiente (5–6) | Los datos de la API están en el sitio, pero con un marcado irregular entre páginas o una tabla comparativa que no identifica bien sus cabeceras. |
| Insuficiente (0–4) | El contenido no sale de la API, es de relleno o no está estructurado. |

### 2.e · Describir y aplicar las propiedades básicas de CSS

Se mira en la hoja de estilos y en el aspecto final del sitio.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | El catálogo y las fichas están maquetados con técnicas modernas de disposición, y la tipografía, el color y el espaciado crean una jerarquía clara. El modo oscuro es completo, las transiciones y la animación aportan algo y el formulario está diseñado entero, incluidos sus estados. |
| Notable (7–8) | El diseño es sólido y está completo, con algún detalle descuidado (un estado sin diseñar, un modo oscuro con zonas sin adaptar). |
| Suficiente (5–6) | El sitio tiene un diseño propio, pero falta alguno de los requisitos (modo oscuro, animación, estados del formulario) o la maquetación se apoya en trucos frágiles. |
| Insuficiente (0–4) | El diseño es mínimo o rompe el contenido, y faltan varios requisitos. |

### 2.f · Crear y enlazar hojas de estilo

Se mira en la organización de la hoja de estilos, en la separación entre contenido y presentación y en el párrafo final del README.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Hay un único archivo externo enlazado en todas las páginas (también en las fichas, con su ruta relativa) y no queda un solo estilo en el HTML. Las variables cubren todos los valores repetidos, BEM es coherente y el archivo está ordenado por secciones. El README explica con un ejemplo real la ventaja de separar contenido y presentación. |
| Notable (7–8) | La separación es correcta y la organización buena, con algún valor repetido que debería ser una variable o alguna clase fuera de la nomenclatura. |
| Suficiente (5–6) | La hoja de estilos es externa, pero desordenada o con poca reutilización, o la reflexión del README es genérica. |
| Insuficiente (0–4) | Hay CSS en la Fase 1, estilos en línea o internos en la Fase 2, o páginas que no cargan la hoja de estilos. |

### 2.g · Validar documentos HTML y CSS

Se mira volviendo a pasar el validador al HTML de las dos etiquetas y al CSS, y en las evidencias del README.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Todas las páginas y la hoja de estilos validan sin errores y los avisos están corregidos o justificados. El README enlaza los resultados, y el historial muestra que se validó durante el desarrollo, no solo al final. |
| Notable (7–8) | No hay errores, pero quedan avisos sin justificar o faltan algunas evidencias en el README. |
| Suficiente (5–6) | Hay algún error menor en alguna página que no afecta a la estructura. |
| Insuficiente (0–4) | Hay errores de validación que afectan a la estructura (etiquetas sin cerrar, elementos mal anidados) o no hay evidencia de haber validado. |

### 2.h · Documentar el código empleado

Se mira en el README de las dos fases y en los comentarios del HTML y del CSS.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | El README está completo y bien organizado, y otra persona podría entender el proyecto y continuarlo sin preguntarte nada. La tabla de campos y las decisiones de marcado y de diseño están razonadas, no solo enumeradas. Los comentarios del código orientan sin estorbar. |
| Notable (7–8) | La documentación está completa, con algún apartado escueto o decisiones que se describen pero no se justifican. |
| Suficiente (5–6) | El README cubre lo mínimo o el código apenas tiene comentarios. |
| Insuficiente (0–4) | Falta el README o la documentación no explica nada del proyecto. |

### 2.i · Valorar la importancia de la accesibilidad web

Se mira navegando el sitio con el teclado, en el contraste, en el formulario y en el análisis de accesibilidad del README.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Todo el sitio se recorre con el teclado, con el foco siempre visible y el enlace para saltar al contenido. El contraste cumple AA en los dos modos y se respeta el movimiento reducido. El análisis con Lighthouse o WAVE está documentado junto con lo que se corrigió a raíz de él. |
| Notable (7–8) | El sitio es accesible en lo esencial, con algún fallo puntual (un foco poco visible, un contraste justo en un modo). |
| Suficiente (5–6) | Se cumplen las bases (textos alternativos, etiquetas del formulario, idioma), pero hay problemas de foco o contraste o falta el análisis. |
| Insuficiente (0–4) | Hay partes del sitio que no se pueden usar con el teclado, el formulario no tiene etiquetas o el contraste es claramente insuficiente. |

### 2.j · Diseñar páginas web adaptadas a dispositivos móviles

Se mira en el sitio publicado, a 360 px, en tablet y en escritorio.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | El diseño parte del móvil y se adapta de forma natural en cada punto de ruptura. No hay *scroll* horizontal en ninguna página, el catálogo y las fichas reorganizan su contenido y la tabla comparativa tiene una solución razonada y cómoda en el móvil. |
| Notable (7–8) | El sitio se adapta bien, con algún desajuste puntual en un ancho intermedio. |
| Suficiente (5–6) | El sitio se ve en el móvil, pero se nota que está pensado para escritorio y simplemente encogido, o la tabla obliga a desplazarse sin control. |
| Insuficiente (0–4) | Hay *scroll* horizontal, contenido cortado o el sitio no es usable a 360 px. |
