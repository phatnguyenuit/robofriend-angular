import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./robos/robos.module').then(m => m.RobosModule),
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'temperature-converter',
    loadChildren: () =>
      import('./temperature-converter/temperature-converter.module').then(
        m => m.TemperatureConverterModule
      ),
  },
  {
    path: 'fork-join',
    loadChildren: () =>
      import('./fork-join/fork-join.module').then(m => m.ForkJoinModule),
  },
];

routes.push({
  path: '**',
  component: NotFoundComponent,
  pathMatch: 'full',
});

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
