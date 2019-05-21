import { NgModule } from '@angular/core';

import { UserDataModule } from './data/user-data.module';
import { UserDomainModule } from './domain/user-domain.module';
import { UserPresentationModule } from './presentation/user-presentation.module';

@NgModule({
  imports : [
    UserDataModule,
    UserDomainModule,
    UserPresentationModule
  ]
})
export class UserModule { }
