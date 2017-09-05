import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sing-up/sign-up.component';
import { AuthService } from './shared/auth.service';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdIconModule,
  MdInputModule,

} from '@angular/material';
import { SessionStorageService } from './shared/session-storage.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    MdButtonModule,
    MdButtonToggleModule,

    MdIconModule,
    MdInputModule,
  ],
  exports: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthService,
    SessionStorageService
  ],
})
export class AuthModule {
}
