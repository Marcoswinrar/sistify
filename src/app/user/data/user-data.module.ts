import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserGateway } from '../domain/boundaries/user.gateway';
import { DefaultUserGateway } from './default-user.gateway';
import { UserRepository } from './user.repository';

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
