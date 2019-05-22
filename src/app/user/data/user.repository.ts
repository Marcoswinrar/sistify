import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { User } from '../domain/models/user';
import { Menu } from '../domain/models/menu';
import { environment } from 'src/environments/environment';
import { PlaylistList } from '../domain/models/playlist/playlist-list';
import { Playlist } from '../domain/models/playlist/playlist';

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
   * Add new playlist.
   * @param userId identification of user.
   * @param playlist information of new playlist.
   */
  addPlaylist(userId: string, playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(this.API + '/users/' + userId + '/playlists', playlist);
  }

  /**
   * Delete track from playlist.
   * @param playlistId identification number of playlist
   * @param tracks an list or unique track to delete.
   */
  deleteTracks(playlistId: string, tracks: any): Observable<any> {

    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body : {
        tracks
      }
    }
    return this.http.delete<any>(this.API + '/playlists/' + playlistId + '/tracks', options);
  }

  /**
   * Return menus of user module.
   */
  getMenus(): Observable<Menu[]> {
    return of([
      new Menu('Playlists', '/user/playlists'),
      new Menu('New playlist', '/user/new')
    ]);
  }

  /**
   * Return all tracks of playlist.
   * @param url to fetch data.
   */
  getTracks(url: string): Observable<any> {
    return this.http.get(url);
  }
}
