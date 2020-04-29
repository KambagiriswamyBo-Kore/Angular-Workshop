import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-kora-editor',
  templateUrl: './kora-editor.component.html',
  styleUrls: ['./kora-editor.component.scss']
})
export class KoraEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
