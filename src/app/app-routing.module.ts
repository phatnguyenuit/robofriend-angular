import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'robos',
    pathMatch: 'full',
  },
  {
    path: 'robos',
    loadChildren: () => import('./robos/robos.module').then(m => m.RobosModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
];

routes.push({
  path: '**',
  component: NotFoundComponent,
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
