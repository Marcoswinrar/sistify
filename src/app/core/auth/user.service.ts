import { Injectable } from '@angular/core';

import { TokenService } from 'src/app/core/auth/token.service';
import { HashService } from 'src/app/core/auth/hash.service';

/**
 * Provides data from user(token infos and session).
 */
@Injectable({providedIn: 'root'})
export class UserService { 

  constructor(
    private token: TokenService,
    private hash: HashService
  ) { }
  
  /**
   * Get auth data from hash and set token
   * if he have a defined value.
   */
  getAuthUserParams() {
    const user = this.hash.getHashParams();
    if(user['access_token'])
      this.setToken(user['access_token']);
  }

  /**
   * Sets token in localstorage
   * @param token access_token
   */
  setToken(token: string) {
    this.token.setToken(token);
  }

  /**
   * Retrieves token from localstorage.
   */
  getToken() {
    return this.token.getToken();
  }


  /**
   * Return if user is logged.
   */
  isLogged() {
    return this.token.hasToken();
  }

  /**
   * Clear token from localstorage.
   */
  clearToken() {
    this.token.clearToken();
  }
}