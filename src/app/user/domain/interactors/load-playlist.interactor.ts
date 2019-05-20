import { Injectable } from '@angular/core';

import { UserGateway } from '../boundaries/user.gateway';

@Injectable()
export class LoadPlaylistInteractor {

  constructor(private gateway: UserGateway) { }

  loadPlaylist(id: string) {
    return this.gateway.getPlaylist(id);
  }
}
