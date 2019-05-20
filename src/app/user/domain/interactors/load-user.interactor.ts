import { Injectable } from '@angular/core';

import { UserGateway } from '../boundaries/user.gateway';

/**
 * This layer is the most important of app.
 * It contains all domain bussines logic.
 * 
 * Here we treat the whole business rule in case you need. 
 */
@Injectable()
export class LoadUserInteractor {

  constructor(private gateway: UserGateway) { }

  getUser() {
    return this.gateway.getUser();
  }

}