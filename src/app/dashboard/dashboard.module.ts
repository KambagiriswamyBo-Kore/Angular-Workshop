import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { WorkerDemoComponent } from './worker-demo/worker-demo.component';
import { InsideZoomComponent } from './inside-zoom/inside-zoom.component';
import { FiltersNewComponent } from './filters-new/filters-new.component';
import { AutoSelectAllComponent } from './auto-select-all/auto-select-all.component';
import { SlidingPanelComponent } from './sliding-panel/sliding-panel.component';
import { KoraEditorComponent } from './kora-editor/kora-editor.component';


@NgModule({
  declarations: [DashboardComponent, ScrollTopComponent, WorkerDemoComponent, InsideZoomComponent, FiltersNewComponent, AutoSelectAllComponent, SlidingPanelComponent, KoraEditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
