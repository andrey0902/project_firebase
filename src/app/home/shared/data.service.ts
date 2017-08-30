/**
 * Created by andrei on 27.08.2017.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  private dbUsers: FirebaseListObservable<any>;
  private linkDb: FirebaseListObservable<any>;
  private linkDb1: FirebaseListObservable<any>;
  private path: string;

  constructor(public db: AngularFireDatabase) {
    this.dbUsers = this.db.list('users/');
    this.linkDb = this.db.list('/ios/');
    /*this.linkDb1 = this.db.list('/ios/chart-data/total/downloads/');*/
    /*this.linkDb1 = this.db.list('/ios/chart-data/total/users/');*/
  }
  public set totalPath(path: string) {
    if (path) {
      this.path = path;
    }
  }
  public setData(data: any, path: string) {
    this.linkDb.set(path, data);
   /* this.linkDb1.set(path, data);*/
  }
  public getData(path: string) {
    return this.db.object(path);
  }
  public getNewUsers() {
    return this.dbUsers;
  }
}
