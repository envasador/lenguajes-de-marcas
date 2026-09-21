# Lenguajes de Marcas — Apuntes

Apuntes y proyectos del módulo **Lenguajes de Marcas y Sistemas de Gestión de la Información (LMSGI)**, ciclo de Desarrollo de Aplicaciones Web (DAW), IES Rafael Alberti (Cádiz).

Generado con [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), con una hoja de estilo propia de inspiración **neobrutalista** (`docs/stylesheet/extra.css`).

## Desarrollo local

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Abre `http://127.0.0.1:8000`.

## Publicar en GitHub Pages

1. Crea el repositorio en GitHub y sube este proyecto (ver instrucciones más abajo).
2. En `mkdocs.yml`, descomenta y ajusta `site_url` con la URL final de Pages.
3. En GitHub → **Settings → Pages**, selecciona como origen la rama `gh-pages`.
4. Cada `push` a `main` dispara `.github/workflows/deploy.yml`, que construye el sitio y lo publica en `gh-pages` automáticamente (usa `mkdocs gh-deploy`).

También puedes publicar manualmente:

```bash
mkdocs gh-deploy --force
```

## Estructura

```
docs/
├── index.md              # Portada con tabla de contenidos
├── apuntes/               # UD1 a UD5.5
├── proyectos/              # Proyectos de evaluación
├── assets/                # Imágenes, logos y PDFs compartidos
└── stylesheet/extra.css   # Estilo neobrutalista
```

## Licencia

CC BY-SA 4.0
