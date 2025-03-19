import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage) },
  { path: 'reset-password', loadComponent: () => import('./pages/reset-password/reset-password.page').then(m => m.ResetPasswordPage) },
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'recetas', loadComponent: () => import('./pages/recetas/recetas.page').then(m => m.RecetasPage) },
  { path: 'receta-detalle/:id', loadComponent: () => import('./pages/receta-detalle/receta-detalle.page').then(m => m.RecetaDetallePage) },
  { path: '**', redirectTo: 'login' },
  {
    path: 'nueva-receta',
    loadComponent: () => import('./pages/nueva-receta/nueva-receta.page').then(m => m.NuevaRecetaPage)
  }

];
