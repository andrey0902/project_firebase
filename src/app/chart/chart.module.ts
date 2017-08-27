import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartMyComponent } from './chart.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [ChartMyComponent],
  declarations: [ChartMyComponent],
  providers: [],
})
export class ChartMyModule {
}
