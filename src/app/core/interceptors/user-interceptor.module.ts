import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthorizedHttpInterceptor } from './user-authorized-http.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthorizedHttpInterceptor,
      multi: true
    }
  ]
})
export class UserInterceptorModule { }
