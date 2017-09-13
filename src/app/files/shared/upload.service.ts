import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UploadStateService } from './upload-state.service';
@Injectable()
export class UploadService {
  public uploads: FirebaseListObservable<any>;
  private basePath: string = '/uploads';
  private uploadTask: firebase.storage.UploadTask;
  constructor(private db: AngularFireDatabase,
              private uploadStateService: UploadStateService) { }

  public pushUpload(upload: any) {
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploadStateService.state = Math.floor(upload.progress);
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }
  public getFile() {
    return this.db.list(`${this.basePath}/`);
  }
  // Writes the file details to the realtime db
  public saveFileData(upload: any) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
  public deleteUpload(upload: any) {
    this.deleteFileData(upload.$key)
      .then( () => {
        this.deleteFileStorage(upload.name);
      })
      .catch((error ) => {
      console.log(error);
    });
  }
  // Deletes the file details from the realtime db
  public deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
