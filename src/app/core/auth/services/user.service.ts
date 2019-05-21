import { Injectable } from '@angular/core';

import { HashService } from 'src/app/core/auth/services/hash.service';
import { TokenService } from './token.service';

/**
 * Provides data from user(token infos and session).
 */
@Injectable()
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
    const userParam = this.hash.getHashParams();
    if (userParam['access_token']) {
      this.setToken(userParam['access_token']);
    }
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
