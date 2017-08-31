import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'linear-gauge-chart',
  templateUrl: 'linear-gauge-chart.component.html',
  styleUrls: ['linear-gauge-chart.component.scss']
})

export class LinearGaugeChartComponent implements Input, OnInit {
  @Input() public data: any;
  public width: number = 0;

  public ngOnInit() {
    this.animation();
  }

  private animation() {
    let ind = setTimeout(() => {
        this.animation();
        if (!( +this.data.value > this.width)) {
          return clearTimeout(ind);
        }
        this.width++;
      },
      3);
  }
}
