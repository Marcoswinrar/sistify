import { NgModule } from '@angular/core';

import { LoadMenusInteractor } from './interactors/load-menus.interactor';
import { LoadUserInteractor } from './interactors/load-user.interactor';

@NgModule({
  providers: [
    LoadMenusInteractor,
    LoadUserInteractor
  ]
})
export class UserDomainModule { }