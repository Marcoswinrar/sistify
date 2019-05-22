import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


export interface InfoDialogData {
  title: string;
  message: string;

}

@Component({
  selector: 'default-dialog',
  templateUrl: './default-dialog.component.html'
})
export class DefaultDialogComponent {

  @Input() title: string;
  @Input() message: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: InfoDialogData) {
    this.title = data.title;
    this.message = data.message;
  }

}
