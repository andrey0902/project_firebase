import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: UsersComponent,
      children: [
        {
          path: 'users',
          component: UserListComponent
        },
        {
          path: 'user/:id',
          component: UserComponent
        }
      ]
    },
  ])],
  exports: [],
})
export class UsersRoutingModule {
}
