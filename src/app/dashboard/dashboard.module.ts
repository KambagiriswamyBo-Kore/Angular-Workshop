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
import { AngularEditorComponent } from './angular-editor/angular-editor.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [DashboardComponent, ScrollTopComponent, WorkerDemoComponent, InsideZoomComponent, FiltersNewComponent, AutoSelectAllComponent, SlidingPanelComponent, KoraEditorComponent, AngularEditorComponent, MainNavComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class DashboardModule { }
