# Ruth Chavar — portfolio personal

Sistema de diseño cerrado, construido paso a paso: personalidad, referencias
visuales, color, tipografía, layout y movimiento, en ese orden. Todo el
razonamiento está también en `guia-de-marca-ruth-chavar.html`, que puedes
volver a abrir cuando quieras recordar el porqué de una decisión.

Hecho con Angular 21 (standalone components, sin NgModules).

## Arrancar el proyecto

Necesitas Node.js 20 o superior.

```bash
npm install
npm start
```

Servidor de desarrollo en `http://localhost:4200`.

```bash
npm run build
```

genera la build de producción en `dist/portfolio-cultura-digital`.

## El sistema de diseño

**Color** (`src/styles.scss`) — dos lienzos, no cinco franjas:
- `--bg-dark` `#070306` / `--ink-light` `#f2e9d8` — cabecera, hero, proyectos, footer.
- `--bg-light` `#f2e9d8` / `--ink-dark` `#1f150e` — sobre mí, contacto.
- `--color-accent` `#d9a62d` (dorado) — el acento de interacción en todo el sitio: enlaces, hover, CTAs.
- `--color-wine` `#c30a05` (rojo vino) — un detalle raro y pequeño. **Nunca** como color de un texto grande — se probó y competía con el dorado. Su único uso real es la clase `.wine-dot`, un puntito de 6px junto al proyecto marcado como `featured: true`.

**Tipografía**:
- **Onest** (`--font-display`) — títulos.
- **Quicksand** (`--font-body`) — cuerpo de texto.
- **IBM Plex Mono** (`--font-mono`) — datos reales: año, stack.

**Layout**: composición asimétrica alineada a la izquierda, espaciosa a
propósito. Los proyectos muestran solo título y año; la descripción y el
stack se revelan al pasar el ratón o llegar con el teclado.

**Movimiento** — siempre respeta `prefers-reduced-motion`, nunca hay bucles
ni parpadeos, siempre responde a algo que haces tú:
- El titular del hero entra en cascada, palabra por palabra.
- Los enlaces se subrayan al pasar el ratón (clase `.underline-draw`).
- Cada sección aparece con un fundido suave la primera vez que entra en
  pantalla al hacer scroll.

## El vídeo del hero

No es un fondo detrás del texto — es su propio bloque, ancho completo,
justo debajo del título y la presentación (`hero.html`,
`.hero__video-frame`):

1. Copia tu archivo a `public/video/hero.mp4` (y, si tienes, una versión
   `.webm` — pesa menos y algunos navegadores la prefieren).
2. En `src/app/home/hero/hero.html`, descomenta las dos líneas `<source>`.
3. Opcional: añade una imagen de portada en `public/hero-poster.jpg`
   (se ve mientras el vídeo carga, o si el navegador bloquea el autoplay).
4. El texto "vídeo resumen de los proyectos" es un ejemplo — cámbialo o
   quítalo en `hero.html` (`.hero__video-caption`).

Si tienes activado "reducir movimiento" en el sistema operativo, el vídeo
ni se reproduce — se queda quieto, tal y como se decidió en el paso de
movimiento.

## "En qué ayudo"

Se quitó de la página por ahora, pero el componente sigue en
`src/app/home/expertise/`. Para recuperarlo: impórtalo en `home.ts` y
añade `<app-expertise data-reveal />` en `home.html`, donde quieras que
aparezca.

## Qué es cada archivo

```
src/app/
├── app.ts / app.html / app.scss     Cabecera y pie, siempre oscuros
├── app.routes.ts                    Rutas (por ahora solo la home)
├── models/project.ts                Forma de un proyecto (incluye `featured`)
├── data/projects-data.ts            Tus proyectos (contenido de ejemplo)
└── home/
    ├── home.ts       Revela cada sección al hacer scroll
    ├── hero/         Titular en cascada + hueco de vídeo — oscuro
    ├── catalog/      Proyectos, detalle oculto hasta hover/foco — oscuro
    ├── about/        Bio — claro
    ├── contact/      Email y redes — claro
    └── expertise/    "En qué ayudo" — no está en la página ahora mismo
```

## Primeros retoques

1. `src/app/data/projects-data.ts` — cambia los proyectos de ejemplo. Marca
   como mucho uno con `featured: true` (el punto rojo pierde su fuerza si
   se usa en varios a la vez).
2. `src/app/home/hero/hero.html` — el titular (cada palabra necesita su
   propio `<span class="word">` para que la cascada funcione) y tu vídeo.
3. `src/app/home/about/about.html` y `contact/contact.html` — bio y
   contacto reales.
4. `src/index.html` — título de la pestaña y meta descripción.
