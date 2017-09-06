import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(private authService: AuthService) {
  }

  public ngOnInit() {
    this.createForm();
  }

  public registration(e: Event, form: FormGroup) {
    e.preventDefault();
    if (form.valid) {
      this.authService.signUp(form);
      console.log(e, form, form.valid);
    }
  }

  private createForm() {
    let password: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]);
    let passwordConfirm: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3), CustomValidators.equalTo(password)]);
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.minLength(3)]),
      passwords: new FormGroup({
        password,
        passwordConfirm
      })
    });
  }

}
