import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {
    console.log('a');
  }
}
