import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


import { UserService } from '../services/user.service';

@Injectable({providedIn: 'root'})
export class LoggedOfGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * if user is logged and navigate to login, app redirect to playlists.
   */
  canActivate() {

    if (this.userService.isLogged()) {
      this.router.navigate(['user']);
      return false;
    }
    return true;
  }
}
