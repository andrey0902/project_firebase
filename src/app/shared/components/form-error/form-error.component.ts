import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-app',
  templateUrl: 'form-error.component.html',
  styleUrls: ['form-error.component.scss']
})

export class FormErrorComponent implements OnInit, Input {
  @Input() public myFormControl: FormControl;
  @Input() public name: string;
  public showErrorMessage: string;
  private errorMessage = {
    maxlength: 'max length field 25',
    minlength: 'min length field 6',
    pattern: 'invalid pattern',
    required: 'field is required',
    equalTo: 'password do not equal'
  };

  constructor() {
  }

  public ngOnInit() {
    console.log('this.formControl', this.myFormControl);
    this.myFormControl.valueChanges.subscribe((data) => {
      let error: any = this.myFormControl.errors;
      if (error) {
        let errorKey: string[] = Object.keys(error);
        for (let obj of errorKey) {
          this.showErrorMessage = this.errorMessage[obj];
          console.log(this.showErrorMessage);
        }
        return;
      }
      this.showErrorMessage = null;
    });
  }
}
