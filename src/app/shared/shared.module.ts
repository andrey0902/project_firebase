import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { ToHourComponent } from './components/to-hour/to-hour.component';
import { DailyGoalsComponent } from './components/daily-goals/daily-goals.component';
import { ServerStatisticsListComponent } from './components/server-statistics-list/server-statistics-list.component';
import { ServerStatisticsItemComponent } from './components/server-statistics-item/server-statistics-item.component';
import { ChartMyModule } from '../chart/chart.module';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
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
import { SearchComponent } from './components/search/search.component';
@NgModule({
  imports: [
    CommonModule,
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
  exports: [
    LeftSideComponent,
    RightSideComponent,
    ToHourComponent,
    DailyGoalsComponent,
    ServerStatisticsListComponent,
    ServerStatisticsItemComponent,
    HeaderPanelComponent
  ],
  declarations: [
    LeftSideComponent,
    RightSideComponent,
    ToHourComponent,
    DailyGoalsComponent,
    ServerStatisticsListComponent,
    ServerStatisticsItemComponent,
    HeaderPanelComponent,
    SearchComponent,
  ],
  providers: [],
})
export class SharedModule {
}
