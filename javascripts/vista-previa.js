/* ===========================================
   Pestañas "Código / Resultado" para los bloques de HTML
   -------------------------------------------
   Añade a cada bloque ```html una pestaña que muestra cómo se ve ese
   código en el navegador, con los estilos por defecto (sin el CSS de
   los apuntes). El resultado se pinta en un iframe aislado (sandbox),
   así que el código de ejemplo no puede afectar a la página.

   - Los bloques que solo tienen cosas de la cabecera (<meta>, <link>,
     <script>...) no llevan pestaña, porque no se vería nada.
   - Para quitar la pestaña a un bloque concreto, escríbelo así:
       ```{.html .no-preview}
   - Los formularios no se envían: al pulsar "Enviar" se muestra qué
     pares nombre=valor se mandarían.
   =========================================== */
(function () {
  "use strict";

  var contador = 0;

  /* Script que se inyecta dentro del iframe: comunica la altura y
     controla formularios y enlaces. */
  function scriptInterno(id) {
    return "<script>(function(){" +
      "var id=" + JSON.stringify(id) + ";" +
      // Se mide el <body> (con sus márgenes) y no el documento, porque el
      // documento nunca es más bajo que el propio iframe y no encogería.
      "function alto(){var b=document.body;if(!b)return;var cs=getComputedStyle(b);" +
        "var h=b.getBoundingClientRect().height+parseFloat(cs.marginTop)+parseFloat(cs.marginBottom);" +
        "parent.postMessage({lmVistaPrevia:id,alto:h},'*');}" +
      "if(window.ResizeObserver){new ResizeObserver(alto).observe(document.body||document.documentElement);}" +
      "window.addEventListener('load',alto);alto();" +
      "document.addEventListener('submit',function(e){" +
        "var f=e.target;if((f.getAttribute('method')||'').toLowerCase()==='dialog')return;" +
        "e.preventDefault();" +
        "var datos;try{datos=new FormData(f,e.submitter);}catch(x){datos=new FormData(f);}" +
        "var pares=[];datos.forEach(function(v,k){pares.push(k+'='+(typeof v==='string'?v:v.name));});" +
        "var metodo=(f.getAttribute('method')||'GET').toUpperCase();" +
        "var destino=f.getAttribute('action')||'(la misma página)';" +
        "var aviso=document.getElementById('lm-aviso-formulario');" +
        "if(!aviso){aviso=document.createElement('p');aviso.id='lm-aviso-formulario';" +
          "aviso.style.cssText='margin:1em 0 0;padding:.6em .8em;border:2px solid #1F0318;background:#FFF1F8;color:#1F0318;font:14px/1.4 system-ui,sans-serif;';" +
          "document.body.appendChild(aviso);}" +
        "aviso.textContent='✔ Formulario válido. Se enviaría por '+metodo+' a '+destino+': '+(pares.length?pares.join(' & '):'(ningún campo tiene name, no se enviaría nada)');" +
        "alto();" +
      "});" +
      "document.addEventListener('click',function(e){" +
        "var a=e.target.closest&&e.target.closest('a[href]');" +
        "if(a&&a.getAttribute('href').charAt(0)!=='#'){e.preventDefault();}" +
      "});" +
    "})();<\/script>";
  }

  /* ¿El fragmento tiene algo que se vea? */
  function tieneContenidoVisible(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    var cuerpo = doc.body;
    if (!cuerpo) return false;
    // Los "..." de los ejemplos abreviados no cuentan como contenido.
    if (cuerpo.textContent.replace(/\.\.\.|…/g, "").trim() !== "") return true;
    return !!cuerpo.querySelector(
      "img,picture,video,audio,iframe,input,select,textarea,button,table,hr,meter,progress,canvas,svg,details,dialog,br"
    );
  }

  function crearIframe(codigo, id) {
    var iframe = document.createElement("iframe");
    iframe.className = "lm-preview__iframe";
    iframe.title = "Resultado del ejemplo en el navegador";
    iframe.setAttribute("sandbox", "allow-scripts allow-forms");
    iframe.setAttribute("loading", "lazy");
    iframe.dataset.lmId = id;
    iframe.srcdoc = codigo + scriptInterno(id);
    return iframe;
  }

  function activar(pestanas, paneles, indice, mover) {
    pestanas.forEach(function (p, i) {
      var activa = i === indice;
      p.setAttribute("aria-selected", activa ? "true" : "false");
      p.tabIndex = activa ? 0 : -1;
      paneles[i].hidden = !activa;
    });
    if (mover) pestanas[indice].focus();
  }

  function prepararBloque(bloque) {
    if (bloque.dataset.lmPreview) return;
    bloque.dataset.lmPreview = "1";
    if (bloque.classList.contains("no-preview")) return;
    if (bloque.closest(".lm-preview")) return;

    var code = bloque.querySelector("pre > code");
    if (!code) return;
    var codigo = code.textContent;
    if (!tieneContenidoVisible(codigo)) return;

    var id = "lm-preview-" + (++contador);

    var envoltorio = document.createElement("div");
    envoltorio.className = "lm-preview";

    var lista = document.createElement("div");
    lista.className = "lm-preview__tabs";
    lista.setAttribute("role", "tablist");
    lista.setAttribute("aria-label", "Ver el código o el resultado");

    var nombres = ["Código", "Resultado"];
    var pestanas = nombres.map(function (nombre, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lm-preview__tab";
      b.id = id + "-tab-" + i;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", id + "-panel-" + i);
      b.textContent = nombre;
      lista.appendChild(b);
      return b;
    });

    var panelCodigo = document.createElement("div");
    var panelResultado = document.createElement("div");
    [panelCodigo, panelResultado].forEach(function (panel, i) {
      panel.id = id + "-panel-" + i;
      panel.className = "lm-preview__panel";
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", id + "-tab-" + i);
    });
    panelResultado.classList.add("lm-preview__panel--resultado");

    var nota = document.createElement("p");
    nota.className = "lm-preview__nota";
    nota.textContent = "Vista con los estilos por defecto del navegador. Los formularios no se envían.";

    bloque.parentNode.insertBefore(envoltorio, bloque);
    panelCodigo.appendChild(bloque);
    envoltorio.appendChild(lista);
    envoltorio.appendChild(panelCodigo);
    envoltorio.appendChild(panelResultado);

    var paneles = [panelCodigo, panelResultado];
    activar(pestanas, paneles, 0, false);

    pestanas.forEach(function (p, i) {
      p.addEventListener("click", function () {
        // El iframe se crea la primera vez que se abre la pestaña.
        if (i === 1 && !panelResultado.firstChild) {
          panelResultado.appendChild(crearIframe(codigo, id));
          panelResultado.appendChild(nota);
        }
        activar(pestanas, paneles, i, false);
      });
      p.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          var siguiente = (i + 1) % pestanas.length;
          pestanas[siguiente].click();
          pestanas[siguiente].focus();
        }
      });
    });
  }

  function iniciar() {
    document
      .querySelectorAll(".md-typeset div.highlight.language-html, .md-typeset div.language-html.highlight")
      .forEach(prepararBloque);
  }

  // Ajusta la altura de cada iframe a su contenido.
  window.addEventListener("message", function (e) {
    var datos = e.data;
    if (!datos || !datos.lmVistaPrevia) return;
    var iframe = document.querySelector('iframe[data-lm-id="' + datos.lmVistaPrevia + '"]');
    if (iframe && iframe.contentWindow === e.source) {
      iframe.style.height = Math.max(48, Math.ceil(datos.alto)) + "px";
    }
  });

  // Material carga las páginas sin recargar (navigation.instant):
  // document$ avisa cada vez que cambia el contenido.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(iniciar);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
