/**
 * Created by andrei on 27.08.2017.
 */
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { listMenu, multi, multiWeek, multiYear, multiMonth } from './data';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  @Input() public multi: any[];
  @Input() public urlState: string;

  constructor(private dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    /*this.dataService.setData(multi, 'day');
    this.dataService.setData(multiWeek, 'week');
    this.dataService.setData(multiYear, 'year');
    this.dataService.setData(multiMonth, 'month');*/
  }

  public ngOnInit() {
    this.colorScheme.domain = this.color;
  }

  public onSelect(event) {
    console.log(event);
  }
}
