import { Injectable } from '@angular/core';

import { UserGateway } from '../domain/boundaries/user.gateway';
import { UserRepository } from './user.repository';

/**
 * Layer of data and gateway to provide information for interactors.
 */
@Injectable()
export class DefaultUserGateway implements UserGateway {

  constructor(private repository: UserRepository) { }

  getUser(){
    return this.repository.getUser();
  }

  getMenus() {
    return this.repository.getMenus()
  }

}