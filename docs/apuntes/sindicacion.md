# Sindicación de contenidos

!!! abstract "Resultados de aprendizaje y criterios de evaluación"

    **RA2.** Utiliza lenguajes de marcas para la transmisión y presentación de información a través de la web analizando la estructura de los documentos e identificando sus elementos.

    - **2.i)** Se han identificado las tecnologías en que se basa la sindicación de contenidos.
    - **2.j)** Se han reconocido los ámbitos de aplicación de la sindicación de contenidos.

    Estos son los criterios oficiales del Real Decreto 405/2023 que se trabajan en esta unidad. Cómo se evalúa cada uno lo tienes en la rúbrica de cada proyecto y de cada prueba.

Piensa en las webs que te interesan de verdad: el blog de un desarrollador al que sigues, el canal de un divulgador, las novedades de una librería que usas en tus proyectos, el boletín oficial donde salen las convocatorias de tu ciclo. Para enterarte de lo que publican tienes dos opciones: entrar en cada una de vez en cuando a ver si hay algo nuevo, o dejar que te avisen. La **sindicación de contenidos** es la segunda opción hecha estándar: el sitio publica, además de sus páginas, un fichero con sus últimas novedades, y un programa se encarga de consultarlo por ti y de reunir en un solo lugar lo nuevo de todos los sitios que sigues.

Ese fichero se llama **canal** o ***feed***, y el programa que lo lee, **lector de feeds** o **agregador**. Lo interesante para este módulo es qué es ese canal: un documento XML, es decir, un lenguaje de marcas más, con su propio vocabulario de etiquetas y sus propias reglas, igual que HTML. Todo lo que viste en la UT1 sobre documentos bien formados y válidos se aplica aquí tal cual.

## Cómo funciona

El mecanismo es sencillo, y conviene que lo tengas claro antes de ver ninguna etiqueta:

1. El sitio publica en una URL fija (por ejemplo, `https://ejemplo.org/feed.xml`) un documento con la información general del sitio y una lista de sus últimas publicaciones, cada una con su título, su enlace, un resumen y su fecha.
2. Tú das esa URL a tu lector de feeds. Lo que haces es **suscribirte**, pero el sitio no sabe que lo has hecho: no le das tu correo ni te registras en ningún sitio.
3. El lector vuelve a descargar el canal cada cierto tiempo (cada media hora, cada hora...), compara lo que encuentra con lo que ya tenía y te muestra solo lo nuevo.

Fíjate en dos consecuencias de este modelo. La primera, que **la iniciativa es del lector**, no del sitio: el canal no avisa de nada, es el lector el que pregunta. Por eso la sindicación no sirve para información que cambia cada segundo, como la cotización de una acción o el marcador de un partido en directo, pero es perfecta para contenido que se publica de vez en cuando. La segunda, que el contenido llega **sin el diseño del sitio**: el lector solo recibe los datos (título, resumen, fecha, enlace) y los presenta a su manera. Es el mismo principio de separar contenido y presentación que aplicas con CSS, llevado al extremo.

## RSS y Atom

Hay dos formatos de canal, y los dos están vivos y los entiende cualquier lector:

- **RSS 2.0** (*Really Simple Syndication*) se publicó en 2002 y es el más extendido. Su especificación está congelada desde 2003 y la mantiene el RSS Advisory Board. Es el formato de prácticamente todos los pódcasts.
- **Atom** nació en 2005 para resolver las ambigüedades de RSS, y es un estándar de la IETF, el organismo que publica los estándares de internet (el RFC 4287). Es más estricto: exige un identificador único y una fecha de actualización en cada entrada, y define con precisión si un texto es texto plano o HTML.

Antes de RSS 2.0 hubo otras versiones (RSS 0.91, RSS 1.0, este último basado en RDF) que hoy apenas verás. Que dos formatos con el mismo nombre (RSS 1.0 y RSS 2.0) sean en realidad familias distintas es un buen ejemplo de por qué conviene fijarse siempre en la versión exacta de un lenguaje de marcas.

### La estructura de un canal RSS 2.0

Un canal RSS es un documento XML cuyo elemento raíz es `<rss>`, con el atributo `version="2.0"`. Dentro hay un único `<channel>` con la información del sitio y, a continuación, un `<item>` por cada publicación. Este es el canal de noticias de un instituto ficticio:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Noticias del IES Bahía</title>
    <link>https://iesbahia.example/</link>
    <description>Novedades, plazos y actividades del IES Bahía.</description>
    <language>es-es</language>
    <lastBuildDate>Mon, 02 Nov 2026 09:00:00 +0100</lastBuildDate>

    <item>
      <title>Abierto el plazo de matrícula de FP Dual</title>
      <link>https://iesbahia.example/noticias/matricula-dual.html</link>
      <description>Hasta el 20 de noviembre en la secretaría del centro.</description>
      <pubDate>Mon, 02 Nov 2026 09:00:00 +0100</pubDate>
      <guid>https://iesbahia.example/noticias/matricula-dual.html</guid>
    </item>

    <item>
      <title>Jornada de puertas abiertas</title>
      <link>https://iesbahia.example/noticias/puertas-abiertas.html</link>
      <description>El 14 de noviembre, de 17:00 a 19:00.</description>
      <pubDate>Fri, 30 Oct 2026 12:30:00 +0100</pubDate>
      <guid>https://iesbahia.example/noticias/puertas-abiertas.html</guid>
    </item>
  </channel>
</rss>
```

El canal tiene tres elementos obligatorios: `<title>`, `<link>` (la dirección del sitio, no la del propio canal) y `<description>`. En cada `<item>` basta con que haya un título o una descripción, pero en la práctica se ponen siempre título, enlace, descripción y fecha. El `<guid>` es un identificador único y permanente de la publicación: es lo que usa el lector para saber si una entrada es nueva o ya la tenía, así que no debe cambiar aunque corrijas el título. Si es la URL de la publicación, como en el ejemplo, el lector lo sabe porque es una URL completa; si fuera un código inventado, habría que añadirle `isPermaLink="false"`.

Hay dos detalles que fallan una y otra vez:

- **Las fechas** de RSS siguen un formato antiguo, el del correo electrónico (RFC 822): día de la semana y mes abreviados en inglés, y la zona horaria al final, como `Mon, 02 Nov 2026 09:00:00 +0100`. Una fecha como `2026-11-02` o `lunes, 2 de noviembre` hace que el canal no sea válido.
- **El HTML dentro de la descripción** no se puede escribir tal cual, porque el analizador XML intentaría interpretar sus etiquetas como parte del canal. O se escapan los caracteres especiales (`&lt;p&gt;`) o se envuelve el contenido en una sección `<![CDATA[ ... ]]>`, que le dice al analizador que lo que hay dentro es texto y no marcas. Si la descripción es texto plano, no hace falta ninguna de las dos cosas.

### La misma información en Atom

Para que veas las diferencias, esta es la primera noticia como entrada de un canal Atom:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Noticias del IES Bahía</title>
  <link href="https://iesbahia.example/"/>
  <link rel="self" href="https://iesbahia.example/noticias.atom"/>
  <id>https://iesbahia.example/</id>
  <updated>2026-11-02T09:00:00+01:00</updated>
  <author>
    <name>IES Bahía</name>
  </author>

  <entry>
    <title>Abierto el plazo de matrícula de FP Dual</title>
    <link href="https://iesbahia.example/noticias/matricula-dual.html"/>
    <id>https://iesbahia.example/noticias/matricula-dual.html</id>
    <updated>2026-11-02T09:00:00+01:00</updated>
    <summary>Hasta el 20 de noviembre en la secretaría del centro.</summary>
  </entry>
</feed>
```

Fíjate en lo que cambia. Atom declara un **espacio de nombres** en el elemento raíz, como los que viste en la UT1: es lo que identifica sin ambigüedad que `<feed>` y `<entry>` son los de Atom. Los enlaces van en el atributo `href` de un elemento vacío, y el canal enlaza también a sí mismo con `rel="self"`. Los identificadores (`<id>`) y las fechas de actualización (`<updated>`) son obligatorios en el canal y en cada entrada. Y las fechas siguen el formato ISO que ya conoces del atributo `datetime` de HTML (RFC 3339), mucho más fácil de leer y de generar que el de RSS.

¿Cuál elegir? Para un sitio sencillo, cualquiera de los dos funciona. RSS 2.0 es más tolerante y está en todas partes; Atom es más preciso y se valida con menos sorpresas. Lo importante es que el que elijas sea válido y que sepas justificar por qué lo has elegido.

## Que el canal se pueda encontrar

Un canal que nadie sabe que existe no sirve de nada. Hay dos formas complementarias de darlo a conocer.

La primera es un **enlace visible** en la página, normalmente en el pie o junto a la lista de noticias, con un texto que diga qué es («Suscríbete a las noticias») y, si quieres, el icono naranja de RSS, que se reconoce a la primera.

La segunda es el **autodescubrimiento**: un `<link>` en la cabecera de la página que anuncia el canal a los navegadores y a los lectores. Así, basta con dar a un lector la dirección de la página, no la del canal, para que lo encuentre por sí mismo.

```html
<link rel="alternate" type="application/rss+xml" title="Noticias del IES Bahía" href="noticias.xml">
```

Es el mismo `rel="alternate"` que sirve para enlazar una versión de la página en otro idioma: el canal se considera otra forma de ofrecer el mismo contenido. Para un canal Atom, el `type` es `application/atom+xml`.

!!! info "Si abres un canal en el navegador"

    Hace años los navegadores mostraban los canales con un diseño propio y un botón para suscribirse. Hoy ya no: Firefox y Chrome muestran el XML en bruto o te ofrecen descargarlo. No es un error de tu canal. Para comprobar cómo se ve de verdad, añádelo a un lector de feeds.

## Validar el canal

Como cualquier documento XML, un canal tiene que estar bien formado, y además tiene que cumplir las reglas de su formato. El [servicio de validación de feeds del W3C](https://validator.w3.org/feed/) comprueba las dos cosas, tanto para RSS como para Atom: le das la URL del canal o pegas su código, y te indica cada error con su línea. Los más habituales son las fechas con un formato incorrecto, los caracteres sin escapar en las descripciones y los enlaces relativos (en un canal, todos los enlaces tienen que ser URL completas, porque el lector no sabe desde qué carpeta se leyó).

Para probarlo en un lector, tienes opciones gratuitas en todas las plataformas: [Feedly](https://feedly.com/) o [Inoreader](https://www.inoreader.com/) en el navegador, Thunderbird en el escritorio, NetNewsWire en macOS e iOS o Feeder en Android.

## Dónde tiene sentido la sindicación

La sindicación es útil cuando se cumplen tres condiciones: el contenido se publica **por entregas** (no es una página que se escribe una vez y ya está), hay gente que quiere **enterarse de lo nuevo sin tener que ir a buscarlo**, y lo que se publica es **público** para todo el que lo pida. Con esas tres preguntas puedes decidir casi cualquier caso:

- **Blogs y medios de comunicación**: el caso original. Casi todos los periódicos ofrecen canales por secciones.
- **Pódcasts**: un pódcast *es* un canal RSS. Cada episodio es un `<item>` que lleva el fichero de audio en un elemento `<enclosure>`, y las aplicaciones de pódcasts no son más que lectores de feeds especializados en audio.
- **Boletines y administraciones**: el BOE y muchos boletines autonómicos publican canales para seguir las disposiciones de una sección o de un organismo sin revisar el boletín cada día.
- **Desarrollo de software**: GitHub publica un canal Atom con las versiones de cada repositorio (añade `/releases.atom` a la dirección de cualquier repositorio), y muchas librerías y servicios anuncian así sus actualizaciones y sus incidencias.
- **Vídeo**: cada canal de YouTube tiene su propio feed, que permite seguirlo sin depender de las recomendaciones de la plataforma.
- **Integración entre sistemas**: como un canal son datos estructurados en una URL fija, otros programas pueden leerlo para reutilizar el contenido, por ejemplo para mostrar en una web las últimas entradas de otra o para publicar automáticamente las novedades en una red social.

Y donde no tiene sentido: en contenido que no cambia (una página de aviso legal o de contacto), en información que necesita llegar al instante (alertas, datos en tiempo real) y en información privada o personal (los mensajes de tu bandeja de entrada o el estado de tu pedido), porque un canal lo puede leer cualquiera que conozca su dirección.

Frente a otras formas de avisar, la sindicación tiene una ventaja que hoy se valora cada vez más: quien la usa decide qué sigue y en qué orden lo lee, sin algoritmos que filtren, sin dar su correo y sin tener que crearse una cuenta en ninguna plataforma. Darse de baja es tan sencillo como borrar el canal del lector.

## Recursos complementarios

- [Especificación de RSS 2.0 (RSS Advisory Board)](https://www.rssboard.org/rss-specification)
- [RFC 4287: The Atom Syndication Format](https://www.rfc-editor.org/rfc/rfc4287)
- [Servicio de validación de feeds del W3C](https://validator.w3.org/feed/)
- [Cómo funciona el autodescubrimiento de canales (RSS Advisory Board)](https://www.rssboard.org/rss-autodiscovery)
