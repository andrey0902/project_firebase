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
      email: new FormControl(null, [Validators.minLength(5), Validators.maxLength(25), Validators.required]),
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
}
