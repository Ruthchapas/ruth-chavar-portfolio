import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProjectDetail } from './project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Tu nombre — Desarrollo web para cultura y patrimonio'
  },
  {
    path: 'proyectos/:slug',
    component: ProjectDetail
  }
];
