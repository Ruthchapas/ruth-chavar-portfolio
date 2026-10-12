export interface GalleryItem {
  type: 'image' | 'video';
  /** Ruta relativa a public/ (p. ej. 'proyectos/medievalismes/01.jpg'). */
  src: string;
}

/**
 * Datos de un proyecto que NO dependen del idioma (título y descripción
 * viven en los JSON de i18n, ver src/app/i18n/locales/*.json, bajo
 * catalog.projects[code]).
 */
export interface ProjectMeta {
  /** Debe coincidir con una clave en catalog.projects de cada JSON de idioma. */
  code: string;
  /** Identificador para la URL. Solo hace falta si `url` es una ruta interna. */
  slug: string;
  /** Déjalo en '' si aún no lo has decidido: la tarjeta no lo mostrará. */
  year: string;
  /**
   * A dónde lleva la tarjeta al hacer clic:
   * - Una URL externa (empieza por 'http'): abre esa web en pestaña nueva.
   * - Una ruta interna (empieza por '/', p. ej. '/proyectos/mi-slug'): abre
   *   la página de detalle del proyecto dentro del propio portfolio.
   * - '' (vacío): proyecto privado sin enlace — la tarjeta se muestra
   *   igual pero no es clicable.
   */
  url: string;
  /**
   * Enlace público a la app/web para mostrar como botón en la página de
   * detalle (solo en proyectos con ruta interna). Vacío o sin definir: no
   * se muestra el botón.
   */
  externalUrl?: string;
  /** Ruta de la foto de portada, relativa a public/ (p. ej. 'proyectos/p01.jpg'). */
  image: string;
  /** Déjalo vacío ([]) si aún no lo has decidido: la tarjeta no mostrará stack. */
  stack: string[];
  /**
   * Fotos y/o vídeos para el carrusel de la página de detalle (solo se usa
   * en proyectos con ruta interna). Vacío o sin definir: la página de
   * detalle no muestra carrusel. El texto alternativo de cada elemento va
   * en los JSON de idioma, en `galleryAlts`, en el mismo orden.
   */
  gallery?: GalleryItem[];
  /** El único proyecto marcado así lleva el punto rojo — úsalo con cuentagotas. */
  featured?: boolean;
}
