import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Al cargar o recargar, quitamos el #fragmento de la URL para que el
// navegador no salte a esa sección y la página arranque siempre en el héroe.
if (location.hash) {
  history.replaceState(history.state, '', location.pathname + location.search);
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
