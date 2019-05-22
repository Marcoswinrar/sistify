import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DefaultDialogComponent } from '../default-dialog/default-dialog.component';

@Component({
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent extends DefaultDialogComponent {

  onOkClick = new EventEmitter();
  onCancelClick = new EventEmitter();

  onCancel() {
    return this.onCancelClick.emit();
  }

  onOk() {
    return this.onOkClick.emit();
  }

}

