import { Injectable } from '@angular/core';
import { UserGateway } from '../boundaries/user.gateway';
import { Playlist } from '../models/playlist/playlist';

@Injectable()
export class SavePlaylistInteractor {

  constructor(private gateway: UserGateway) { }

  savePlaylist(userId: string, playlist: Playlist) {
    return this.gateway.addPlaylist(userId, playlist);
  }

}
