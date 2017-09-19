import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
 selector: 'dialog-app',
 templateUrl: 'dialog.component.html',
 styleUrls: ['dialog.component.scss']
})

export class DialogComponent  {
  constructor(
    public dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
