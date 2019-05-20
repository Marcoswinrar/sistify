import { Injectable } from '@angular/core';

import { UserGateway } from '../boundaries/user.gateway';

/**
 * This layer is the most important of app.
 * It contains all domain bussines logic.
 *
 * Here we treat the whole business rule in case you need.
 */
@Injectable()
export class LoadTracksInteractor {

  constructor(private gateway: UserGateway) { }

  loadTracks(url: string) {
    return this.gateway.getTracks(url);
  }

}
