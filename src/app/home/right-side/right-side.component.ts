/**
 * Created by andrei on 27.08.2017.
 */
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'right-side',
 templateUrl: 'right-side.component.html',
 styleUrls: ['right-side.component.scss']
})

export class RightSideComponent implements OnInit {
  public countUsers: string = '+12';
  public countDownloads: string = '-34%';
 constructor() { }

 ngOnInit() { }
}
