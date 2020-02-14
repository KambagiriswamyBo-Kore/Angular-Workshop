import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { WorkerDemoComponent } from './worker-demo/worker-demo.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'scroll',
    component: ScrollTopComponent
  },
  {
    path: 'worker',
    component: WorkerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
