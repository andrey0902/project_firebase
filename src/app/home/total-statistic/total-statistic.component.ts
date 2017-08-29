import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'total-statistic-component',
  templateUrl: 'total-statistic.component.html',
  styleUrls: ['total-statistic.component.scss']
})

export class TotalStatisticComponent implements OnInit, Input {
  @Input() public title: string = '';
  @Input() public color: string = '';
  @Input() public defaultColor: string = '';
  constructor() {
  }

  ngOnInit() {
  }
}
