import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserRepository } from './user/user.repository';
import { UserGateway } from '../domain/boundaries/user.gateway';
import { DefaultUserGateway } from './default-user.gateway';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    UserRepository,
    {
      provide: UserGateway,
      useClass: DefaultUserGateway
    }
  ]
})
export class UserDataModule { }
