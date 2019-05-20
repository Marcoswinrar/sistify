import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class HashService {

  // extracted params after authentication.
  params = { };

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  /**
   * If has fragments
   * Returns hash params of active route.
   */
  getHashParams() {
    if (this.activatedRoute.snapshot.fragment) {
      const fragments = this.activatedRoute.snapshot.fragment.split('&');
      fragments.map(fragment => {
        const param = fragment.split('=');
        this.params[param[0]] = param[1];
      });
    }
    this.clearHashParams();
    return this.params;
  }

  /**
   * Clear hash fragments after Oauth authentication and redirect.
   */
  clearHashParams() {
    const pathWithouHash = this.location.path(false);
    this.location.replaceState(pathWithouHash);
  }

}
