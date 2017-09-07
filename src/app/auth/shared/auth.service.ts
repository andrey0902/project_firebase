import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { SessionStorageService } from '../../core/session-storage.service';
import { UserModel } from '../../users/user/shared/user.model';

@Injectable()
export class AuthService {

  public obj: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private aFD: AngularFireDatabase,
              private router: Router,
              private sessionStorageService: SessionStorageService) {
    this.obj = this.aFD.object(`users`);
  }

  public signUp(userData: FormGroup) {
    let name = userData.value.name;
    let email = userData.value.email;
    let password = userData.value.passwords.password;
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (success) => {
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
          this.ifExistUserInDB(res.user.uid, res.user.displayName);
        }

      });
  }

  public checkEmail(email) {
    return this.afAuth.auth.fetchProvidersForEmail(email);
  }

  public login(user: any) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((success) => {
      if (success.uid) {
        this.getCurrentUser(success.uid);
      }
    });
  }

  public ifExistUserInDB(id, data) {
    this.aFD.object(`users/${id}`)
      .subscribe((user: any) => {
        if (user.$value || user.email) {
          this.sessionStorageService.user = this.createModelUser(user);
          this.router.navigate(['/']);
          return;
        }
        this.addUserDB(id, data, 'In FaceBook');
      }, (err) => {
        console.log(err);
      });
  }

  public getCurrentUser(id) {
    this.aFD.object(`users/${id}`)
      .subscribe((user: any) => {
        if (user.hash === 1) {
          this.sessionStorageService.user = this.createModelUser(user);
          this.router.navigate(['/']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  public createModelUser(data) {
    data.id = data.$key;
    data.role = '';
    data.index = 0;
    return new UserModel(data);
  }

  public addUserDB(uid, name, email) {
    this.aFD.object(`users/${uid}`).set({
      name,
      email,
      hash: 1,
      active: false,
      date: new Date().toString()
    });
  }

  public isLogin(): boolean {
    return !!this.sessionStorageService.user;
  }

  public logout() {
    this.afAuth.auth.signOut().then((res) => {
      this.sessionStorageService.user = null;
      this.router.navigate(['/sign-in']);
    });
  }
}
