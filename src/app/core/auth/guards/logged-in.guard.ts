import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({providedIn: 'root'})
export class LoggedInGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * Verify if user is logged and active route.
   */
  canActivate() {

    if (this.userService.isLogged()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
