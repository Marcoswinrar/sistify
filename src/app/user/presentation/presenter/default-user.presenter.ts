import { Injectable } from '@angular/core';

import { UserPresenter } from '../../domain/boundaries/user.presenter';
import { LoadUserInteractor } from '../../domain/interactors/load-user.interactor';
import { LoadMenusInteractor } from '../../domain/interactors/load-menus.interactor';
import { LoadUserPlaylistsInteractor } from '../../domain/interactors/load-user-playlists.interactor';
import { LoadPlaylistInteractor } from '../../domain/interactors/load-playlist.interactor';
import { LoadTracksInteractor } from '../../domain/interactors/load-tracks.interactor';
import { DeleteTracksInteractor } from '../../domain/interactors/delete-tracks.interactor';

/**
 * This is an external layer.The UI of app.
 * In this presenter you apply the logic of
 * component(filters, sort, etc) if necessary.
 */
@Injectable()
export class DefaultUserPresenter implements UserPresenter {

  constructor(
    private user: LoadUserInteractor,
    private menus: LoadMenusInteractor,
    private playlists: LoadUserPlaylistsInteractor,
    private playlist: LoadPlaylistInteractor,
    private tracks: LoadTracksInteractor,
    private deleteTracks: DeleteTracksInteractor
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

  loadDeleteTracks(url: string, tracks: any) {
    this.deleteTracks.deleteTracks(url, tracks);
  }
}
