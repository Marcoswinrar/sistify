import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

import { Observable } from 'rxjs';

import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';

export abstract class ActionService {
  abstract onSuccess(message: string): Observable<void>;
  abstract beforeDoing(message: string, title: string): MatDialogRef<ConfirmDialogComponent>;
  abstract onError(error: HttpErrorResponse): Observable<void>;
}
