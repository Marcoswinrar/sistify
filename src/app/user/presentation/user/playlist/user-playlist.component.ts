import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserPresenter } from '../../../domain/boundaries/user.presenter';
import { PlaylistList } from '../../../domain/models/playlist/playlist-list';

@Component({
  templateUrl: './user-playlist.component.html'
})
export class UserPlaylistComponent implements OnInit {

  playlists$: Observable<PlaylistList>;

  constructor(private presenter: UserPresenter) { }

  ngOnInit() {
    this.playlists$ = this.presenter.loadPlaylists();
  }

}
