import { Component, Input } from '@angular/core';

@Component({
  selector: 'sistify-detail-music',
  templateUrl: './playlist-detail-music.component.html',
  styleUrls: ['./playlist-detail-music.component.scss']
})
export class PlaylistDetailMusicComponent {
  @Input() item: any; // Track item.

}
