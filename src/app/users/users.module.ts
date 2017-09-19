import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { DataService } from '../home/shared/data.service';
import { UserItemComponent } from './user-item/user-item.component';
import {

  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdTableModule,
  MdSlideToggleModule

} from '@angular/material';
import { DateMy } from './user-list/shared/date-castom.pipe';
import { SimpleNotificationsModule } from 'angular2-notifications/dist';
@NgModule({
 imports: [
   CommonModule,
   RouterModule,
   ReactiveFormsModule,
   UsersRoutingModule,
   SharedModule,
   MdButtonModule,
   MdButtonToggleModule,
   MdCardModule,
   MdIconModule,
   MdInputModule,
   MdListModule,
   MdMenuModule,
   MdNativeDateModule,
   MdTableModule,
   MdSlideToggleModule,
   SimpleNotificationsModule,
 ],
 exports: [],
 declarations: [
   UsersComponent,
   UserComponent,
   UserListComponent,
   UserItemComponent,
   DateMy,
 ],
 providers: [DataService],
})
export class UsersModule { }
