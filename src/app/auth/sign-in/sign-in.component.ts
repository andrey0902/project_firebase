import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  constructor(private authService: AuthService) {
  }

  public ngOnInit() {
    this.buildingForm();
  }
  public buildingForm() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      password: new FormControl(null, [Validators.minLength(5), Validators.maxLength(25), Validators.required])
    });
  }
  public login(e, form: FormGroup) {
    e.preventDefault();
    if (form.valid) {
      this.authService.login(form.value);
    }
    console.log(form.value);
  }
  public signInF() {
    this.authService.loginF();
  }
}
