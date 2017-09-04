/**
 * Created by andrei on 27.08.2017.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserModel } from '../../users/user/shared/user.model';

@Injectable()
export class DataService {
  private dbUsers: FirebaseListObservable<any>;
  private linkDb: FirebaseListObservable<any>;
  private linkDb1: FirebaseListObservable<any>;
  private linkDBAny: FirebaseListObservable<any>;
  private path: string;

  constructor(public db: AngularFireDatabase) {
    this.dbUsers = this.db.list('users/');
    this.linkDb = this.db.list('/ios/');
    /*this.linkDb1 = this.db.list('/ios/chart-data/total/downloads/');*/
    /*this.linkDb1 = this.db.list('/ios/chart-data/total/users/');*/
  }
  public set connectLinkAny(path: string) {
    if (path) {
      console.log(path);
      this.path = path;
      this.linkDBAny = this.db.list(path);
    }
  }
  public setAnyData (path: string, data: any) {
    if (this.path) {
      this.linkDBAny.set(path, data);
    }
  }
  public setData(data: any, path: string) {
    this.linkDb.set(path, data);
   /* this.linkDb1.set(path, data);*/
  }
  public updateUser(key: string, value: any) {
    this.dbUsers.update(key, value);
  }
  public getData(path: string) {
    return this.db.object(path);
  }
  public getNewUsers() {
    return this.dbUsers;
  }
  public deleteUsers(id) {
    this.dbUsers.remove(id);
  }
  public creatingModal(usersList: any) {
    let result: UserModel[] = [];
    usersList.forEach((elem, index) => {
      result.push( new UserModel(index + 1, elem.email, elem.role, elem.hash, elem.date, elem.name, elem.isActive, elem.$key));
    });
    return result;
  }
  public toggleActivateUser(id: string, flag: boolean) {
    console.log(id, flag);
  }
}
