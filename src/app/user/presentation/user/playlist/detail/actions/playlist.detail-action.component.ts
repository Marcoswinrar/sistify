import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'playlist-detail-action',
  templateUrl: './playlist-detail-action.component.html',
  styleUrls: ['./playlist-detail-action.component.scss']
})
export class PlaylistDetailActionComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute 
    ) { }


  edit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.router.navigate(['/user/playlists/' + id + '/edit' ])
  }

}
