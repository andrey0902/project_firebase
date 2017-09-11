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
import { MainContentComponent } from './main-content/main-content.component';
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
import 'chart.js';
import { SharedModule } from '../shared/shared.module';
import { OtherGuardService } from '../core/other-guard.service';
import { OverallStatisticComponent } from './overall-statistic/overall-statistic.component';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    HomeComponent,
    MainContentComponent,
    TopNavigationComponent,
    TotalStatisticComponent,
    UsersListComponent,
    UserItemComponent,
    OverallStatisticComponent,

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
  providers: [
    DataService,
    OtherGuardService
  ]
})
export class HomeModule {
}
