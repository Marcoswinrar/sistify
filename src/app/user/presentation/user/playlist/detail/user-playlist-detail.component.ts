import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { UserPresenter } from '../../../../domain/boundaries/user.presenter';
import { Playlist } from '../../../../domain/models/playlist/playlist';

@Component({
  templateUrl: './user-playlist-detail.component.html',
  styleUrls: ['./user-playlist-detail.component.scss']
})
export class UserPlaylistDetailComponent implements OnInit {

  playlist: Playlist;
  tracks$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private presenter: UserPresenter
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;

    this.presenter.loadPlaylist(id)
      .pipe(finalize(() => this.tracks$ = this.presenter.loadTracks(this.playlist.tracks.href))
    ).subscribe(data => this.playlist = data);
  }
}
