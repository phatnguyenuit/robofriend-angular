import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TemperatureConverterRoutingModule } from './temperature-converter-routing.module';
import { TemperatureConverterComponent } from './temperature-converter.component';
import { SimpleComponent } from './simple/simple.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    TemperatureConverterComponent,
    SimpleComponent,
    ReactiveComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemperatureConverterRoutingModule,
  ],
})
export class TemperatureConverterModule {}
