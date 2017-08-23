/**
 * Created by andrei on 22.08.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoContentComponent } from './not-found-404/no-content.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/404'
    },
    {
      path: '404',
      component: NoContentComponent,
      pathMatch: 'full',
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
