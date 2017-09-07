import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../core/session-storage.service';
import { UserModel } from '../../../users/user/shared/user.model';
import { AuthService } from '../../../auth/shared/auth.service';

@Component({
 selector: 'user-block',
 templateUrl: './user-block.component.html',
 styleUrls: ['./user-block.component.scss']
})

export class UserBlockComponent implements OnInit {
  public user: UserModel;
 constructor(private storageSession: SessionStorageService,
             private authService: AuthService) { }

 public ngOnInit() {
    this.user =  this.storageSession.user;
    console.log('this.user user component', this.user);
 }
 public logOut() {
   this.authService.logout();
 }
}
