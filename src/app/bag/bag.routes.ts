import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./bag.component'),
  },
] as Routes;
