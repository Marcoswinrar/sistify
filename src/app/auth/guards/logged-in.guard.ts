import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot, 
  Router 
} from '@angular/router';

import { Observable } from 'rxjs'; 

import { UserService } from '../user.service';

@Injectable({providedIn: 'root'})
export class LoggedInGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * Verify if user is logged and active resource.
   * @param route 
   * @param state 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    
    if (this.userService.isLogged()) {
      return true;
    }
    this.router.navigate([''])
    return false;
  }
}