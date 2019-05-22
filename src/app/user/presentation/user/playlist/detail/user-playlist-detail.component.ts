import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { UserPresenter } from '../../../../domain/boundaries/user.presenter';
import { Playlist } from '../../../../domain/models/playlist/playlist';
import { Tracks } from '../../../../domain/models/track/tracks';

@Component({
  templateUrl: './user-playlist-detail.component.html',
  styleUrls: ['./user-playlist-detail.component.scss']
})
export class UserPlaylistDetailComponent implements OnInit {

  playlist: Playlist;
  tracks$: Observable<Tracks>;

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
