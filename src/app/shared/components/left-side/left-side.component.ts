/**
 * Created by andrei on 27.08.2017.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../home/shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'left-side',
  templateUrl: 'left-side.component.html',
  styleUrls: ['left-side.component.scss']
})

export class LeftSideComponent implements OnInit, OnDestroy {
  public countNewUsers: number = 0;
  private subscribeUser: any;
  constructor(private dataService: DataService) {
  }

  public ngOnInit() {
   this.subscribeUser = this.dataService.getNewUsers().subscribe((element) => {
          this.countNewUsers = this.dataService.activeUserCount(element);
     /* console.log('new users', this.countNewUsers );*/
    });

  }
 public ngOnDestroy() {
   this.subscribeUser.unsubscribe();
  }
}
