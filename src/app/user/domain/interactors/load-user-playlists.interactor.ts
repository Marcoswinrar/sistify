import { Injectable } from '@angular/core';
import { UserGateway } from '../boundaries/user.gateway';

@Injectable()
export class LoadUserPlaylistsInteractor {

  constructor(private gateway: UserGateway) { }

  loadPlaylists() {
    return this.gateway.getPlaylists();
  }
}
