import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { User } from '../models/user';
import { PlaylistList } from '../models/playlist/playlist-list';
import { Playlist } from '../models/playlist/playlist';

export abstract class UserPresenter {

  abstract loadMenus(): Observable<Menu[]>;
  abstract loadUser(): Observable<User>;
  abstract loadPlaylists(): Observable<PlaylistList>;
  abstract loadPlaylist(id: string): Observable<Playlist>;
  abstract loadTracks(url: string): Observable<any>;
  abstract savePlaylist(userId: string, playlist: Playlist): Observable<Playlist>;
  abstract clearTracks(playlistId: string, tracks: any): Observable<any>;
}
