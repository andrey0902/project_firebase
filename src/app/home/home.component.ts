import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,
              private router: Router) {
    this.user = afAuth.authState;
  }
  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

  public onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword('vasa@gmail.com', 'password').then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login']);
        }).catch(
        (err) => {
          console.log(err);
        });
    }
  }
}
