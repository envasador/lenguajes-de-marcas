# Práctica UT2 · Festival de Cortometrajes de la Bahía

Esta sesión la trabajas de forma autónoma. Tienes tres horas para validar el wireframe de la semana pasada y para convertir un texto plano en una página HTML5 bien estructurada, semánticamente correcta y validada. Tablas y formularios los veremos otro día: hoy no los necesitas.

## Organización de la sesión

| Hora | Actividad |
|---|---|
| 9:00 – 9:30 | Validar y corregir el wireframe de la semana pasada |
| 9:30 – 10:10 | Leer los apuntes y anotar tus dudas |
| 10:10 – 11:00 | Práctica del festival |
| *11:00 – 11:30* | *Recreo* |
| 11:30 – 12:10 | Práctica del festival (continuación) |
| 12:10 – 12:30 | Validar la página y guardar tu trabajo |

Crea al empezar un fichero `notas.txt` con cuatro apartados: *Validación del wireframe*, *Dudas*, *Árbol DOM* y *Retos*. Lo irás completando durante la sesión.

Esta práctica no se entrega. La corregiremos entre todos en la próxima sesión, así que lo importante es que llegues con tu código y tus notas listos para compartirlos y comentarlos.

## 1. Valida tu wireframe

Pasa el HTML del wireframe por el [validador del W3C](https://validator.w3.org/#validate_by_upload) (pestaña *Validate by File Upload*, elige el fichero y pulsa *Check*). Cada mensaje indica si es un *Error* o un *Warning* y en qué línea está. Los errores hay que corregirlos todos; los avisos, léelos y decide.

Corrige siempre empezando por el **primer** error: una etiqueta sin cerrar suele provocar varios errores en cadena, y al arreglarla desaparecen todos. Vuelve a validar después de cada cambio hasta ver *Document checking completed. No errors or warnings to show.*

| Mensaje del validador | Qué suele significar |
|---|---|
| *End tag for `body` seen, but there were open elements.* | Has dejado alguna etiqueta sin cerrar. |
| *Stray end tag `div`.* | Sobra una etiqueta de cierre. |
| *Element `li` not allowed as child of element `nav` in this context.* | Una etiqueta está donde no puede ir (aquí falta la `<ul>`). |
| *Duplicate ID `menu`.* | Has repetido un `id`; si necesitas repetirlo, usa `class`. |
| *Consider adding a `lang` attribute to the `html` start tag.* | Aviso: falta indicar el idioma del documento. |

En *Validación del wireframe* apunta cada error que tuviste, qué estaba mal y cómo lo corregiste.

## 2. Lee los apuntes

Lee en los apuntes de la UT2 estos apartados: [Encabezados](../apuntes/html5.md#encabezados-el-indice-de-tu-documento), [Párrafos, listas y otros bloques](../apuntes/html5.md#parrafos-listas-y-otros-bloques-de-contenido), [Etiquetas semánticas de texto](../apuntes/html5.md#etiquetas-semanticas-de-texto-casos-de-uso-concretos), [Enlaces](../apuntes/html5.md#enlaces-lo-que-convierte-un-documento-en-hipertexto), [figure y figcaption](../apuntes/html5.md#figure-y-figcaption), [details y summary](../apuntes/html5.md#details-y-summary) y [Buenas prácticas](../apuntes/html5.md#buenas-practicas-errores-que-conviene-evitar-desde-el-principio). No hace falta que lo memorices, pero sí que sepas dónde está cada cosa, porque vas a volver a ello durante la práctica.

Apunta en *Dudas* todo lo que no entiendas o quieras que se explique en clase.

## 3. El encargo

Un festival de cortometrajes ficticio necesita la página principal de su web. Te han pasado el contenido en bruto y tu trabajo es marcarlo con HTML, sin cambiar el texto y sin CSS: hoy importa la estructura, no el aspecto.

```text
FESTIVAL DE CORTOMETRAJES DE LA BAHÍA · 4ª edición

Menú: Inicio · Ganadores anteriores · Preguntas frecuentes · Contacto

Del 12 al 14 de noviembre de 2026, el FCB reúne en Cádiz cortometrajes de ficción, documental y animación realizados por estudiantes y creadores emergentes de toda Andalucía. Las proyecciones son gratuitas hasta completar aforo.

"Un cortometraje es una idea que no tiene tiempo para distraerse." — Lucía Ferrer, directora del festival, en la presentación de la edición de 2025.

[Imagen: el público en la sala principal durante la gala de clausura de 2025]
Pie de imagen: Gala de clausura de la 3ª edición, noviembre de 2025.

GANADORES ANTERIORES

"Marea baja" — Mejor cortometraje 2025
Reseña: Una pescadora jubilada vuelve cada madrugada al mismo muelle. Sin apenas diálogo, el corto construye una historia sobre la rutina y la pérdida que el jurado destacó por su fotografía y su montaje.
Escrita por Carlos Vidal el 20 de noviembre de 2025.
Comentarios del público:
  - Marta R.: "Me quedé sin palabras con el plano final."
  - Iván P.: "Demasiado lento para mi gusto, pero precioso."

"Píxel a píxel" — Mejor animación 2025
Reseña: Un corto de animación en stop-motion hecho íntegramente con piezas de plástico, que cuenta la vida de un pequeño robot que intenta reparar su propio cuerpo.
Escrita por Laura Gómez el 22 de noviembre de 2025.
Comentarios del público:
  - Sergio M.: "La mejor animación que he visto en un festival pequeño."

PREGUNTAS FRECUENTES
¿Quién puede presentarse? Cualquier persona residente en Andalucía, sin límite de edad.
¿Cuánto cuesta inscribirse? Nada. La inscripción es gratuita.
¿Puedo presentar más de un corto? Sí, hasta dos por persona.

CONTACTO
Organización del FCB · Asociación Cultural Bahía Audiovisual · Calle Ancha 10, 11001 Cádiz · info@festivalbahia.example

© 2026 Festival de Cortometrajes de la Bahía · Aviso legal · Política de privacidad
```

Para la imagen, busca en [Pexels](https://www.pexels.com/es-es/) una foto de público en una sala de cine (prueba con *cinema audience* o *sala de cine*). Sus fotos son gratuitas y se pueden usar sin pedir permiso. Descárgala en tamaño mediano, guárdala en una carpeta `img` junto a tu `index.html` y enlázala con una ruta relativa.

### Lo que tiene que cumplir tu página

- Es un documento HTML5 completo, en español, con la codificación correcta, preparado para móvil y con un título de pestaña que identifique el festival.
- Se distinguen sin leer ninguna clase la cabecera, el menú principal, el contenido principal y el pie.
- Cada bloque (ganadores, preguntas, contacto) tiene entidad propia y su encabezado, y la jerarquía de encabezados es continua.
- Los enlaces del menú llevan a su bloque dentro de la misma página.
- La cita de la directora está marcada como cita. La sigla FCB muestra su significado al pasar el cursor.
- La imagen y su pie forman una unidad, y el texto alternativo describe lo que aporta la imagen.
- Todas las fechas se pueden interpretar por una máquina.
- Cada reseña y cada comentario tendrían sentido publicados en otro sitio: piensa qué etiqueta es cada uno y cómo se anidan (el ejemplo de *Jurassic Park* de los apuntes te da la pista). La autoría y la fecha de cada reseña van en la zona que les corresponde dentro de la reseña.
- Las preguntas frecuentes se despliegan y pliegan una a una, sin JavaScript.
- Los datos de contacto están marcados como los de la entidad responsable de la página.
- Usa `<div>` solo si no hay ninguna etiqueta que describa lo que agrupas.

### El árbol DOM

En el apartado *Árbol DOM* de `notas.txt`, dibuja el árbol del `<body>` hasta el tercer nivel, como en los apuntes, leyendo tu código. Después compáralo con el de las herramientas del navegador (F12, pestaña *Elementos*) y anota si hay alguna diferencia y por qué crees que ocurre.

## 4. Valida y guarda tu trabajo

Pasa el `index.html` por el validador igual que el wireframe y corrige todos los errores.

Al terminar, guarda en una carpeta `ut2-festival` el wireframe corregido, el `index.html` del festival con su carpeta `img` y tu `notas.txt`, y tráela a la próxima sesión: los corregiremos en común, comparando soluciones y resolviendo las dudas que hayas anotado. Si no has terminado, no pasa nada: trae lo que tengas, porque una página incompleta pero bien razonada da tanto que hablar como una terminada.

## Retos para quien termine antes

1. Añade al principio de la página un enlace "Saltar al contenido" que lleve al contenido principal, pensado para quien navega con teclado.
2. Haz que las preguntas frecuentes funcionen como un acordeón: al abrir una, se cierra la que estuviera abierta.

Si haces alguno, anótalo en el apartado *Retos* de `notas.txt` para comentarlo en clase.
