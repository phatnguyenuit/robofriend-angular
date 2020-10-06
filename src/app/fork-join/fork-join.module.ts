import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForkJoinRoutingModule } from './fork-join-routing.module';
import { ForkJoinComponent } from './fork-join.component';
import { RequestService } from './request/request.service';

@NgModule({
  declarations: [ForkJoinComponent],
  imports: [CommonModule, ForkJoinRoutingModule],
  providers: [RequestService],
})
export class ForkJoinModule {}
