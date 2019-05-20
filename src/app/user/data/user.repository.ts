import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../domain/models/user';
import { Menu } from '../domain/models/menu';
import { environment } from 'src/environments/environment';
import { UserService } from '../../core/auth/user.service';

@Injectable()
export class UserRepository {

  private readonly API = environment.api

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  /**
   * Return user.
   */
  getUser(): Observable<User> {
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.userService.getToken())
    console.log(headers, this.userService.getToken())
    return this.http.get<User>('https://api.spotify.com/v1/me', {headers});
  }

  /**
   * Return menus of user module.
   */
  getMenus(): Observable<Menu[]> {
    return of([
      new Menu('Playlists', '/user/playlists'),
      new Menu('New', '/user/new')
    ])
  }

}