/**
 * Created by andrei on 22.08.2017.
 */
import {
  NgModule
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChartMyModule } from '../chart/chart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { LeftSideComponent } from './left-side/left-side.component';*/
import { MainContentComponent } from './main-content/main-content.component';
/*import { RightSideComponent } from './right-side/right-side.component';*/
import { DataService } from './shared/data.service';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TotalStatisticComponent } from './total-statistic/total-statistic.component';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ServerStatisticsListComponent } from './server-statistics-list/server-statistics-list.component';
import { ServerStatisticsItemComponent } from './server-statistics-item/server-statistics-item.component';
/*import { DailyGoalsComponent } from './daily-goals/daily-goals.component';*/
/*import { ToHourComponent } from './to-hour/to-hour.component';*/
import 'chart.js';
import { SharedModule } from '../shared/shared.module';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    HomeComponent,
 /*   LeftSideComponent,*/
    MainContentComponent,
/*    RightSideComponent,*/
    TopNavigationComponent,
    TotalStatisticComponent,
    UsersListComponent,
    UserItemComponent,
/*    ServerStatisticsListComponent,
    ServerStatisticsItemComponent,*/
   /* DailyGoalsComponent,*/
   /* ToHourComponent*/
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ChartMyModule,
    BrowserAnimationsModule,
    RouterModule,
    ChartMyModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  exports: [],
  providers: [DataService]
})
export class HomeModule {
}
