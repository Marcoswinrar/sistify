import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject, throwError } from 'rxjs';
import { takeUntil, tap, catchError, exhaustMap } from 'rxjs/operators';

import { UserPresenter } from 'src/app/user/domain/boundaries/user.presenter';
import { User } from 'src/app/user/domain/models/user';
import { ActionService } from 'src/app/core/action/action.service';
import { Playlist } from 'src/app/user/domain/models/playlist/playlist';

@Component({
  templateUrl: './user-new-playlist.component.html',
  styleUrls: ['./user-new-playlist.component.scss']
})
export class UserNewPlaylistComponent implements OnInit, OnDestroy {
  
  user: User;
  destroyed$ = new Subject<void>();
  playlistForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userPresenter: UserPresenter,
    private action: ActionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.userPresenter.loadUser()
    .pipe(takeUntil(this.destroyed$))
    .subscribe(user => this.user = user);

    this.playlistForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      public: ['', Validators.required]
    });
  }

  /**
   * Save new user playlist
   */
  save() {

    const playlist = this.playlistForm.value;
    const waitConfirm$ = this.action
      .beforeDoing('Do you really want to create a new playlist?', 'Playlist')
      .componentInstance.onOkClick;
    
    const savePlaylist$ = this.userPresenter
      .savePlaylist(this.user.id, playlist).pipe(
        tap(() => {
          this.action.onSuccess('Playlist created!')
          this.router.navigate(['/user/playlists']);
        }),
        catchError(err => {
          this.action.onError(err);
          return throwError(err)
        })
      );
    return waitConfirm$
      .pipe(exhaustMap(() => savePlaylist$))
      .pipe(takeUntil(this.destroyed$)).subscribe();
  }

  /**
   * Strategy to destroy all
   * subscriptions in component life cycle.
   */
  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.next();
  }
}
