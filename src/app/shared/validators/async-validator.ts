import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import { AsyncValidatorFn, FormControl, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { AuthService } from '../../auth/shared/auth.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';

import { Directive, Input, OnInit } from '@angular/core';
import { StateUsedEmailService } from './state-used-email';

@Directive({selector: '[my-async-validator]'})
export class AsyncValidatorDirective implements Input, OnInit {
  @Input() public myForm: FormGroup;
  @Input() public fieldName: string;
  private myFormControl: AbstractControl;
  constructor(private authService: AuthService,
              private stateUsedEmailService: StateUsedEmailService) {
  }
  public ngOnInit() {
    this.myFormControl = this.myForm.get(this.fieldName);
    this.myForm.get(this.fieldName).valueChanges.filter((val) => {
      return val.length >= 4;
    })
      .debounceTime(500)
      .map((value): any => {
        this.authService.checkEmail(value).then((res) => {
          if (res[0] === 'password') {
            this.setError();
            this.stateUsedEmailService.state = true;
          }
          return value;
        }).catch((e) => {
          /*console.log(e);*/
        } );
      }).subscribe();
  }

  private setError() {
    this.myFormControl.setErrors({emailValid: {value: true}});
  }
}
