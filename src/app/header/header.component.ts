import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core/auth/services/user.service';
import { MatMenuTrigger, MatMenuItem } from '@angular/material';

@Component({
  selector: 'sistify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  arrowIndicator = true;
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

  changeArrowIndicator() {
    this.arrowIndicator = !this.arrowIndicator;
  }

}
