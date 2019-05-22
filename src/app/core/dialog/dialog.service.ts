import { MatDialogRef } from '@angular/material';

import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

export abstract class DialogService {
  abstract infoDialog(message: string, title?: string): MatDialogRef<InfoDialogComponent>;
  abstract errorDialog(message: string, title?: string): MatDialogRef<ErrorDialogComponent>;
  abstract successDialog(message: string, title?: string): MatDialogRef<SuccessDialogComponent>;
  abstract confirmDialog(message: string, title?: string, ok?: Function, cancel?: Function): MatDialogRef<ConfirmDialogComponent>;
}
