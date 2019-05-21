import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { HashService } from './services/hash.service';
import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';

@NgModule({
  providers: [
    AuthService,
    TokenService,
    HashService,
    UserService
  ]
})
export class AuthModule { }
