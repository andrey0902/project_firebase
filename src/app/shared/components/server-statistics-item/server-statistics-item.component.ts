import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'server-statistics-item',
  templateUrl: 'server-statistics-item.component.html',
  styleUrls: ['server-statistics-item.component.scss']
})

export class ServerStatisticsItemComponent implements OnInit, Input {
  @Input() public data: any;
  constructor() {
  }

  public ngOnInit() {
  }
}
