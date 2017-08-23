import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sing-up/sign-up.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AuthComponent,
      resolve: {
      },
      children: [
        { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
        { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
