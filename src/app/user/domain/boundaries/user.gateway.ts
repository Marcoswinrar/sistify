import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { User } from '../models/user';
import { PlaylistList } from '../models/playlist/playlist-list';
import { Playlist } from '../models/playlist/playlist';

export abstract class UserGateway {

  abstract getMenus(): Observable<Menu[]>;
  abstract getUser(): Observable<User>;
  abstract getPlaylists(): Observable<PlaylistList>;
  abstract getPlaylist(id: string): Observable<Playlist>;
  abstract getTracks(url: string): Observable<any>;
  abstract addPlaylist(userId: string, playlist: Playlist): Observable<Playlist>;
  abstract deleteTracks(playlistId: string, tracks: any): Observable<any>;
}
