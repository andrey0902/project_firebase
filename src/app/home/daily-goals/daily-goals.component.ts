import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { color } from '../shared/color.config';

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

/*
let cir = document.querySelector('circle');

let ofset = 534;
let a = 0;
let stop;
function setAnimation(element) {
  if(ofset == 267) {
    clearInterval(stop);
  }
  if (ofset > 0) {
    element.style.strokeDashoffset = (ofset--);
    return;
  }
}
stop = setInterval(setAnimation, 10, cir); /!* 10 как быстро пройдет анимация *!/
*/
