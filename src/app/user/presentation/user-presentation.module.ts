import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from 'src/app/core/material/material-ui.module';
import { UserComponent } from './initial-page/user.component';
import { UserPlaylistComponent } from './playlist/user-playlist.component';
import { UserNewPlaylistComponent } from './new/user-new.playlist.component';
import { UserRouting } from './user-routing.module';
import { UserPresenter } from '../domain/boundaries/user.presenter';
import { DefaultUserPresenter } from './presenter/default-user.presenter';
import { UserProfileComponent } from './profile/user-profile.component';
import { UserCardComponent } from './card/user-card/user-card.component';
import { PlaylistCardComponent } from './card/playlist-card/playlist-card.component';
import { UserPlaylistDetailComponent } from './detail/user-playlist-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    UserRouting
  ],
  declarations: [
    UserComponent,
    UserPlaylistComponent,
    UserNewPlaylistComponent,
    UserProfileComponent,
    UserCardComponent,
    PlaylistCardComponent,
    UserPlaylistDetailComponent
  ],
  providers: [
    {
      provide: UserPresenter,
      useClass: DefaultUserPresenter
    }
  ],
  exports: [UserComponent]
})
export class UserPresentationModule { }
