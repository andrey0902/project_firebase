import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

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

  public disconnect() {
  }
}
