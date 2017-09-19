import { Component, OnDestroy, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload-model';
import { UploadStateService } from '../shared/upload-state.service';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  selector: 'upload-file',
  templateUrl: 'upload-file.component.html',
  styleUrls: ['upload-file.component.scss']
})

export class UploadFileComponent implements OnInit, OnDestroy {
  public selectedFiles: FileList;
  public toggleProgress: boolean;
  public currentUpload: any;
  public widthProgress: number;
  public options = {
    position: ['top', 'right']
  };
  private isSubscribe: any;
  constructor(private uploadService: UploadService,
              private uploadStateService: UploadStateService,
              private _service: NotificationsService) {
  }
  public showTooltip(status, title, description): void {
    this._service[status](
      title,
      description,
      {
        timeOut: 1000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        maxLength: 30,
        animate: 'fromRight',
        position: ['top', 'left'],
      }
    );
  }

  public detectFiles(event) {
    this.widthProgress = 0;
    this.selectedFiles = event.target.files;
  }

  public uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }

  public ngOnInit() {
    this.setToggleProgress(false);
    this.widthProgress = 0;
    this.isSubscribe = this.uploadStateService.state.subscribe((result) => {
      this.widthProgress = result;
      if (result === 100) {
        setTimeout(() => {
          this.widthProgress = 0;
          this.selectedFiles = null;
          this.setToggleProgress(false);
          this.showTooltip('success', 'Success', 'File uploaded successfully');
        }, 1000);
      }
    });
  }

  public ngOnDestroy(): void {
    this.isSubscribe.unsubscribe();
  }

  public setToggleProgress(value: boolean) {
    console.log('value', value);
    this.toggleProgress = value;
  }
}
