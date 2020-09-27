import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAppComponent } from './containers/robo-app/robo-app.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'robo',
    component: RoboAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
