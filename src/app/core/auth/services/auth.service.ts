import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  /**
   * Enviroments of oauth.
   */
  private readonly clientId = environment.client_id;
  private readonly redirectUri = environment.redirect_uri;
  private readonly responseType = 'token';
  private readonly authorizationUrl = environment.authorization_url;
  private readonly scope = 'playlist-modify-private playlist-modify-public user-read-email playlist-read-private';

  /**
   * Redirect user to external authentication
   */
  authenticate() {
    return window.location.href = this.authorizationUrl +
    `?&client_id=${encodeURIComponent(this.clientId)}` +
    `&response_type=${this.responseType}` +
    `&redirect_uri=${encodeURIComponent(this.redirectUri)}` +
    `&scope=${encodeURIComponent(this.scope)}`;
  }

}
