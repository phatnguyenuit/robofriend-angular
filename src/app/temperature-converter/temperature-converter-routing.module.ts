import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperatureConverterComponent } from './temperature-converter.component';
import { SimpleComponent } from './simple/simple.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: '',
    component: TemperatureConverterComponent,
    children: [
      {
        path: '',
        component: SimpleComponent,
      },
      {
        path: 'reactive',
        component: ReactiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperatureConverterRoutingModule {}
