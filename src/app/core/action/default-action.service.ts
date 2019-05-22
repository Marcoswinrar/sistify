import { MatDialogRef } from '@angular/material';

import { Observable, of } from 'rxjs';

import { ActionService } from './action.service';
import { DialogService } from '../dialog/dialog.service';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorParser } from './parser/error-parser';

@Injectable()
export class DefaultActionService implements ActionService {

  constructor(private dialog: DialogService) { }

  onSuccess(message: string): Observable<void> {

    if (!message) { return of<void>(); }
    return this.dialog.successDialog(message).afterClosed();
  }

  beforeDoing(message: string, title: string): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.confirmDialog(message, title);
  }

  onError(error: HttpErrorResponse): Observable<void> {
    const message = ErrorParser.parseError(error);
    console.log(message);
    if (!message) { return of<void>(); }
    return this.dialog.errorDialog(message).afterClosed();
  }

}
