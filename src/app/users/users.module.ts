import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
 imports: [
   CommonModule,
   UsersRoutingModule,
   SharedModule
 ],
 exports: [],
 declarations: [
   UsersComponent,
   UserComponent
 ],
 providers: [],
})
export class UsersModule { }
