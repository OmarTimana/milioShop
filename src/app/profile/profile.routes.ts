import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./profile.component'),
    
  },
] as Routes;
