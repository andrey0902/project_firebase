import { Component, Input, OnInit } from '@angular/core';
import { dataMenu } from '../shared/data-menu';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'total-statistic-component',
  templateUrl: 'total-statistic.component.html',
  styleUrls: ['total-statistic.component.scss']
})

export class TotalStatisticComponent implements OnInit, Input {
  @Input() public title: string = '';
  @Input() public dbPath: string = '';
  @Input() public color: string = '';
  @Input() public defaultColor: string = '';
  @Input() public urlState: string;
  public allTotal: number;
  public dataMenu: any = dataMenu;
  public data: number = 181;
  public dataVerticalChart: any;
  public circleTitle: string = 'Today';
  public single = [
    {
      name: 'Mo',
      value: 13004
    },
    {
      name: 'Tu',
      value: 15005
    },
    {
      name: 'We',
      value: 12033
    },
    {
      name: 'Th',
      value: 15005
    },
    {
      name: 'Fr',
      value: 16181
    }, {
      name: 'Sa',
      value: 18003
    },
    {
      name: 'Su',
      value: 20002
    },
    {
      name: 'To',
      value: 10002
    }
  ];
  constructor(private dataService: DataService) {
  }

  public ngOnInit() {
    // this.dataService.setData( this.single, 'all/chart-data/total/users', 'weekWithDays');
    //  this.dataService.setData( this.single, 'all/chart-data/total/downloads', 'weekWithDays');
    /*this.dataService.setData( 75, 'web/chart-data/total/users', 'today');
    this.dataService.setData( 143, 'web/chart-data/total/users', 'week');
    this.dataService.setData( 430, 'web/chart-data/total/users', 'month');
    this.dataService.setData( 1150, 'web/chart-data/total/users', 'year');
    this.dataService.setData( 1150, 'web/chart-data/total/users', 'alltotal');*/
/*  this.dataService.setData( 80, 'today');
    this.dataService.setData(220, 'week');
    this.dataService.setData( 800, 'month');
    this.dataService.setData( 3000, 'year');
    this.dataService.setData( 3000, 'alltotal');*/
     /* this.dataService.setData( [], 'weekWithDays')*/
    this.getData(`allTotal`, 'allTotal');
    this.getData(`Today`, 'data');
    this.getDataWeekWithDays();
  }
  public getData(name: string, variable: string = 'data' ) {
    this.circleTitle = name;
    this.dataService.getData(`/${this.urlState}/chart-data/total/${this.dbPath}/${name.toLowerCase()}`).subscribe((result) => {
      this[variable] = result.$value;
    });
  }
  public getDataWeekWithDays() {
    this.dataService.getData(`${this.urlState}/chart-data/total/${this.dbPath}/weekWithDays`).subscribe((data) => {
      this.dataVerticalChart = data;
    });
  }
}
