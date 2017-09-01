import { Component } from '@angular/core';

@Component({
  selector: 'vertical-highchart',
  templateUrl: 'vertical-highchart.component.html'
})

export class VerticalHighchartComponent {
  public options: any;

  constructor() {
    this.options = {
      chart: {
        type: 'column',
        height: 180,
        width: 300,
        backgroundColor: 'none',
      },
      title: {
        text: '',
        style: { display: 'none' }
      },
      navigation: {
        buttonOptions: {
          symbolFill: 'none',
          text: null
        },
        menuStyle: {
          display: 'none'
        }},
      yAxis: [{
        labels: {
            enabled: false
          },
        title: {
          enabled: false
        }
      }],
      legend: false,
      colors: ['#97bbd3', '#cf907a'],
      xAxis: {
        categories: ['6', '12', '18', '24', '0'],

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
      }]
    };
  }
}
