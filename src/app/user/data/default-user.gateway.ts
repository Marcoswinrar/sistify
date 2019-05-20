import { Injectable } from '@angular/core';

import { UserGateway } from '../domain/boundaries/user.gateway';
import { UserRepository } from './user.repository';
import { Tracks } from '../domain/models/track/tracks';

/**
 * Layer of data and gateway to provide information for interactors.
 */
@Injectable()
export class DefaultUserGateway implements UserGateway {

  constructor(private repository: UserRepository) { }

  getUser() {
    return this.repository.getUser();
  }

  getMenus() {
    return this.repository.getMenus();
  }

  getPlaylists() {
    return this.repository.getUserPlaylists();
  }

  getPlaylist(id: string) {
    return this.repository.getPlaylist(id);
  }

  getTracks(url: string) {
    return this.repository.getTracks(url);
  }

  deleteTracks(url: string, tracks: Tracks[]) {
    this.repository.deleteTracks(url, tracks);
  }
}
