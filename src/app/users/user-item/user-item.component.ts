import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[user-item-app]',
  templateUrl: 'user-item.component.html',
  styleUrls: ['user-item.component.scss']
})

export class UserItemComponent implements OnInit, Input {
  @Input() public user: any;
  @Input() public index: number;
  @Input() public even: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log('user', this.user,  this.index);
  }
}
