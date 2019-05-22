import { Component } from '@angular/core';
import { AuthService } from '../core/auth/services/auth.service';
import { DialogService } from '../core/dialog/dialog.service';
import { exhaustMap, tap, catchError } from 'rxjs/operators';
import { ActionService } from '../core/action/action.service';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService, private action: ActionService) { }

  login() {
    this.auth.authenticate();
  }


  save() {
    return console.log('salvou');
  }

  open() {


  const waitConfirm$ = this.action.beforeDoing('Deseja realmente gravar ?', 'Gravar').componentInstance.onOkClick;

  const savePlaylist$ = this.getAlgo().pipe(
    tap((data) => {
      console.log(data);
      this.action.onSuccess('Playlist gravada com sucesso');
    }),
    catchError((err: HttpErrorResponse) => {
      this.action.onError(err);
      return throwError(err);
    })
  );

  return waitConfirm$.pipe(exhaustMap(() => savePlaylist$)).subscribe();
  }


  getAlgo(): Observable<any> {
    return of([
      new HttpErrorResponse({error: 'test'})
    ]);
  }

}
