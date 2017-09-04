import { Injectable } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//tslint:disable
@Injectable()
export class AuthService {
  public obj: any;
  private user: UserModel;
  private test: FirebaseListObservable<any[]>;
  private userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private aFD: AngularFireDatabase,
              private router: Router) {
    this.obj = this.aFD.object(`users`);
    this.test = this.aFD.list('users');
    this.test.forEach((e) => {
      console.log(e);
    });
    this.test.subscribe((e) => {
      console.log(e);
      console.log(55555);
    });
    console.log(this.test);
    console.log(' this.obj', this.obj);
  }

  public anyTest() {
    this.test.set('bbb', {name: 'lalala', email: 'lalala@lsalal', hash: 1})
  }

  public signUp(userData: FormGroup) {
    this.user = new UserModel(userData.value.email, userData.value.passwords.password, userData.value.passwords.passwordConfirm, userData.value.name);
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(
      (success) => {
        console.log('user after registration', success);
        if (success.uid) {
          this.addUserDB(this.user, success.uid);
        }
        this.router.navigate(['/sign-in']);
      }).catch(
      (err) => {
        console.log(err);
      });
  }

  public login(user: any) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((success) => {
      console.log('authorization', success);
      if (success.uid) {
        this.aFD.object(`users/${success.uid}`)
          .subscribe((user: any) => {
            console.log('user', user);
            if (user.hash === 0) {
              this.router.navigate(['/']);
            }
          }, (err) => {
            console.log(err);
          });
        this.aFD.list('users/', {query: {orderByChild: 'id', equalTo: success.uid}})
          .subscribe((user: any) => {
            console.log('user', user);
          });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  public addUserDB(user, uid) {
    this.aFD.object(`users/${uid}`).set({name: user.name, email: user.email, hash: 0, active: false, date: new Date().toString()});
  }
}
