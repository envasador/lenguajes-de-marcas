# Práctica UT2 · Festival de Cortometrajes de la Bahía

Esta sesión la trabajas de forma autónoma. Tienes tres horas, los apuntes de la UT2 y un objetivo claro: convertir un texto plano, sin una sola etiqueta, en una página HTML5 bien estructurada, semánticamente correcta y validada. La semana pasada levantaste el esqueleto de una página a partir de un wireframe; hoy vas a rellenar un esqueleto parecido con contenido real, y eso te obliga a decidir qué etiqueta describe cada trozo de información.

Antes de escribir código, lee en los apuntes desde [Encabezados: el índice de tu documento](https://envasador.github.io/lenguajes-de-marcas/apuntes/html5/#encabezados-el-indice-de-tu-documento) hasta el final de la unidad. Es mucho contenido y no lo vas a necesitar todo hoy: los apartados de multimedia, elementos interactivos y cabecera puedes leerlos por encima. Céntrate en encabezados, listas, etiquetas semánticas de texto, enlaces, tablas, formularios y buenas prácticas. No hace falta que lo memorices, pero sí que sepas qué hay en cada apartado, porque vas a volver a él constantemente. Si algo no lo encuentras en los apuntes, tienes [lenguajehtml.com](https://lenguajehtml.com/html/) y [MDN](https://developer.mozilla.org/es/docs/Web/HTML) a tu disposición.

## Organización de la sesión

Dedica los primeros 45 minutos a la lectura. Mientras lees, apunta en un fichero `notas.txt` cualquier duda que te surja: lo que no entiendas, lo que te parezca contradictorio o lo que quieras que se explique en clase. Esas dudas son parte de la entrega y se resolverán en la próxima sesión, así que no te las guardes.

Después, unas dos horas para la práctica. Reserva los últimos 15 minutos para validar, hacer la captura y entregar. Si te sobra tiempo, tienes un apartado de retos al final.

## El encargo

La organización de un festival de cortometrajes ficticio necesita la página principal de su web. Te han pasado el contenido en bruto, tal cual lo escribieron en un documento de texto. Tu trabajo es marcarlo. No tienes que redactar nada nuevo ni cambiar el texto: tu decisión está en la etiqueta que envuelve cada fragmento, no en las palabras.

No necesitas CSS. La página se verá con los estilos por defecto del navegador y eso está bien: hoy importa la estructura, no el aspecto.

### Contenido en bruto

```text
FESTIVAL DE CORTOMETRAJES DE LA BAHÍA · 4ª edición

Menú: Inicio · Programa · Ganadores anteriores · Inscripción · Preguntas frecuentes · Contacto

Del 12 al 14 de noviembre de 2026, el FCB reúne en Cádiz cortometrajes de ficción, documental y animación realizados por estudiantes y creadores emergentes de toda Andalucía. Las proyecciones son gratuitas hasta completar aforo.

"Un cortometraje es una idea que no tiene tiempo para distraerse." — Lucía Ferrer, directora del festival, en la presentación de la edición de 2025.

[Imagen: el público en la sala principal durante la gala de clausura de 2025]
Pie de imagen: Gala de clausura de la 3ª edición, noviembre de 2025.

PROGRAMA
Jueves 12 de noviembre · 18:00 · Inauguración y Sección Oficial I · Sala Principal
Jueves 12 de noviembre · 20:30 · Sección Animación · Sala 2
Viernes 13 de noviembre · 18:00 · Sección Oficial II · Sala Principal
Viernes 13 de noviembre · 20:30 · Sección Documental · Sala 2
Sábado 14 de noviembre · 19:00 · Gala de clausura y entrega de premios · Sala Principal

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

INSCRIPCIÓN
Formulario para inscribir un cortometraje. Se piden estos datos:
  - Nombre completo (obligatorio)
  - Correo electrónico (obligatorio)
  - Título del cortometraje (obligatorio)
  - Duración en minutos (obligatorio, máximo 20)
  - Fecha de finalización del rodaje
  - Botón para enviar la inscripción

PREGUNTAS FRECUENTES
¿Quién puede presentarse? Cualquier persona residente en Andalucía, sin límite de edad.
¿Cuánto cuesta inscribirse? Nada. La inscripción es gratuita.
¿Puedo presentar más de un corto? Sí, hasta dos por persona.

CONTACTO
Organización del FCB · Asociación Cultural Bahía Audiovisual · Calle Ancha 10, 11001 Cádiz · info@festivalbahia.example

© 2026 Festival de Cortometrajes de la Bahía · Aviso legal · Política de privacidad
```

Para la imagen usa cualquier fotografía de marcador de posición, por ejemplo `https://picsum.photos/800/450`. Lo que se evalúa es cómo la describes, no qué imagen es.

### Lo que tiene que cumplir tu página

La página tiene que ser un documento HTML5 completo, en español, con la codificación correcta para que las tildes y la eñe se vean bien, preparado para verse en un móvil y con un título de pestaña que identifique el festival.

La estructura general debe dejar claro, sin leer ninguna clase, dónde está la cabecera de la página, cuál es el menú principal, cuál es el contenido principal y dónde está el pie. Una persona que navegue con lector de pantalla debería poder saltar directamente a cada una de esas zonas. Cada bloque del contenido en bruto (programa, ganadores, inscripción, preguntas, contacto) tiene que ser un bloque con entidad propia, con su propio encabezado, y la jerarquía de encabezados de toda la página tiene que ser continua, sin saltos de nivel.

Los enlaces del menú tienen que llevar a su bloque correspondiente dentro de la misma página.

La cita de la directora tiene que estar marcada como cita, con la persona que la dice identificada como tal. La sigla del festival tiene que mostrar su significado completo al pasar el cursor por encima. La imagen y su pie tienen que formar una unidad, y el texto alternativo tiene que describir lo que la imagen aporta, no el nombre del archivo.

El programa son datos tabulares de verdad, así que tienen que estar en una estructura que distinga los encabezados de las columnas de los datos. Todas las fechas que aparecen en la página (en el programa, en las reseñas, en la presentación del festival) tienen que poder interpretarse por una máquina, no solo leerse por una persona.

Cada reseña de los ganadores anteriores es una pieza que tendría sentido publicada en otro sitio, y lo mismo ocurre con cada comentario del público. Piensa bien qué es cada cosa y cómo se anidan: el criterio está en los apuntes, en el ejemplo de la reseña de *Jurassic Park*. La autoría y la fecha de cada reseña deben quedar en la zona que le corresponde dentro de la propia reseña.

El formulario de inscripción tiene que pedir exactamente los datos indicados. Cada campo tiene que tener su texto descriptivo asociado de forma que, al pulsar sobre ese texto, se active el campo. Los campos obligatorios no deben dejar enviar el formulario vacío, el correo tiene que validarse como correo y la duración no puede admitir valores no numéricos ni superiores a 20. Todo esto lo hace el navegador por sí solo; no uses JavaScript.

Las preguntas frecuentes tienen que poder desplegarse y plegarse individualmente, mostrando solo la pregunta hasta que se pulsa. Tampoco aquí hace falta JavaScript.

Los datos de contacto son los de la entidad responsable del contenido de la página, y así deben estar marcados.

Por último, no uses `<div>` salvo que no exista ninguna etiqueta que describa lo que estás agrupando. Si al terminar tienes más de dos o tres, revisa cada uno.

### El árbol DOM

Cuando termines el HTML, añade a tu `notas.txt`, debajo de las dudas, el árbol DOM del `<body>` de tu página dibujado como en los apuntes, hasta el tercer nivel de profundidad. Dibújalo tú leyendo tu código, no lo copies de las herramientas del navegador. Después ábrelo en las herramientas de desarrollo (F12, pestaña *Elementos*) y comprueba si coincide. Si no coincide, anota qué diferencia has encontrado y por qué crees que ocurre.

## Validación y entrega

Pasa tu `index.html` por el [validador del W3C](https://validator.w3.org/#validate_by_upload) usando la opción de subir el fichero. Corrige todos los errores. Los avisos (*warnings*) léelos y decide si tienen sentido en tu caso. Cuando el resultado sea limpio, haz una captura de pantalla completa del resultado en la que se vea el nombre del fichero validado.

Entrega en la tarea de Moodle un ZIP con el nombre `apellido_nombre_ut2_festival.zip` que contenga tres ficheros: `index.html`, `validacion.png` con la captura y `notas.txt` con tus dudas y el árbol DOM. La entrega se cierra al terminar la sesión. Si no has terminado, entrega lo que tengas: una página incompleta pero bien razonada vale más que nada.

## Retos para quien termine antes

Si te sobra tiempo, hay tres mejoras opcionales. Todas están explicadas en los apuntes, pero ninguna se pide en el enunciado principal. La primera: en el programa, el día se repite en varias filas seguidas; haz que cada día aparezca una sola vez ocupando todas las filas que le corresponden. La segunda: añade al formulario un campo para elegir la categoría del corto entre ficción, documental y animación, de forma que solo se pueda elegir una. La tercera: añade al principio de la página un enlace "Saltar al contenido" que lleve directamente al contenido principal, pensado para quien navega con teclado.

Si haces alguno, indícalo al final de `notas.txt` para que se tenga en cuenta.
