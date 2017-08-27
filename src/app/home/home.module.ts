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
import { LeftSideComponent } from './left-side/left-side.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RightSideComponent } from './right-side/right-side.component';
import { DataService } from './shared/data.service';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    HomeComponent,
    LeftSideComponent,
    MainContentComponent,
    RightSideComponent,
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChartMyModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [],
  providers: [DataService]
})
export class HomeModule {
}
