import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StateUsedEmailService } from '../../validators/state-used-email';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'error-app',
  templateUrl: 'form-error.component.html',
  styleUrls: ['form-error.component.scss']
})

export class FormErrorComponent implements OnInit, Input, OnDestroy {
  @Input() public myFormControl: FormControl;
  @Input() public name: string;
  public showErrorMessage: string;
  private errorMessage = {
    maxlength: 'max length field 25',
    minlength: 'min length field 6',
    pattern: 'invalid pattern',
    required: 'field is required',
    equalTo: 'password do not equal',
    emailValid: 'is already in use'
  };
  private isSubscribe: Subject<any>;

  constructor(private stateUsedEmailService: StateUsedEmailService) {
  }

  public ngOnInit() {
    this.isSubscribe = this.stateUsedEmailService.state.subscribe(() => {
      this.restrictError();
    });
    this.myFormControl.valueChanges.subscribe(() => {
      if (this.restrictError()) {
        return;
      }
      this.showErrorMessage = null;
    });
  }

  public ngOnDestroy(): void {
    this.isSubscribe.unsubscribe();
  }

  private restrictError() {
    let error: any = this.myFormControl.errors;
    if (error) {
      let errorKey: string[] = Object.keys(error);
      for (let obj of errorKey) {
        this.showErrorMessage = this.errorMessage[obj];
      }
      return true;
    }
  }
}
