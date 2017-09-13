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
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadService } from './shared/upload.service';
import { UploadStateService } from './shared/upload-state.service';
import { FileComponent } from './file.component';
import { RouterModule } from '@angular/router';
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
    RouterModule
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
    UploadStateService
  ],
})
export class FileListModule {
}
