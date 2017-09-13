import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { FileData } from './file-interface';
/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  public files;
  /** Stream that emits whenever the data has been modified. */
  public dataChange: BehaviorSubject<FileData[]> = new BehaviorSubject<FileData[]>([]);

  get data(): FileData[] {
    return this.dataChange.value;
  }

  constructor(data: any[]) {
    this.files = data;
    // Fill up the database with 100 users.
    for (let i = 0; i < data.length; i++) {
      this.addFile(i);
    }
  }

  /** Adds a new user to the database. */
  public addFile(i) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewFile(i));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewFile(i) {
    return {
      fileId: i + 1,
      imgIco: 'insert_drive_file',
      name: this.files[i].name,
      preview: this.files[i].url,
      open: 'button Open',
      delete: 'button Delete',
    };
  }
}
