import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterialModule } from './meterial/meterial.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MeterialModule
  ],
  exports: [
    MeterialModule
  ]
})
export class SharedModule { }
