import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'chart-my',
  templateUrl: 'chart.component.html'
})

export class ChartComponent {
  public options: any;
/*  public data: any[];
  public title: string = 'my first chart';
  public defaultColor = {
    green: '#3ec556',
    coral: '#ed684a',
    grey: '#d0d0d0',
    serverColor: {
      blue: '#3d9bd4',
      red: '#d43d5d'
    },
    linearCart: {
      above: '#97bbd3',
      below: '#cf907a'
    },
    message: '#f1b826',
    users: '#ed684a',
    download: '#57c9c0'
  };
  public color: any[] = [this.defaultColor.grey, this.defaultColor.green];
  public colorScheme = {
    domain: this.color
  };

  public single: any[];
  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';
  constructor() {
    Object.assign(this, data);
  }

  public ngOnInit() {

  }
  public onSelect(event) {
    console.log(event);
  }*/
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


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: [
      '#ff6384',
      '#36a2eb',
      '#cc65fe',
       '#ffce56',
    ]
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  constructor() {
    this.options = {
      series: [{
        name: 'Download',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      },
        {
        name: 'Users',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      },
        {
        name: 'Messages',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],
      colors: [   '#f1b826', '#ed684a', '#57c9c0'],
      title: {
        text : 'simple chart',
        style: {
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
      xAxis: {
        labels: {
          style: {
            color: '#6e6e70',
            border: '1px solid black'
          }
        }
      },
      yAxis: {
        labels: {
          style: {
            color: '#6e6e70'
          }
        }
      }
    };
  }

  public chartHovered(event) {
    console.log(event);
  }
  public chartClicked(event) {
    console.log(event);
  }
}
/*
@Component({
  selector: 'my-app',
  template: `
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `
})
export class App {
  public single: any[];
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

  constructor() {
    Object.assign(this, {single})
  }

  onSelect(event) {
    console.log(event);
  }
}*/
