import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { 
  
  constructor(private auth: AuthService) { }

  login() {
    this.auth.authenticate();
  }

}