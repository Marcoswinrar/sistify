import { Injectable } from '@angular/core';

import { UserPresenter } from '../../domain/boundaries/user.presenter';
import { LoadUserInteractor } from '../../domain/interactors/load-user.interactor';
import { LoadMenusInteractor } from '../../domain/interactors/load-menus.interactor';
import { LoadUserPlaylistsInteractor } from '../../domain/interactors/load-user-playlists.interactor';
import { LoadPlaylistInteractor } from '../../domain/interactors/load-playlist.interactor';
import { LoadTracksInteractor } from '../../domain/interactors/load-tracks.interactor';
import { SavePlaylistInteractor } from '../../domain/interactors/save-playlist.interactor';
import { Playlist } from '../../domain/models/playlist/playlist';
import { ClearTracksInteractor } from '../../domain/interactors/clear-tracks.interactor';

/**
 * This is an external layer.The UI of app.
 * To communicate with interactors(adapters).
 */
@Injectable()
export class DefaultUserPresenter implements UserPresenter {

  constructor(
    private user: LoadUserInteractor,
    private menus: LoadMenusInteractor,
    private playlists: LoadUserPlaylistsInteractor,
    private playlist: LoadPlaylistInteractor,
    private save: SavePlaylistInteractor,
    private tracks: LoadTracksInteractor,
    private clear: ClearTracksInteractor
  ) { }

  loadUser() {
    return this.user.getUser();
  }

  loadMenus() {
    return this.menus.getMenus();
  }

  loadPlaylists() {
    return this.playlists.loadPlaylists();
  }

  loadPlaylist(id: string) {
    return this.playlist.loadPlaylist(id);
  }

  loadTracks(url: string) {
    return this.tracks.loadTracks(url);
  }

  savePlaylist(userId: string, playlist: Playlist) {
    return this.save.savePlaylist(userId, playlist);
  }

  clearTracks(playlistId: string, tracks: any) {
    return this.clear.clearTracks(playlistId, tracks);
  }
}
