import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./favorites.component'),
  },
] as Routes;
