---
hide:
  - navigation
---

# Proyecto 1 · De la API a la página

Ahora mismo, mientras lees esto, hay miles de servicios en internet publicando sus datos para que cualquiera los use: las obras de un museo, recetas de cocina, países, libros, personajes de una serie, partidas de un videojuego… La forma habitual de ofrecerlos es una **API**, una dirección a la que haces una petición y que te responde con los datos en formato JSON. Si alguna vez abres una de esas respuestas en el navegador, verás que no tienen nada de página web: son datos en bruto, sin diseño ni orden pensado para leerse, porque están hechos para que los consuma un programa y no una persona.

En este proyecto vas a hacer el camino que va de una cosa a la otra. Elegirás una API, leerás sus datos y construirás con ellos un sitio web que alguien quiera visitar y pueda consultar igual de bien en el móvil que en el ordenador. No vas a programar nada: el trabajo consiste en mirar cada dato del JSON, decidir qué significa para quien lo va a leer y marcarlo con la etiqueta HTML que mejor lo describe. Cuando la estructura esté terminada, le darás aspecto con CSS.

Por eso el proyecto tiene dos fases, igual que se construye una casa: primero la estructura y después los acabados. En la primera fase solo escribes HTML, y en la segunda añades la hoja de estilos sin apenas tocar lo que ya tenías.

## Elegir la API

Tu API tiene que salir del repositorio [Public APIs](https://github.com/public-apis/public-apis), una lista que reúne cientos de API gratuitas ordenadas por temas. Elegir una entre tantas, leer su documentación (que casi siempre está en inglés) y decidir si te sirve forma parte del trabajo, así que tómatelo con calma.

Cada API de la lista aparece en una tabla con cinco columnas: el nombre, una descripción, *Auth*, *HTTPS* y *CORS*. Las dos que te interesan ahora son *Auth*, que indica si necesitas una clave para usarla, y *HTTPS*, que indica si la conexión es segura. Busca una que tenga `No` en *Auth* (o `apiKey`, siempre que la clave se consiga gratis y sin tarjeta) y `Yes` en *HTTPS*.

Además, la API tiene que darte material suficiente para construir un sitio. Necesitas una colección de al menos unos veinte elementos con datos variados: textos, números, imágenes y, si puede ser, fechas. Eso descarta las categorías de utilidades técnicas, como los acortadores de URL o los validadores de datos, y te lleva a las de contenido: *Animals*, *Anime*, *Art & Design*, *Books*, *Food & Drink*, *Games & Comics*, *Music*, *Science & Math*, *Sports & Fitness*, *Video*… Para que te hagas una idea, todas estas cumplen y están en la lista: Art Institute of Chicago, TheMealDB, REST Countries, Open Library o Rick and Morty.

Hay dos excepciones: no puedes usar ninguna de las de Pokémon, porque es la que uso yo en los ejemplos de clase, ni ninguna de *The Legend of Zelda*, porque la usaremos en otro proyecto. Y un consejo: elige algo que te interese de verdad, porque vas a pasar varias semanas con esos datos.

La lista no siempre está al día y algunas API dejan de funcionar sin avisar. Antes de decidirte, comprueba que la tuya responde.

### Explorar los datos

Para ver qué devuelve una API no necesitas ninguna herramienta especial. Pega la URL de una petición en la barra del navegador y verás la respuesta; Firefox, además, muestra el JSON ordenado y te deja plegar y desplegar cada parte. Si quieres algo más cómodo, [Hoppscotch](https://hoppscotch.io) te permite probar peticiones y guardarlas.

Las respuestas que vayas a usar como contenido, guárdalas como ficheros `.json` en una carpeta `datos/` de tu repositorio. De ahí sale todo el texto de tu sitio, y es lo que voy a mirar para comprobar que el contenido es el real.

### Antes de escribir HTML

Abre el `README.md` de tu repositorio con un apartado sobre la API: cómo se llama, en qué categoría de la lista la encontraste, quién la mantiene, dónde está su documentación, qué condiciones de uso tiene y qué peticiones has hecho.

Después viene el paso más importante de todo el proyecto. Coge un elemento de la colección y haz una tabla con sus campos: el nombre que tiene en el JSON, el tipo de dato y, sobre todo, **qué es ese dato para la persona que lee tu web**. Con la PokéAPI quedaría algo así:

| Campo del JSON | Tipo | Qué es para el lector |
|---|---|---|
| `name` | texto | El título de la ficha y el texto del enlace en el catálogo |
| `sprites.other.official-artwork.front_default` | URL | La imagen principal, acompañada de su pie |
| `types[].type.name` | lista de textos | Las categorías del elemento; también sirven para agrupar el catálogo |
| `height`, `weight` | números | Datos de la ficha que se leen como «nombre: valor», y columnas en la comparativa (con su unidad) |
| `stats[]` | lista de objetos | Una tabla de estadísticas dentro de la ficha |

Fíjate en que la última columna no habla de etiquetas, sino de lo que *significa* cada dato. Esa tabla es el puente entre el JSON y tu HTML: cada vez que dudes qué etiqueta usar para algo, vuelve a ella y pregúntate qué es ese dato para quien lo lee. La etiqueta sale de ahí.

## Fase 1 · La estructura

En esta fase solo importan la estructura y el significado, así que no hay CSS de ningún tipo: ni en atributos, ni en la cabecera, ni en un fichero aparte. Tu sitio se verá con los estilos que el navegador aplica por defecto, y está bien así. De hecho, es una buena prueba: si con esos estilos tan pobres el sitio se entiende y se puede usar, la estructura es buena.

### Las páginas del sitio

El sitio tiene, como mínimo, estas páginas:

- **`index.html`**, la portada. Explica qué es el sitio y de dónde salen sus datos, y presenta una selección de al menos tres elementos destacados que llevan a sus fichas.
- **`catalogo.html`**, con al menos doce elementos de la API. De cada uno se ve la imagen, el nombre, dos o tres datos clave y el enlace a su ficha, si la tiene. Agrúpalos según alguna categoría que te den los propios datos.
- **Una carpeta `fichas/`** con al menos tres páginas, una por elemento, que recogen toda la información útil que ofrece la API sobre él. Las tres son la misma plantilla con datos distintos, así que deben tener exactamente la misma estructura.
- **`comparativa.html`**, con una tabla que compara al menos ocho elementos en al menos cuatro de sus datos. La tabla tiene un título, sus cabeceras de fila y de columna están bien identificadas y, si los datos lo permiten, termina con una fila de resumen: totales, medias, máximos…
- **`sobre-los-datos.html`**, que cuenta qué API usas, quién la mantiene, su licencia y a quién hay que atribuirle los datos, y qué peticiones haces. Incluye un fragmento real del JSON, mostrado como código, junto al HTML en que lo has convertido, para que se vea la transformación.
- **`propuesta.html`**, con un formulario para proponer un elemento nuevo al catálogo, del que hablamos más abajo.

Además, en alguna página tiene que haber un vídeo o un audio que tenga sentido con tu temática: un tráiler, una entrevista, un sonido… Puede ser un fichero tuyo o estar insertado desde otra plataforma.

### Cómo tiene que ser el HTML

Cada página es un documento HTML5 completo: en español, con la codificación correcta, preparado para verse en el móvil, con su propio título de pestaña y una descripción para los buscadores.

Alguien que lea tu código, sin fijarse en ninguna clase, tiene que reconocer en todas las páginas dónde están la cabecera, la navegación principal, el contenido principal y el pie. La navegación es la misma en todo el sitio, y además indica de forma accesible en qué página te encuentras. Dentro de cada página hay un único título principal, y los encabezados forman una jerarquía continua, sin saltar niveles.

Piensa en cada elemento del catálogo y en cada ficha como en algo que podría publicarse por separado en otro sitio y seguiría teniendo sentido; eso te dice cómo marcarlo. En las fichas vas a encontrarte muchos datos que se leen como «nombre: valor» (la altura, el país, el año…): márcalos como lo que son, no como párrafos sueltos. Las fechas tienen que poder interpretarse por una máquina, y las cifras llevan siempre su unidad.

Las imágenes tienen un texto alternativo que dice lo que aportan, no lo que se ve, y declaran sus dimensiones. Las que van acompañadas de un pie forman una unidad con él. Guárdalas en `assets/img`, con nombres en minúsculas y sin espacios.

Todos los enlaces internos usan rutas relativas, y funcionan también desde las fichas, que están en una subcarpeta. Al principio de cada página hay un enlace para saltar directamente al contenido principal, y todo el sitio se puede recorrer solo con el teclado.

No uses ningún elemento ni atributo obsoleto, y recurre a `<div>` solo cuando no haya ninguna etiqueta que describa lo que estás agrupando. Sangra bien el código y pon comentarios donde ayuden a orientarse, no en cada línea.

Por último, el contenido es el real de la API, nunca *lorem ipsum*. Si los datos vienen en inglés, puedes dejarlos así, pero la navegación, los títulos y los textos que escribes tú van en español.

### El formulario de propuesta

El formulario es la otra cara del JSON. Si alguien quisiera añadir un elemento nuevo a tu catálogo, ¿qué datos tendría que darte y de qué tipo serían? Vuelve a tu tabla de campos y diseña el formulario a partir de ella, de forma que cada control corresponda al tipo de dato de su campo: un número con un rango razonable, una fecha, la URL de una imagen, un valor que solo puede elegirse de una lista cerrada, un texto largo para la descripción…

El formulario tiene al menos ocho campos, agrupados por temas. Cada etiqueta está asociada a su control, se distinguen claramente los campos obligatorios de los opcionales y el navegador valida lo que tenga sentido validar: longitudes, rangos, formatos. Por ahora no tiene que enviarse a ningún servidor.

### Validar y cerrar la fase

Antes de dar la fase por terminada, pasa todas las páginas por el [validador del W3C](https://validator.w3.org/) y corrige todos los errores, igual que hiciste con el wireframe. Los avisos que decidas no corregir, justifícalos en el README.

Al final de esta fase, tu repositorio tendrá esta forma:

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

En el README, además del apartado sobre la API y la tabla de campos, explica qué hay en cada página, cuenta dos o tres decisiones de marcado en las que dudaste entre varias opciones (y por qué te quedaste con la que elegiste) y deja constancia de la validación.

Ve guardando el trabajo con commits frecuentes, al menos seis en esta fase, con mensajes que expliquen qué has hecho. Cuando la termines, marca ese último commit con la etiqueta `fase-1` y súbela a GitHub: lo que corrijo de esta fase es lo que hay en esa etiqueta.

## Fase 2 · La presentación

Ahora sí, toca darle al sitio su aspecto. Si la estructura de la primera fase es buena, el HTML apenas debería cambiar; si para conseguir un diseño te ves obligado a rehacerla, probablemente la estructura no lo era.

### Cómo tiene que ser el CSS

Todo el estilo del sitio está en un único fichero CSS externo, enlazado desde todas las páginas, y en el HTML no queda ni un solo estilo. Los colores, las tipografías y los espaciados se definen una sola vez como variables, de forma que cambiar el color principal del sitio sea cuestión de tocar una línea. Las clases siguen la nomenclatura BEM de forma coherente, y el fichero está organizado en secciones con comentarios.

El diseño se piensa primero para un móvil de 360 px de ancho y después se adapta a tablet y a escritorio, con al menos dos puntos de ruptura. En ninguna página aparece desplazamiento horizontal a 360 px. El catálogo cambia el número de columnas según el ancho disponible, y las fichas se organizan de forma distinta en el móvil y en el escritorio. La tabla comparativa también se tiene que poder leer en el móvil; cómo lo consigues lo decides tú, y lo explicas en el README. Las imágenes se adaptan a su contenedor sin deformarse.

El sitio tiene un modo oscuro que se activa solo, según la preferencia del sistema. Los elementos con los que se interactúa tienen transiciones, y hay al menos una animación que aporte algo a la experiencia; si la persona usuaria ha pedido en su sistema reducir el movimiento, tu sitio lo respeta.

Todo elemento interactivo muestra un foco visible, y el contraste entre el texto y el fondo cumple el nivel AA en los dos modos de color. El formulario está diseñado completo, incluidos los estados de un campo válido y uno inválido. Y la tipografía marca una jerarquía clara y se lee con comodidad.

### Validar, revisar la accesibilidad y publicar

Pasa la hoja de estilos por el [validador de CSS del W3C](https://jigsaw.w3.org/css-validator/) y vuelve a validar el HTML. Después analiza la accesibilidad de al menos tres páginas con Lighthouse, que está en las herramientas de desarrollo del navegador, o con [WAVE](https://wave.webaim.org/), y corrige lo que te señalen. Por último, publica el sitio con GitHub Pages y pon la dirección en el README y en la descripción del repositorio.

En esta fase añades la carpeta `css/` con tu `styles.css`, y el README crece con la paleta de colores y las tipografías que has elegido, tus decisiones de diseño adaptable (incluida la de la tabla), capturas del sitio en móvil y en escritorio y en los dos modos de color, los enlaces a los resultados de validación, lo que encontró el análisis de accesibilidad y cómo lo corregiste, y la dirección del sitio publicado.

Cierra el README con un párrafo breve sobre qué te ha aportado separar el contenido de la presentación. Que no sea teoría: cuenta un cambio concreto que hiciste una sola vez en la hoja de estilos y que se aplicó en todas las páginas.

Igual que antes, haz al menos seis commits durante la fase y marca el último con la etiqueta `fase-2`.

## Cómo se evalúa

Este proyecto evalúa los diez criterios del RA2. Cada criterio se califica de 0 a 10 con la rúbrica que tienes a continuación, y esa nota cuenta la mitad de la calificación del criterio; la otra mitad sale de la prueba práctica de la unidad. Se valora el razonamiento, no solo el resultado: algo que no funciona del todo pero demuestra que entiendes lo que estabas haciendo también puntúa.

Hay dos cosas que afectan a todo el proyecto. Si el sitio no se puede abrir desde GitHub Pages, o hay rutas rotas a imágenes, páginas u hoja de estilos, los criterios afectados no pueden pasar de un 5. Y lo que no esté en las etiquetas `fase-1` y `fase-2` del repositorio no se evalúa.

## Rúbrica

### 2.a · Identificar etiquetas y atributos de HTML

Se mira en el marcado de todas las páginas de la primera fase.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Cada contenido usa la etiqueta que describe su significado, y las decisiones dudosas están razonadas en el README. Los atributos están completos y son los adecuados: idioma, metadatos, textos alternativos, fechas para máquinas, tipos y restricciones del formulario. Las tres fichas comparten exactamente la misma estructura. |
| Notable (7–8) | El marcado es semántico en casi todo el sitio, con algún elemento genérico donde había uno más preciso o algún atributo útil que falta. |
| Suficiente (5–6) | La estructura general es correcta, pero hay varios contenidos marcados por su aspecto y no por su significado, o faltan atributos en imágenes, fechas o formulario. |
| Insuficiente (0–4) | Se abusa de los elementos genéricos, la jerarquía de encabezados está rota o faltan los atributos básicos. |

### 2.b · Utilizar herramientas en línea para crear contenido web

Se mira en el repositorio, el historial de Git, el sitio publicado en GitHub Pages y la exploración de la API.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Hay al menos seis commits descriptivos por fase que cuentan cómo avanzó el proyecto, y las etiquetas `fase-1` y `fase-2` están en su sitio. El sitio está publicado y funciona. Las respuestas JSON están guardadas en `datos/` y las peticiones a la API están documentadas. |
| Notable (7–8) | Está todo, pero los mensajes de los commits son algo genéricos o el trabajo se concentra en pocos días. |
| Suficiente (5–6) | El repositorio y el sitio publicado funcionan, pero el historial es pobre (menos commits de los pedidos o con mensajes poco útiles), o falta la carpeta `datos/`. |
| Insuficiente (0–4) | El sitio no está publicado, el trabajo se ha subido en uno o dos commits o no hay rastro de la exploración de la API. |

### 2.c · Identificar etiquetas para incluir elementos multimedia

Se mira en las imágenes de la portada, el catálogo y las fichas, y en el vídeo o audio.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Todas las imágenes tienen un texto alternativo útil y declaran sus dimensiones, y las que llevan pie forman una unidad con él. El vídeo o audio tiene controles, encaja con el contenido y ofrece una alternativa a quien no pueda reproducirlo. Los ficheros están ordenados en `assets/`. |
| Notable (7–8) | El multimedia está bien integrado, con algún texto alternativo genérico («imagen de…») o alguna dimensión sin declarar. |
| Suficiente (5–6) | Las imágenes y el vídeo o audio están, pero hay textos alternativos vacíos o repetidos, o el multimedia no tiene relación con el contenido que lo rodea. |
| Insuficiente (0–4) | Faltan imágenes, no hay vídeo ni audio o se cargan con rutas rotas. |

### 2.d · Emplear lenguajes de marcas para transmitir información

Es el criterio central del proyecto. Se mira en la tabla de campos del README y en cómo se convierten los datos del JSON en HTML en el catálogo, las fichas, la comparativa y la página sobre los datos.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | La tabla de campos es completa y está razonada, y el marcado la respeta con coherencia en todo el sitio. Cada dato está en su forma más significativa: pares nombre–valor, tablas con cabeceras de fila y de columna, elementos que se sostienen solos. El fragmento de JSON y su versión en HTML muestran con claridad la transformación. |
| Notable (7–8) | La transformación es correcta y coherente, con algún dato presentado de forma más pobre de lo que permitía, por ejemplo como texto suelto cuando era un par nombre–valor. |
| Suficiente (5–6) | Los datos de la API están en el sitio, pero el marcado cambia de una página a otra o la tabla comparativa no identifica bien sus cabeceras. |
| Insuficiente (0–4) | El contenido no sale de la API, es de relleno o no tiene estructura. |

### 2.e · Describir y aplicar las propiedades básicas de CSS

Se mira en la hoja de estilos y en el aspecto final del sitio.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | El catálogo y las fichas están maquetados con técnicas modernas de disposición, y la tipografía, el color y el espaciado crean una jerarquía clara. El modo oscuro está completo, las transiciones y la animación aportan algo y el formulario está diseñado entero, con sus estados. |
| Notable (7–8) | El diseño es sólido y está completo, con algún detalle descuidado: un estado sin diseñar o zonas sin adaptar al modo oscuro. |
| Suficiente (5–6) | El sitio tiene un diseño propio, pero falta alguno de los requisitos (modo oscuro, animación, estados del formulario) o la maquetación se apoya en trucos frágiles. |
| Insuficiente (0–4) | El diseño es mínimo o estropea el contenido, y faltan varios requisitos. |

### 2.f · Crear y enlazar hojas de estilo

Se mira en la organización de la hoja de estilos, en la separación entre contenido y presentación y en el párrafo final del README.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Hay un único fichero externo enlazado en todas las páginas, también en las fichas con su ruta relativa, y no queda ningún estilo en el HTML. Las variables recogen todos los valores que se repiten, BEM es coherente y el fichero está ordenado por secciones. El README explica con un ejemplo real la ventaja de separar contenido y presentación. |
| Notable (7–8) | La separación es correcta y la organización buena, con algún valor repetido que debería ser una variable o alguna clase que se sale de la nomenclatura. |
| Suficiente (5–6) | La hoja de estilos es externa, pero está desordenada o se reutiliza poco, o la reflexión del README es genérica. |
| Insuficiente (0–4) | Hay CSS en la primera fase, estilos en atributos o en la cabecera en la segunda, o páginas que no cargan la hoja de estilos. |

### 2.g · Validar documentos HTML y CSS

Se mira volviendo a pasar por el validador el HTML de las dos etiquetas y el CSS, y en lo que recoge el README.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Todas las páginas y la hoja de estilos validan sin errores, y los avisos están corregidos o justificados. El README enlaza los resultados, y el historial muestra que se ha validado durante el desarrollo y no solo al final. |
| Notable (7–8) | No hay errores, pero quedan avisos sin justificar o faltan resultados en el README. |
| Suficiente (5–6) | Hay algún error menor en alguna página que no afecta a la estructura. |
| Insuficiente (0–4) | Hay errores que afectan a la estructura, como etiquetas sin cerrar o elementos mal anidados, o no hay constancia de haber validado. |

### 2.h · Documentar el código empleado

Se mira en el README de las dos fases y en los comentarios del HTML y del CSS.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | El README está completo y bien organizado; otra persona podría entender el proyecto y continuarlo sin preguntarte nada. La tabla de campos y las decisiones de marcado y de diseño están razonadas, no solo enumeradas. Los comentarios del código orientan sin estorbar. |
| Notable (7–8) | La documentación está completa, con algún apartado escueto o decisiones que se cuentan pero no se justifican. |
| Suficiente (5–6) | El README cubre lo mínimo o el código apenas tiene comentarios. |
| Insuficiente (0–4) | Falta el README o no explica nada del proyecto. |

### 2.i · Valorar la importancia de la accesibilidad web

Se mira recorriendo el sitio con el teclado, comprobando el contraste y el formulario, y en el análisis de accesibilidad del README.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | Todo el sitio se recorre con el teclado, con el foco siempre visible y el enlace para saltar al contenido. El contraste cumple el nivel AA en los dos modos y se respeta la preferencia de movimiento reducido. El análisis con Lighthouse o WAVE está documentado, junto con lo que se corrigió a raíz de él. |
| Notable (7–8) | El sitio es accesible en lo esencial, con algún fallo puntual: un foco poco visible o un contraste justo en uno de los modos. |
| Suficiente (5–6) | Se cumple lo básico (textos alternativos, etiquetas del formulario, idioma), pero hay problemas de foco o de contraste, o falta el análisis. |
| Insuficiente (0–4) | Hay partes del sitio que no se pueden usar con el teclado, el formulario no tiene etiquetas o el contraste es claramente insuficiente. |

### 2.j · Diseñar páginas web adaptadas a dispositivos móviles

Se mira en el sitio publicado, a 360 px, en tablet y en escritorio.

| Nivel | Descripción |
|---|---|
| Excelente (9–10) | El diseño parte del móvil y se adapta con naturalidad en cada punto de ruptura. No hay desplazamiento horizontal en ninguna página, el catálogo y las fichas reorganizan su contenido y la tabla comparativa tiene en el móvil una solución razonada y cómoda. |
| Notable (7–8) | El sitio se adapta bien, con algún desajuste puntual en algún ancho intermedio. |
| Suficiente (5–6) | El sitio se ve en el móvil, pero se nota que está pensado para escritorio y simplemente encogido, o la tabla obliga a desplazarse sin control. |
| Insuficiente (0–4) | Hay desplazamiento horizontal, contenido cortado o el sitio no se puede usar a 360 px. |
