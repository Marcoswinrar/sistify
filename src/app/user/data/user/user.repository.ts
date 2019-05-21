import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { User } from '../../domain/models/user';
import { Menu } from '../../domain/models/menu';
import { environment } from 'src/environments/environment';
import { PlaylistList } from '../../domain/models/playlist/playlist-list';
import { Playlist } from '../../domain/models/playlist/playlist';

@Injectable()
export class UserRepository {

  private readonly API = environment.api;

  constructor(private http: HttpClient) { }

  /**
   * Return user.
   */
  getUser(): Observable<User> {
    return this.http.get<User>(this.API + '/me');
  }

  /**
   * Return user playlists.
   */
  getUserPlaylists(): Observable<PlaylistList> {
    return this.http.get<PlaylistList>(this.API + '/me/playlists');
  }

  /**
   * Return playlist
   * @param id identification number of playlist.
   */
  getPlaylist(id: string): Observable<Playlist> {
    return this.http.get<Playlist>(this.API + '/playlists/' + id);
  }


  /**
   * Return menus of user module.
   */
  getMenus(): Observable<Menu[]> {
    return of([
      new Menu('Playlists', '/user/playlists'),
      new Menu('New', '/user/new')
    ]);
  }

  /**
   * Return all tracks of playlist.
   * @param url to fetch data.
   */
  getTracks(url: string): Observable<any> {
    return this.http.get(url);
  }

  /**
   * Delete tracks from playlist
   * @param url to api to delete.
   * @param tracks list of tracks to delete.
   */
  deleteTracks(url: string, tracks: any) {
    this.http.delete(url + { body: { tracks } });
  }
}
