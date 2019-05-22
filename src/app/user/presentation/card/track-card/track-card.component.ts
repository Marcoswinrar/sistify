import { Input, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPresenter } from 'src/app/user/domain/boundaries/user.presenter';
import { ActionService } from 'src/app/core/action/action.service';
import { tap, catchError, exhaustMap, takeUntil } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Component({
  selector: 'sistify-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnDestroy { 
  
  @Input() item: any;
  destroyed$ = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private presenter: UserPresenter,
    private action: ActionService,
    private router: Router
  ) { }

  deleteTrack(uriTrack: string) {

    const playlistId = this.activatedRoute.snapshot.params.id;
    const tracks = [
      {
        uri: uriTrack
      }
    ];

    const waitConfirm$ = this.action
      .beforeDoing('Do you really want to delete this track ?', 'Delete').componentInstance.onOkClick;

    const deleteTrack$ = this.presenter.clearTracks(playlistId, tracks)
      .pipe(tap(() => {
        this.action.onSuccess('Track deleted successfully.');
        this.router.navigate(['/user/playlists']);
      }),
      catchError(err => {
        this.action.onError(err);
        return throwError(err);
      })
    );
    return waitConfirm$
    .pipe(exhaustMap(() => deleteTrack$))
    .pipe(takeUntil(this.destroyed$)).subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.next();
  }

}
