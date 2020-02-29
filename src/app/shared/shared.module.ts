import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterialModule } from './meterial/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MeterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MeterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
