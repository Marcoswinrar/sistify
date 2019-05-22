import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { MaterialUiModule } from './core/material/material-ui.module';
import { DialogModule } from './core/dialog/dialog.module';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { ActionModule } from './core/action/action.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    MaterialUiModule,
    DialogModule,
    ActionModule,
    LoginModule,
    HeaderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
