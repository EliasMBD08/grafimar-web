import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sections/home/home.component'),
    loadChildren: () => import('./sections/home/home.routes')
  },
  {
    path: 'servicios',
    loadComponent: () => import('./sections/servicios/servicios.component'),
    loadChildren: () => import('./sections/servicios/servicios.routes')
  },
  {
    path: "categoria/:nombre_categoria",
    loadComponent: () => import('./sections/servicios/components/categoria-detail/categoria-detail.component')
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./sections/nosotros/nosotros.component'),
    loadChildren: () => import('./sections/nosotros/nosotros.routes')
  },
  {
    path: 'contacto',
    loadComponent: () => import('./sections/contacto/contacto.component'),
    loadChildren: () => import('./sections/contacto/contacto.routes')
  },
];
