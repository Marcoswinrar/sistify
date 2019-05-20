import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/domain/models/user';
import { UserService } from '../core/auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sistify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{ 

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  get isLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.userService.clearToken();
    this.router.navigate(['']);
  }
}