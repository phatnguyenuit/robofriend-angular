import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobosComponent } from './robos.component';

const routes: Routes = [{ path: '', component: RobosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobosRoutingModule {}
