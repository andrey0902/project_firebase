import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circle-chart-component',
  templateUrl: 'circle-chart.component.html',
  styleUrls: ['circle-chart.component.scss']
})

export class CircleChartComponent {
  single: any[] = [
    {
      "name": "Germany",
      "value": 10
    },
    {
      "name": "dddd",
      "value": 3
    }
  ];
  multi: any[];

  view: any[] = [200, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['red', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;


  onSelect(event) {
    console.log(event);
  }
}
