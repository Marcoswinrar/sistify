import { Injectable } from '@angular/core';
import { UserGateway } from '../boundaries/user.gateway';

@Injectable()
export class ClearTracksInteractor {

  constructor(private gateway: UserGateway) { }

  clearTracks(playlistId: string, tracks: any) {
    return this.gateway.deleteTracks(playlistId, tracks);
  }

}