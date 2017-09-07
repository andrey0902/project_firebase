/**
 * Created by andrei on 22.08.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { OtherGuardService } from '../core/other-guard.service';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      redirectTo: 'all',
      pathMatch: 'full',
      canActivate: [OtherGuardService]
    },
    {
      path: 'ios',
      component: HomeComponent,
      canActivate: [OtherGuardService]
    },
    {
      path: 'all',
      component: HomeComponent,
      canActivate: [OtherGuardService]
    },
    {
      path: 'android',
      component: HomeComponent,
      canActivate: [OtherGuardService]
    },
    {
      path: 'web',
      component: HomeComponent,
      canActivate: [OtherGuardService]
    }

  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
