export type Locale = 'es' | 'ca' | 'en';

export interface ProjectText {
  title: string;
  description: string;
  /** Párrafos de la página de detalle; si no los rellenas, se usa `description`. */
  detail?: string[];
  /** Puntos clave ("qué hace") de la página de detalle. */
  features?: string[];
  /** Pasos de un esquema de flujo (p. ej. backoffice → API → web). */
  flow?: string[];
  /** Texto alternativo de cada foto de la galería, en el mismo orden que `gallery`. */
  galleryAlts?: string[];
}

export interface Translations {
  documentTitle: string;
  nav: {
    projects: string;
    services: string;
    about: string;
  };
  hero: {
    titleWords: string[];
    subtitle: string;
    linkProjects: string;
    linkContact: string;
  };
  catalog: {
    heading: string;
    cta: string;
    privateLabel: string;
    viewProjectAria: string;
    /** Clave = código de proyecto (project.code) definido en data/projects-data.ts. */
    projects: Record<string, ProjectText>;
  };
  services: {
    heading: string;
    intro: string;
    items: { title: string; description: string; /** Enlace opcional dentro del servicio (p. ej. una demo). */ link?: { label: string; url: string } }[];
    processHeading: string;
    process: { title: string; text: string }[];
    cta: string;
    /** Enlace dentro de cada servicio desplegado. */
    ask: string;
    /** Asunto del correo que se abre al pulsar el botón de contacto. */
    ctaSubject: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    stack: string;
  };
  detail: {
    back: string;
    visitApp: string;
    flowHeading: string;
    featuresHeading: string;
    stackHeading: string;
    notFound: string;
    carouselPrev: string;
    carouselNext: string;
    carouselGoTo: string;
  };
}
