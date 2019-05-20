import { Inject, Injectable } from '@angular/core';

const KEY = 'Authentication';

@Injectable()
export class TokenService {

  /**
   * Verify if have an token in localstorage.
   */
  hasToken() {
    return !!this.getToken();
  }

  /**
   * Sets token in localstorage
   * @param token access_token
   */
  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  /**
   * Retrieves token from localstorage.
   */
  getToken() {
    return window.localStorage.getItem(KEY);
  }

  /**
   * Clear token in localstorage.
   */
  clearToken() {
    window.localStorage.removeItem(KEY);
  }
}
