import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router} from '@angular/router';
  
import { Observable } from 'rxjs'; 

import { UserService } from '../user.service';

@Injectable({providedIn: 'root'})
export class LoggedOfGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * if user is logged and navigate to login, app redirect to playlists.
   * @param route 
   * @param state 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    
    if (this.userService.isLogged()) {
      this.router.navigate(['user']);
      return false;
    }
    return true;
  }
}