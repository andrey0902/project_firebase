import { Component, OnDestroy, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload-model';
import { UploadStateService } from '../shared/upload-state.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'upload-file',
  templateUrl: 'upload-file.component.html',
  styleUrls: ['upload-file.component.scss']
})

export class UploadFileComponent implements OnInit, OnDestroy {
  public selectedFiles: FileList;
  public currentUpload: any;
  public widthProgress: number;
  private isSubscribe: any;

  constructor(private uploadService: UploadService,
              private uploadStateService: UploadStateService ) {
  }

  public detectFiles(event) {
    this.widthProgress = 0;
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles[0].name);
  }
 public uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }
  public ngOnInit() {
    this.widthProgress = 0;
    this.isSubscribe = this.uploadStateService.state.subscribe((result) => {
      this.widthProgress = result;
      if (result === 100) {
       setTimeout(() => {
         this.widthProgress = 0;
         this.selectedFiles = null;
       }, 1000);
      }
    });
  }
  public ngOnDestroy(): void {
    this.isSubscribe.unsubscribe();
  }
}
