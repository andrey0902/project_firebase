import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'user',
      component: UserComponent
    }
  ])],
  exports: [],
})
export class UsersRoutingModule {
}
