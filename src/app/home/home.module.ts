/**
 * Created by andrei on 22.08.2017.
 */
import {
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChartMyModule } from '../chart/chart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChartMyModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: []
})
export class HomeModule {
}
