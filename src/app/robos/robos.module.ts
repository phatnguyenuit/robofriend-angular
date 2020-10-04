import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RobosRoutingModule } from './robos-routing.module';

import { AdDirective } from './directives/ad/ad.directive';

import { SpinComponent } from './components/spin/spin.component';
import { AddBannerComponent } from './components/ad-banner/ad-banner.component';
import { RoboFilterComponent } from './components/robo-filter/robo-filter.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { RoboListComponent } from './components/robo-list/robo-list.component';
import { RoboComponent } from './components/robo/robo.component';
import { RobosComponent } from './robos.component';

import { RoboService } from './services/robo.service';

@NgModule({
  declarations: [
    RobosComponent,
    RoboListComponent,
    RoboComponent,
    RoboFilterComponent,
    SpinComponent,
    AddBannerComponent,
    RefreshButtonComponent,
    AdDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RobosRoutingModule,
  ],
  providers: [RoboService],
})
export class RobosModule {}
