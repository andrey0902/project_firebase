import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from './shared/user.model';
import { DataService } from '../../home/shared/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  public user: UserModel;
  public myForm: FormGroup;
  private userId: string;
  constructor(
    private activatedRouter: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params['id'];
    this.createForm();
    this.getDataUser(this.userId);
  }
  public setValue(value: any) {
    console.log(value);
    this.setIsActiveUser(value.checked);
  }
  public update( form: FormGroup) {
    console.log(form.value);
    if (form.valid) {
      this.dataService.updateUser(this.userId, form.value);
    }
  }
  //tslint:disable
  private createForm() {
    this.myForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      isActive: new FormControl(null)
    });
  }
  private patchValue(value: UserModel) {
    this.myForm.patchValue({
      name: value.name,
      email: value.email,
      isActive: value.isActive
    })
  }
  private setIsActiveUser(value: boolean) {
    this.myForm.patchValue({
      isActive: value
    });
  }
  private getDataUser(id) {
    this.dataService.getData(`/users/${id}`).subscribe((result) => {
    this.user =  new UserModel(1, result.email, '', result.hash, result.date, result.name, result.isActive, id);
    this.patchValue(this.user);
    });
  }
}
