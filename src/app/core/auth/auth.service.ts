import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {

  /**
   * Enviroments of oauth.
   */
  private readonly client_id = environment.client_id;
  private readonly redirect_uri = environment.redirect_uri;
  private readonly response_type = 'token';
  private readonly authorization_url = environment.authorization_url;
  private readonly scope = 'user-read-email user-read-private';
  
  /**
   * Redirect user to external authentication
   */
  authenticate() {
    return window.location.href = this.authorization_url +
    `?&client_id=${encodeURIComponent(this.client_id)}` +
    `&response_type=${this.response_type}` +
    `&redirect_uri=${encodeURIComponent(this.redirect_uri)}` +
    `&scope=${encodeURIComponent(this.scope)}`;
  }

}