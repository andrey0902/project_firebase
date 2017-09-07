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
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,

} from '@angular/material';
import { SearchComponent } from './components/search/search.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { AsyncValidatorDirective } from './validators/async-validator';
import { StateUsedEmailService } from './validators/state-used-email';
import { UserBlockComponent } from './components/user-block/user-block.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartMyModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
  ],
  exports: [
    LeftSideComponent,
    RightSideComponent,
    ToHourComponent,
    DailyGoalsComponent,
    ServerStatisticsListComponent,
    ServerStatisticsItemComponent,
    HeaderPanelComponent,
    FormErrorComponent,
    AsyncValidatorDirective,
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
    FormErrorComponent,
    AsyncValidatorDirective,
    UserBlockComponent,
  ],
  providers: [StateUsedEmailService],
})
export class SharedModule {
}
