import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-linear-chart-component',
  templateUrl: 'vertical-linear-chart.component.html',
  styleUrls: ['vertical-linear-chart.component.scss']
})

export class VerticalLinearChartComponent implements Input, OnInit {
  /*data of chart*/
  @Input() public data: any[];
  /*color of chart*/
  @Input() public color: any[] | string;
  /*1 width and 2 height*/
  @Input() public view: number[];
  /*add 2 line top and bottom*/
  @Input() public roundDomains: boolean;
  /*toggle tooltip show/hide*/
  @Input() public tooltipDisabled: boolean;
  /*show/hide X axis*/
  @Input() public showXAxis: boolean;
  /*show/hide Label X-Y axis*/
  @Input() public showXAxisLabel: boolean;
  @Input() public showYAxisLabel: boolean;
  /*show/hide Y axis*/
  @Input() public showYAxis: boolean;
  /*name the label of x and y line*/
  @Input() public xAxisLabel: string | number;
  @Input() public yAxisLabel: string | number;
  /*show/hide legend*/
  @Input() public showLegend: boolean;
  /*legendTitle*/
  @Input() public legendTitle: string | number;
  /*padding between bars in px*/
  @Input() public barPadding: string | number;
  /*hz*/
  @Input() public gradient: boolean;
  public single = [
           {
          name: 'Mo',
          value: 7300000
        },
        {
          name: 'Tu',
          value: 7355000
        },
        {
          name: 'We',
          value: 7400000
        },
        {
          name: 'Th',
          value: 7550000
        },
        {
          name: 'Fr',
          value: 7630201
        }, {
          name: 'Sa',
          value: 7000000
        },
        {
          name: 'Su',
          value: 7700000
    },
    {
      name: 'To',
      value: 7700000
    }
  ];
  public colorScheme = {
    domain: []
  };
  public   ngOnInit(): void {
    for (let i = 0; i < this.single.length; i++) {
      if (i !== (this.single.length - 1)) {
        this.colorScheme.domain.push(this.color[0]);
        continue;
      }
      this.colorScheme.domain.push(this.color[1]);
    }
    console.log(this.colorScheme.domain);
  }

  public onSelect(event) {
    console.log(event);
  }
}
