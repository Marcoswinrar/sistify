import { Component, Input } from '@angular/core';

import { Playlist } from 'src/app/user/domain/models/playlist/playlist';
import { Router } from '@angular/router';

@Component({
  selector: 'sistify-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  
  @Input() playlist: Playlist;

  constructor(private router: Router) { }

  showPlaylist() {
    this.router.navigate(['/user/playlists/', this.playlist.id]);
  }
}
