import { NgModule } from '@angular/core';

import { LoadMenusInteractor } from './interactors/load-menus.interactor';
import { LoadUserInteractor } from './interactors/load-user.interactor';
import { LoadUserPlaylistsInteractor } from './interactors/load-user-playlists.interactor';

@NgModule({
  providers: [
    LoadMenusInteractor,
    LoadUserInteractor,
    LoadUserPlaylistsInteractor
  ]
})
export class UserDomainModule { }
