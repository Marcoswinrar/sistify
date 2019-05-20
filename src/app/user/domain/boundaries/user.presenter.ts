import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { User } from '../models/user';
import { PlaylistList } from '../models/playlist/playlist-list';

export abstract class UserPresenter {

  abstract loadMenus(): Observable<Menu[]>;
  abstract loadUser(): Observable<User>;
  abstract loadPlaylists(): Observable<PlaylistList>;
}
