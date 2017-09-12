import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilesListComponent } from './files-list/files-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'file',
      component: FilesListComponent,
      resolve: []
    },
    {
      path: 'file-upload',
      component: UploadFileComponent,
      resolve: []
    }
  ])],
  exports: [],
  declarations: [],
  providers: [],
})
export class FilesRoutingModule {
}
