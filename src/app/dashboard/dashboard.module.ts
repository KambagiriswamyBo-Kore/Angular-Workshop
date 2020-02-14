import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { WorkerDemoComponent } from './worker-demo/worker-demo.component';


@NgModule({
  declarations: [DashboardComponent, ScrollTopComponent, WorkerDemoComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
