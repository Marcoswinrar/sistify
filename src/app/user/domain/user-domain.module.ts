import { NgModule } from '@angular/core';

import { LoadMenusInteractor } from './interactors/load-menus.interactor';
import { LoadUserInteractor } from './interactors/load-user.interactor';
import { LoadUserPlaylistsInteractor } from './interactors/load-user-playlists.interactor';
import { LoadPlaylistInteractor } from './interactors/load-playlist.interactor';
import { LoadTracksInteractor } from './interactors/load-tracks.interactor';
import { SavePlaylistInteractor } from './interactors/save-playlist.interactor';
import { ClearTracksInteractor } from './interactors/clear-tracks.interactor';

@NgModule({
  providers: [
    LoadMenusInteractor,
    LoadUserInteractor,
    LoadUserPlaylistsInteractor,
    LoadPlaylistInteractor,
    LoadTracksInteractor,
    SavePlaylistInteractor,
    ClearTracksInteractor
  ]
})
export class UserDomainModule { }
