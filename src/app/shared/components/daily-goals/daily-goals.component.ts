import { Component, OnInit } from '@angular/core';

import { color } from '../../../home/shared/color.config';
import { DataService } from '../../../home/shared/data.service';

@Component({
  selector: 'daily-goals',
  templateUrl: 'daily-goals.component.html',
  styleUrls: ['daily-goals.component.scss'],
  providers: [DataService]
})

export class DailyGoalsComponent implements OnInit {
  public data: any;
  public dataColor: any[] = color.dailyGoals;

  constructor(private dataService: DataService) {
  }

  public ngOnInit() {
    this.dataService.connectLinkAny = 'dailyGlobal';
    this.dataService.setAnyData('data', {
      dataColor: this.dataColor,
      data: [
        {
          'name': 'DA',
          'value': 8940
        },
        {
          'name': 'PV',
          'value': 5000
        },
        {
          'name': 'TR',
          'value': 7200
        },
        {
          'name': 'M',
          'value': 90000
        }
      ]
    });
    this.dataService.getData('dailyGlobal').subscribe((result) => {
      this.data = result.data;
      console.log('result----', this.data);
    });
  }
}
