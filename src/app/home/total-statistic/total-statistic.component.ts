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
  constructor(private dataService: DataService) {
  }

  public ngOnInit() {
/*    this.dataService.setData( 80, 'today');
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
  public createPath() {}
  public getDataWeekWithDays() {
    this.dataService.getData(`${this.urlState}/chart-data/total/${this.dbPath}/weekWithDays`).subscribe((data) => {
      this.dataVerticalChart = data;
    });
  }
}
