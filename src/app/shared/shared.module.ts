import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterialModule } from './meterial/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MeterialModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    AngularEditorModule
  ],
  exports: [
    MeterialModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    AngularEditorModule
  ]
})
export class SharedModule { }
