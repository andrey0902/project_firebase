import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sing-up/sign-up.component';
import { AuthGuardService } from '../core/auth-guard.service';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AuthComponent,
      canActivate: [ AuthGuardService ],
      children: [
        { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
        { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
