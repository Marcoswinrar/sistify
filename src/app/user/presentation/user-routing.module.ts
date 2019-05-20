import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPlaylistComponent } from './playlist/user-playlist.component';
import { UserNewPlaylistComponent } from './new/user-new.playlist.component';
import { UserComponent } from './initial-page/user.component';
import { LoggedInGuard } from 'src/app/auth/guards/logged-in.guard';
import { UserProfileComponent } from './profile/user-profile.component';
import { UserPlaylistDetailComponent } from './detail/user-playlist-detail.component';

const routes: Routes = [
  { path: '', component: UserComponent,
    children:
    [
      { path: 'playlists', component: UserPlaylistComponent, canActivate: [LoggedInGuard] },
      { path: 'new', component: UserNewPlaylistComponent, canActivate: [LoggedInGuard] },
      { path: 'playlists/:id', component: UserPlaylistDetailComponent , canActivate: [LoggedInGuard] }
    ]
  },
  { path: 'profile', component: UserProfileComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting { }
