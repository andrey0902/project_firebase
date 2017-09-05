import { Injectable } from '@angular/core';
import { UserModel } from '../../users/user/shared/user.model';

@Injectable()
export class SessionStorageService {
  public get user() {
    return this.jsonToObject(localStorage.getItem('user'));
  }
  public set user(value: UserModel) {
    localStorage.setItem('user', this.ObjectToJson(value));
  }
  private jsonToObject(value: any): any {
    return JSON.parse(value);
  }
  private ObjectToJson(value: any): string {
    return JSON.stringify(value);
  }
}
