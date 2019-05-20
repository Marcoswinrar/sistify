import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoggedOfGuard } from './auth/guards/logged-of.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoggedOfGuard]},
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
