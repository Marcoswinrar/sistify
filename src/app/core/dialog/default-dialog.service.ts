import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { DialogService } from './dialog.service';
import { InfoDialogData } from './default-dialog/default-dialog.component';


@Injectable()
export class DefaultDialogService implements DialogService {

  constructor(private dialog: MatDialog) { }

  public infoDialog(message: string, title: string = 'Informação!'): MatDialogRef<InfoDialogComponent> {
    return this.openDefault(InfoDialogComponent, message, title);
  }

  public errorDialog(message: string, title: string = 'Erro!'): MatDialogRef<ErrorDialogComponent> {
    return this.openDefault(ErrorDialogComponent, message, title);
  }

  public confirmDialog(message: string, title: string = 'Confirmação', ok?: Function, cancel?: Function): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, { data: { ok, cancel, title, message } });
  }

  public successDialog(message: string, title: string = 'Sucesso!'): MatDialogRef<SuccessDialogComponent> {
    return this.openDefault(SuccessDialogComponent, message, title);
  }

  private openDefault(dialogRef: typeof InfoDialogComponent, message: string, title: string, width?: string) {
    return this.dialog.open<InfoDialogComponent, InfoDialogData, void>(dialogRef, { data: { message, title }});
  }

}
