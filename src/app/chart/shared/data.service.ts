import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  private data: FirebaseListObservable<any>;
  private linkDb: any;

  constructor(private db: AngularFireDatabase) {
    this.linkDb = this.db.list('/ios/chart-data');
  }
  public setData(data: any, path: string) {
    this.linkDb.set(path, data);
  }
  public getData(path: string) {
    return this.db.list(path);
  }
}
