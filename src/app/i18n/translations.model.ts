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
