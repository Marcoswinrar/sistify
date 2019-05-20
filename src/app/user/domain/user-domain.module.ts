import { NgModule } from '@angular/core';

import { LoadMenusInteractor } from './interactors/load-menus.interactor';
import { LoadUserInteractor } from './interactors/load-user.interactor';
import { LoadUserPlaylistsInteractor } from './interactors/load-user-playlists.interactor';
import { LoadPlaylistInteractor } from './interactors/load-playlist.interactor';
import { LoadTracksInteractor } from './interactors/load-tracks.interactor';
import { DeleteTracksInteractor } from './interactors/delete-tracks.interactor';

@NgModule({
  providers: [
    LoadMenusInteractor,
    LoadUserInteractor,
    LoadUserPlaylistsInteractor,
    LoadPlaylistInteractor,
    LoadTracksInteractor,
    DeleteTracksInteractor
  ]
})
export class UserDomainModule { }
