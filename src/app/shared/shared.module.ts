import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterialModule } from './meterial/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MeterialModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  exports: [
    MeterialModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class SharedModule { }
