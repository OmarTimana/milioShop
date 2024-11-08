import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./categories.component'),
  },
] as Routes;
