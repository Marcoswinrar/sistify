import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { User } from '../models/user';
import { PlaylistList } from '../models/playlist/playlist-list';

export abstract class UserGateway {

  abstract getMenus(): Observable<Menu[]>;
  abstract getUser(): Observable<User>;

  abstract getPlaylists(): Observable<PlaylistList>;
}
