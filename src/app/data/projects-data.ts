import { ProjectMeta } from '../models/project';

// Título y descripción de cada proyecto viven en src/app/i18n/locales/*.json,
// bajo catalog.projects["P.0X"] — aquí solo va lo que no cambia por idioma.
//
// Las fotos van en public/proyectos/ — mientras no exista el archivo, la
// tarjeta muestra un fondo oscuro liso. Para el carrusel de la página de
// detalle, añade las fotos/vídeos a public/proyectos/<slug>/ y decláralos
// en el array `gallery` del proyecto (con su `galleryAlts` en los JSON).
export const PROJECTS: ProjectMeta[] = [
  {
    code: 'P.01',
    slug: 'grupcief-web',
    year: '2026',
    url: 'https://www.grupcief.com/esp',
    image: 'proyectos/grupcief-web.jpg',
    stack: ['Angular', 'TypeScript']
  },
  {
    code: 'P.02',
    slug: 'backoffice-grupcief',
    year: '2026',
    url: '/proyectos/backoffice-grupcief',
    image: 'proyectos/grupcief-backoffice.jpg',
    stack: ['Angular', 'SQL', 'API']
  },
  {
    code: 'P.03',
    slug: 'landing-formaciones',
    year: '2026',
    url: 'https://landings.grupcief.com/certificados-profesionales-barcelona',
    image: 'proyectos/grupcief-landing-formaciones.jpg',
    stack: ['Angular', 'TypeScript', 'Bootstrap']
  },
  {
    code: 'P.04',
    slug: 'medievalismes',
    year: '2026',
    url: '/proyectos/medievalismes',
    externalUrl: 'https://medievalismes.netlify.app',
    image: 'proyectos/medievalismes.jpg',
    stack: ['Angular', 'TypeScript', 'MapLibre GL', 'Sanity', 'Firebase', 'Netlify'],
    gallery: [
      { type: 'image', src: 'proyectos/medievalismes/01.jpg' },
      { type: 'image', src: 'proyectos/medievalismes/02.jpg' }
    ]
  }
];
