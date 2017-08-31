import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'circle-swimlane-chart',
  templateUrl: './circle-swimlane-chart.component.html'
})

export class CircleSwimlaneChartComponent implements Input, OnChanges {
  @Input() public data: any = null;
  @Input() public view: any = null;
  public test: any;
  public ngOnChanges() {
    console.log(this.data);
    if (this.data) {
      console.log(this.test = this.data.data);
    }

  }
}
