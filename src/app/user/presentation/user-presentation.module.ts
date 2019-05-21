import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from 'src/app/core/material/material-ui.module';
import { UserComponent } from './initial-page/user.component';
import { UserPlaylistComponent } from './user/playlist/user-playlist.component';
import { UserNewPlaylistComponent } from './user/playlist/new/user-new.playlist.component';
import { UserRouting } from './user-routing.module';
import { UserPresenter } from '../domain/boundaries/user.presenter';
import { DefaultUserPresenter } from './presenter/default-user.presenter';
import { UserProfileComponent } from './user/profile/user-profile.component';
import { UserCardComponent } from './card/user-card/user-card.component';
import { PlaylistCardComponent } from './card/playlist-card/playlist-card.component';
import { UserPlaylistDetailComponent } from './user/playlist/detail/user-playlist-detail.component';
import { PlaylistDetailMusicComponent } from './user/playlist/detail/music/playlist-detail-music.component';
import { UserInterceptorModule } from 'src/app/core/interceptors/user-interceptor.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    UserInterceptorModule,
    UserRouting
  ],
  declarations: [
    UserComponent,
    UserPlaylistComponent,
    UserNewPlaylistComponent,
    UserProfileComponent,
    UserCardComponent,
    PlaylistCardComponent,
    PlaylistDetailMusicComponent,
    UserPlaylistDetailComponent
  ],
  providers: [
    {
      provide: UserPresenter,
      useClass: DefaultUserPresenter
    }
  ]
})
export class UserPresentationModule { }
