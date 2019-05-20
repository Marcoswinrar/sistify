import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from '../core/material/material-ui.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';
import { TokenService } from '../auth/token.service';
import { HashService } from '../auth/hash.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    AuthService,
    TokenService,
    HashService
  ]
})
export class LoginModule { }
