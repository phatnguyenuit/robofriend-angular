import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoboAppComponent } from './containers/robo-app/robo-app.component';
import { HomeComponent } from './containers/home/home.component';
import { RoboListComponent } from './components/robo-list/robo-list.component';
import { RoboComponent } from './components/robo/robo.component';
import { RoboFilterComponent } from './components/robo-filter/robo-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinComponent } from './components/spin/spin.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { AdDirective } from './directives/ad/ad.directive';
import { AddBannerComponent } from './components/ad-banner/ad-banner.component';
import { RoboJobAdComponent } from './components/ad/robo-job-ad/robo-job-ad.component';
import { RoboProfileAdComponent } from './components/ad/robo-profile-ad/robo-profile-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    RoboAppComponent,
    HomeComponent,
    RoboListComponent,
    RoboComponent,
    RoboFilterComponent,
    SpinComponent,
    RefreshButtonComponent,
    AdDirective,
    AddBannerComponent,
    RoboJobAdComponent,
    RoboProfileAdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
