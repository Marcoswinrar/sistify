import { Component, OnInit } from '@angular/core';
import { UserPresenter } from '../../domain/boundaries/user.presenter';
import { Observable } from 'rxjs';
import { PlaylistList } from '../../domain/models/playlist/playlist-list';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './user-playlist.component.html'
})
export class UserPlaylistComponent implements OnInit {

  playlists$: Observable<PlaylistList>;

  constructor(private presenter: UserPresenter) { }

  ngOnInit() {
    this.playlists$ = this.presenter.loadPlaylists().pipe(tap(console.log));
  }

}
