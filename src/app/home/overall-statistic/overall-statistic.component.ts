import { Component, Input, OnInit } from '@angular/core';
import { listMenu, multi, multiWeek, multiYear, multiMonth } from './data';
import { DataService } from '../shared/data.service';
@Component({
 selector: 'overall-statistic',
 templateUrl: 'overall-statistic.component.html',
 styleUrls: ['overall-statistic.component.scss']
})

export class OverallStatisticComponent implements OnInit, Input {
  public listMenu: string[];
  public multi: any[];
  @Input() public urlState: string;
  @Input() public data: any[];
  /*color of chart*/
  @Input() public color: any[] | string;

  constructor(private dataService: DataService) { }

 public ngOnInit() {
   this.listMenu = listMenu;
   this.getData('day');
  // this.dataService.setData( multiYear, 'android/chart-data/', 'year');
 }
  public getData(item) {
    this.dataService.getData(`${this.urlState}/chart-data/${item.toLowerCase()}`).subscribe((result) => {
      this.multi = result;
    });
  }
}
