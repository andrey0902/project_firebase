import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartMyComponent } from './chart.component';
import { LinearCartComponent } from './linear-chart/linear-chart.component';
import { ToggleClassDirective } from './shared/toggle-class.directive';
import { DataService } from './shared/data.service';
import { VerticalLinearChartComponent } from './vertical-linear-chart/vertical-linear-chart.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { LinearGaugeChartComponent } from './linear-gauge-chart/linear-gauge-chart.component';
import { CircleSwimlaneChartComponent } from './circle-swimlane-chart/circle-swimlane-chart.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [
    ChartMyComponent,
    NgxChartsModule,
    BrowserAnimationsModule,
    LinearCartComponent,
    VerticalLinearChartComponent,
    CircleChartComponent,
    LinearGaugeChartComponent,
    CircleSwimlaneChartComponent
  ],
  declarations: [
    ChartMyComponent,
    LinearCartComponent,
    ToggleClassDirective,
    VerticalLinearChartComponent,
    CircleChartComponent,
    LinearGaugeChartComponent,
    CircleSwimlaneChartComponent
  ],
  providers: [DataService],
})
export class ChartMyModule {
}
