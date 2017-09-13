import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../shared/upload.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { ExampleDataSource } from './example-data-source';
import { ExampleDatabase } from './example-data-base';
import { DataColumn } from './data-column';

@Component({
  selector: 'files-list',
  templateUrl: 'files-list.component.html',
  styleUrls: ['files-list.component.scss']
})

export class FilesListComponent implements OnInit {
  public displayedColumns = DataColumn;
  public exampleDatabase: ExampleDatabase;
  public dataSource: ExampleDataSource | null;
  @ViewChild('filter') public filter: ElementRef;

  constructor(private uploadService: UploadService) {
  }

  public ngOnInit() {
    this.getData();
  }

  private getData() {
    this.uploadService.getFile().subscribe((result) => {
      this.exampleDatabase = new ExampleDatabase(result);
      this.createData();
    });
  }

  private createData() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}
