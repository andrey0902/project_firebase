/**
 * Created by andrei on 27.08.2017.
 */
import { Component, OnInit } from '@angular/core';
import { single, multi } from '../shared/data';
import { color } from '../shared/color.config';
import { Router } from '@angular/router';
@Component({
 selector: 'main-content',
 templateUrl: 'main-content.component.html',
 styleUrls: ['main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  public data: any[] = multi;
  public colorDownloads: string = color.downloadGreen;
  public colorUsers: string = color.userTotal;
  public defaultColor: string = color.grey;
  public doneColor: any[] = [color.linear.download, color.linear.users, color.linear.message];
  public routerState: string;
 constructor(private router: Router) { }

 public ngOnInit() {
   this.routerState = this.router.routerState.snapshot.url;
 }
}
