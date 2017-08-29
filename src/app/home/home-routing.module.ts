/**
 * Created by andrei on 22.08.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'ios',
      component: HomeComponent,
    },
    {
      path: '',
      redirectTo: 'all',
      pathMatch: 'full'
    },
    {
      path: 'all',
      component: HomeComponent,
    },
    {
      path: 'android',
      component: HomeComponent,
    },
    {
      path: 'web',
      component: HomeComponent,
    }

  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
