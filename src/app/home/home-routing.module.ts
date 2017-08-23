/**
 * Created by andrei on 22.08.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
      resolve: {
      }
    }
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
