export class UploadAdaptor {
    loader: any;
    xhr: any;
    constructor(loader) {
        this.loader = loader;
    }

    /*
    The upload() method must return a promise:
    resolved by a successful upload with an object containing information about the uploaded file (see the section about responsive images to learn more),
    rejected because of an error, in which case nothing is inserted into the content.
    */
    upload(): Promise<any> {
        return this.loader.file
            .then(file => new Promise((resolve, reject) => {
                // this._initRequest();
                // this._initListeners(resolve, reject, file);
                // this._sendRequest(file);
            }));
    }


    /*
    The abort() method must allow the editor to abort the upload process. It is necessary, 
    for instance, when the image was removed from the content by the user before the upload finished or the editor instance was destroyed.
    */
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }
}