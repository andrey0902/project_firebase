import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: 'user-item.component.html',
  styleUrls: ['user-item.component.scss']
})

export class UserItemComponent implements OnInit, Input {
  @Input() public data: any;
  constructor() {
  }

  public ngOnInit() {
    console.log(this.data);
  }
}
