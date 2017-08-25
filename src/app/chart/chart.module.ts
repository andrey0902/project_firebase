import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import d3 from '@swimlane/ngx-charts/release/d3';
import { ChartComponent } from './chart.component';
import { NvD3Module } from 'ng2-nvd3';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NvD3Module,
    ChartsModule,
    ChartModule
  ],
  exports: [
    ChartComponent,
    BrowserAnimationsModule,
    NvD3Module,
    ChartsModule
  ],
  declarations: [ChartComponent],
  providers: [],
})
export class ChartMyModule {
}
