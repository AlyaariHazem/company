import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'modules', pathMatch: 'full' },
    {
      path: 'modules',
      loadChildren: () =>
        import('./pages/home/home.module').then(m => m.HomeModule),
    },
];
