import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {  Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SessionStorageService } from './session-storage.service';
import { UserModel } from '../../users/user/shared/user.model';

//tslint:disable
@Injectable()
export class AuthService {


  public obj: any;
  private userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private aFD: AngularFireDatabase,
              private router: Router,
              private sessionStorageService: SessionStorageService) {
    this.obj = this.aFD.object(`users`);
  }

  public signUp(userData: FormGroup) {
    let name = userData.value.name;
    let email = userData.value.email;
    let password  = userData.value.passwords.password;
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (success) => {
        console.log('user after registration', success);
        if (success.uid) {
          this.addUserDB(success.uid, name, email);
        }
        this.router.navigate(['/sign-in']);
      }).catch(
      (err) => {
        console.log(err);
      });
  }

  public loginF() {
   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => {
      if (res.operationType === 'signIn') {
        console.log('facebook', res);
        this.ifExistUserInDB(res.user.uid, res.user.displayName)
      }

    })
  }

  public login(user: any) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((success) => {
      console.log('authorization', success);
      if (success.uid) {
        this.getCurrentUser(success.uid);
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  public ifExistUserInDB(id, data) {
    this.aFD.object(`users/${id}`)
      .subscribe((user: any) => {
        if (user.$value || user.email) {
          this.sessionStorageService.user = this.createModelUser(user);
        /*  this.router.navigate(['/']);*/
          return;
        }
         this.addUserDB(data,'In FaceBook', id);
      }, (err) => {
        console.log(err);
      });
  }
  public getCurrentUser(id) {
    this.aFD.object(`users/${id}`)
      .subscribe((user: any) => {
        if (user.hash === 1) {
            this.sessionStorageService.user = this.createModelUser(user);
        /*  this.router.navigate(['/']);*/
        }
      }, (err) => {
        console.log(err);
      });
  }
  public createModelUser(data) {
    return new UserModel(0, data.email, '', data.hash, data.date, data.name, data.isActive,  data.$key);
  }

  public addUserDB(uid, name, email) {
    this.aFD.object(`users/${uid}`).set({
      name: name,
      email: email,
      hash: 1,
      active: false,
      date: new Date().toString()
    });
  }
  public isLogin(): boolean {
    return !!this.sessionStorageService.user;
  }
  public logout() {
    this.afAuth.auth.signOut();
  }
}
