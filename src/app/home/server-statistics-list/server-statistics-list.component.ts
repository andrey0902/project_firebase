import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'server-statistics-list',
  templateUrl: 'server-statistics-list.component.html',
  styleUrls: ['server-statistics-list.component.scss'],
  providers: [DataService]
})

export class ServerStatisticsListComponent implements OnInit {
  public serverStatisticData: any;
  constructor(private dataService: DataService) {
  }

  public ngOnInit() {
    let serverStatistics = [
      {
        name: 'Disk usage',
        value: 66,
        color: '#3d9bd4'
      },
      {
        name: 'Men usage',
        value: 35,
        color: '#3d9bd4'
      },
      {
        name: 'CPU load',
        value: 88,
        color: '#d43d5d'
      },
      {
        name: 'Bandwith',
        value: 10,
        color: '#3d9bd4'
      }
    ];
    this.dataService.connectLinkAny = 'serverStatistics';
    this.dataService.setAnyData('data', serverStatistics);
    this.getData();
  }
  public getData() {
    this.dataService.getData('serverStatistics').subscribe((result) => {
      this.serverStatisticData = result.data;
    });
  }
}
