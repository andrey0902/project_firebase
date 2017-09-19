import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesListComponent } from './files-list/files-list.component';
import { FilesItemComponent } from './files-item/files-item.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SharedModule } from '../shared/shared.module';
import {
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdSortModule,
  MdTableModule,
  MdDialogModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadService } from './shared/upload.service';
import { UploadStateService } from './shared/upload-state.service';
import { FileComponent } from './file.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications/dist';

@NgModule({
  imports: [
    CommonModule,
    FilesRoutingModule,
    SharedModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    ReactiveFormsModule,
    MdSortModule,
    MdTableModule,
    MdDialogModule,
    RouterModule,
    SharedModule,
    SimpleNotificationsModule,
  ],
  exports: [],
  declarations: [
    FilesListComponent,
    FilesItemComponent,
    UploadFileComponent,
    FileComponent
  ],
  providers: [
    UploadService,
    UploadStateService,
    NotificationsService
  ],
  entryComponents: [DialogComponent]
})
export class FileListModule {
}
