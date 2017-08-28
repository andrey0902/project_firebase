import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartMyComponent } from './chart.component';
import { LinearCartComponent } from './linear-chart/linear-chart.component';
import { ToggleClassDirective } from './shared/toggle-class.directive';
import { DataService } from './shared/data.service';

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
    LinearCartComponent
  ],
  declarations: [
    ChartMyComponent,
    LinearCartComponent,
    ToggleClassDirective,
  ],
  providers: [DataService],
})
export class ChartMyModule {
}
