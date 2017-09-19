import { Component, ElementRef, OnInit, ViewChild, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { UploadService } from '../shared/upload.service';
import swal from 'sweetalert2';
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
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  selector: 'files-list',
  templateUrl: 'files-list.component.html',
  styleUrls: ['files-list.component.scss']
})

export class FilesListComponent implements OnInit {
  public displayedColumns = DataColumn;
  public exampleDatabase: ExampleDatabase;
  public dataSource: ExampleDataSource | null;
  public file: any;
  @ViewChild('filter') public filter: ElementRef;

  constructor(private uploadService: UploadService,
              private dialog: MdDialog,
              private _service: NotificationsService) {
  }

  public ngOnInit() {
    this.getData();
  }

  public openDialog(value: any): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {name: value.name, imgLink: value.preview}
    });
  }

  public deleteFile(data): void {
      this.file = data;
      this.showPopUp();

  }
  private showTooltip(status, title, description) {
    this._service[status](
      title,
      description,
      {
        timeOut: 4000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 20,
        animate: 'fromRight'
      }
    );
  }
  private showPopUp(): void {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(this.confirmDeleteFile.bind(this), this.censeledDelete.bind(this));
  }
  private confirmDeleteFile(): void {
    console.log('this', this);
    this.uploadService.deleteFileData(this.file.key).then(() => {
      this.file = null;
      this.showTooltip('success', 'Success', 'Success delete file');
    });
    this.uploadService.deleteFileStorage(this.file.name);

  }
  private censeledDelete(dismiss): void {
    if (dismiss === 'cancel') {
      this.showTooltip('info', 'Canceled', 'You canceled the action');
    }
  }
  private getData(): void {
    this.uploadService.getFile().subscribe((result) => {
      console.log(result);
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
