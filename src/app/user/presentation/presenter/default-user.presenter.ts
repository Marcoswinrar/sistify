import { Injectable } from '@angular/core';

import { UserPresenter } from '../../domain/boundaries/user.presenter';
import { LoadUserInteractor } from '../../domain/interactors/load-user.interactor';
import { LoadMenusInteractor } from '../../domain/interactors/load-menus.interactor';

/**
 * This is an external layer.The UI of app.
 * In this presenter you apply the logic of component(filters, sort, etc).
 */
@Injectable()
export class DefaultUserPresenter implements UserPresenter {

  constructor(
    private user: LoadUserInteractor,
    private menus: LoadMenusInteractor
  ) { }

  loadUser() {
    return this.user.getUser();
  }
  
  loadMenus() {
    return this.menus.getMenus();
  }
}