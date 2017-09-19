import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../home/shared/data.service';
import { ExampleDataSource } from './ExampleDataSource';
import { UserModel } from '../user/shared/user.model';
import { SearchStateService } from '../../shared/search-state/search-state.service';
import { Subscription } from 'rxjs/Subscription';
import { dataTable } from './shared/data-table-colum';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
 selector: 'user-list-app',
 templateUrl: './user-list.component.html',
 styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit, OnDestroy  {
    public options = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    lastOnBottom: true,
  };
 public users: any;
 public flagShowUser: boolean;
 public customData: UserModel[];
 public displayedColumns;
 public dataSource;
 private isSubscribe: Subscription;
 constructor(private dataService: DataService,
             private searchStateService: SearchStateService,
             private _service: NotificationsService) { }

 public ngOnInit() {
   this.displayedColumns = dataTable;
   this.dataService.getNewUsers().subscribe((data) => {
     this.users = this.customData = this.dataService.creatingModal(data);
     if (data) {
       this.createDataSource(this.users);
       this.flagShowUser = true;
     }
   });
   this.isSubscribe = this.searchStateService.state.subscribe((data) => {
     if (data === 'clear-1') {
       this.createDataSource(this.dataService.creatingModal(this.customData));
       this.flagShowUser = true;
       return;
     }
     this.dataService.filterBy(data);
   });
   this.dataService.foundUsers().subscribe((result) => {
     if (result.length) {
       this.createDataSource(this.dataService.creatingModal(result));
       console.log(this.dataService.creatingModal(result));
       this.flagShowUser = true;
       return;
     }
     this.flagShowUser = false;

   });
 }
 public showTooltip(status, title, description): void {
   this._service[status](
     title,
     description,
     {
       showProgressBar: true,
       pauseOnHover: false,
       clickToClose: true,
       timeOut: 2000,
       maxLength: 25,
       animate: 'fromRight'
     }
   );
 }
 public createDataSource(data) {
   this.dataSource =  new ExampleDataSource(data);
 }
  public delete(id: string) {
    this.dataService.deleteUsers(id);
    this.showTooltip('success', 'Delete', 'User successfully deleted');
  }
  public toggleActive(e, key: string) {
    let flag: boolean = e.checked;
    let isActive = flag ? 1 : 0;
    this.dataService.updateUser(key, {isActive: flag, hash: isActive});
    this.showTooltip('info', 'Toggle', 'Status changed successfully');
  }

  public ngOnDestroy(): void {
    this.isSubscribe.unsubscribe();
  }
}
