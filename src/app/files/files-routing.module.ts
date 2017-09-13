import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilesListComponent } from './files-list/files-list.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FileComponent } from './file.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: FileComponent,
      resolve: [],
      children: [
        {
          path: 'file',
          component: FilesListComponent
        },
        {
          path: 'file-upload',
          component: UploadFileComponent
        },

      ]
    }
  ])],
  exports: [],
  declarations: [],
  providers: [],
})
export class FilesRoutingModule {
}
