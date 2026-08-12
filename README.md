# Mi CV — Simón Salamanca

Hoja de vida en línea construida con **React + Vite + Tailwind CSS**.

## Características

- Modo oscuro / claro con persistencia en `localStorage` y respeto a `prefers-color-scheme`
- Selector de idioma **ES / EN**
- Animaciones de scroll (IntersectionObserver)
- Carrusel de tecnologías responsive con soporte táctil
- Galería de **14 certificados** con filtros por categoría y modal de vista ampliada
- Descarga del CV en PDF (impresión con estilos `@media print`)

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # entorno de desarrollo
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build
npm run lint      # oxlint
```

## Estructura

```
public/files/          # imagen de perfil y certificados PDF
public/cv.html         # GENERADO por scripts/generate-cv.mjs (no editar a mano)
cv.template.html       # plantilla del CV formal (datos inyectados en build)
scripts/generate-cv.mjs# genera public/cv.html desde los datos del sitio
src/
  models/              # Modelos de dominio (POO): LocalizedText, Profile, Contact,
                       #   Technology, Project, EducationEntry, Certificate
  data/                # Fábricas de modelos: resume.js y certificates.js (fuente única)
  components/          # Header, Hero, About, Skills, Projects, Education, Certificates, Modal...
  context/             # ThemeContext (oscuro/claro) y LanguageContext (es/en)
  hooks/               # useScrollSpy, useReveal, useCarousel
  i18n/                # diccionario de traducciones (etiquetas de UI)
```

## Fuente única de contenido

Edita el contenido **solo** en:
- `src/data/resume.js` (perfil, habilidades, tecnologías, proyectos, educación)
- `src/data/certificates.js` (certificados)
- `src/i18n/translations.js` (etiquetas de UI / textos generales)

Tanto el sitio web como el CV formal (`/cv.html`) se construyen desde esos archivos.
`public/cv.html` se regenera automáticamente en cada `npm run dev` o `npm run build`
(script `predev`/`prebuild`). Si editas datos con el servidor en marcha, reinícialo
o ejecuta `node scripts/generate-cv.mjs`.

## Deploy

El build usa `base: './'` para poder desplegarse en cualquier subruta (GitHub Pages, Vercel, Netlify).

> La versión original (HTML/CSS/JS estáticos) quedó respaldada en `legacy/`.
