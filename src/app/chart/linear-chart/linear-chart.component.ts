/**
 * Created by andrei on 27.08.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { listMenu, multi, multiWeek, multiYear, multiMonth } from './data';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'linear-chart-my',
  templateUrl: 'linear-chart.component.html',
  styleUrls: ['linear-chart.component.scss']
})

export class LinearCartComponent implements Input, OnInit {
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
  /*Scales from 0 and to end */
  @Input() public autoScale: boolean;
  /*hz*/
  @Input() public gradient: boolean;
  public colorScheme: { domain: any } = {domain: []};
  public multi: any[];
  public listMenu: any[];

  constructor(private dataService: DataService) {
    /* Object.assign(this, {single, multi});*/
    this.dataService.setData(multi, 'day');
    this.dataService.setData(multiWeek, 'week');
    this.dataService.setData(multiYear, 'year');
    this.dataService.setData(multiMonth, 'month');
  }

  /* multi: any[];*/

  /*  view: any[] = [700, 400];*/

  // options
  /*  showXAxis = true;*/
  /*showXAxisLabel = true;*/
  /* showYAxis = true;*/
  /* gradient = false;*/
  /*  showLegend = true;*/

  /* xAxisLabel = 'Country';*/
  /*  showYAxisLabel = true;*/
  /* yAxisLabel = 'Population';*/

  /*  colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };*/
  // line, area
  /*  autoScale = true;*/
  public ngOnInit() {
    console.log(this.color);
    this.colorScheme.domain = this.color;
    /*this.multi = this.data;*/
    this.getData('e', 'day');
    this.listMenu = listMenu;
    console.log(this.listMenu);
  }

  public getData(e, item) {
    console.log(e, item);
    this.dataService.getData(`ios/chart-data/${item.toLowerCase()}`).subscribe((result) => {
      console.log('result', result);
      this.multi = result;
    });
  }

  public onSelect(event) {
    console.log(event);
  }
}
