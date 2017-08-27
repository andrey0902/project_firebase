/**
 * Created by andrei on 27.08.2017.
 */
import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';
@Component({
 selector: 'linear-chart-my',
 templateUrl: 'linear-chart.component.html',
 styleUrls: ['linear-chart.component.scss']
})

export class LinearCartComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }
}
