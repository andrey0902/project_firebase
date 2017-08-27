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

  constructor(public db: AngularFireDatabase) {
    this.dbUsers = this.db.list('users/');
  }

  public getNewUsers() {
    return this.dbUsers;

    /*  return countUsers;*/
  }
}
