class UploadAdapter {
  loader;  // your adapter communicates to CKEditor through this
  url;
  constructor(loader, url) {
    this.loader = loader;
    this.url = url;
    console.log('Upload Adapter Constructor', this.loader, this.url);
  }

  upload() {
    return new Promise((resolve, reject) => {
      console.log('UploadAdapter upload called', this.loader, this.url);
      console.log('the file we got was', this.loader.file);
      resolve({ default: 'http://localhost:8080/image/1359' });
    });
  }

  abort() {
    console.log('UploadAdapter abort');
  }
}


import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from 'app/@core/ckeditor.js';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-kora-editor',
  templateUrl: './kora-editor.component.html',
  styleUrls: ['./kora-editor.component.scss']
})
export class KoraEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  public isDisabled = false;
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  editorConfig = {
    // simpleUpload: {
    //   // The URL that the images are uploaded to.
    //   uploadUrl: '',

    //   // Headers sent along with the XMLHttpRequest to the upload server.
    //   headers: {
    //     'X-CSRF-TOKEN': 'CSFR-Token',
    //     Authorization: 'Bearer <JSON Web Token>'
    //   }
    // }

    // extraPlugins: [this.TheUploadAdapterPlugin]
  }
  constructor() { }

  ngOnInit(): void {
  }

  //  onReady( editor ) {
  //   editor.plugins.get( 'FileRepository' ).createUploadAdapter = loader => new Adapter( loader );
  // }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

  public onChange(event) {
    // const data = editor.getData();

    console.log(event);
  }

  TheUploadAdapterPlugin(editor) {
    console.log('TheUploadAdapterPlugin called');
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new UploadAdapter(loader, '/image');
    };
  }

}



