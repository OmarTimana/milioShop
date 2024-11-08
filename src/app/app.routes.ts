import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./products/features/product-shell/product.route'), },
  { path: 'bag', loadChildren: () => import('./bag/bag.routes') },
  { path: 'categories', loadChildren: () => import('./categories/categories.routes') },
  { path: 'profile', loadChildren: () => import('./profile/profile.routes') },
  { path: '**', redirectTo: '', },
];
