import { Component, OnInit } from '@angular/core';
import { DataService } from '../../home/shared/data.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { UserModel } from '../user/shared/user.model';

@Component({
 selector: 'user-list-app',
 templateUrl: './user-list.component.html',
 styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
 public users: any;
 public displayedColumns;
 public dataSource;

 constructor(private dataService: DataService) { }

 public ngOnInit() {
   this.displayedColumns = ['index', 'img', 'name', 'email',  'hash', 'toggleActivate', 'joiningDate', 'actions'];
   this.dataService.getNewUsers().subscribe((data) => {
     this.users = this.dataService.creatingModal(data);
     this.createDataSource(this.users);
   });
 }
 public createDataSource(data) {
   this.dataSource =  new ExampleDataSource(data);
 }
  public delete(id: string) {
    console.log(id);
    this.dataService.deleteUsers(id);
  }
  public toggleActive(e, key: string) {
    let flag: boolean = e.checked;
    let isActive = flag ? 1 : 0;
    this.dataService.toggleActivateUser(key, e.checked);/*method moust delete*/
    this.dataService.updateUser(key, {isActive: flag, hash: isActive});
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class ExampleDataSource extends DataSource<any> {
  public users;
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(users: any) {
    super();
    this.users = users;
  }
  public connect() {
    return Observable.of(this.users);
  }

  public disconnect() {}
}
