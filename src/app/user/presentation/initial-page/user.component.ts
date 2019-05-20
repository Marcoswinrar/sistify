import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Menu } from '../../domain/models/menu';
import { UserPresenter } from '../../domain/boundaries/user.presenter';
import { UserService } from '../../../auth/user.service';

/**
 * This component receives REDIRECT_URI from oauth.
 * In this case, user component need to extract user access, clear
 * hash params and redirect to user playlists.
 */

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  menus$: Observable<Menu[]>;

  constructor(
    private userService: UserService,
    private presenter: UserPresenter,
    private router: Router
  ) { }

  /**
   * TODO: Need better logic ;D
   */
  ngOnInit() {
    this.userService.getAuthUserParams();
    this.menus$ = this.presenter.loadMenus()
      .pipe(finalize(() => this.router.navigate(['/user/playlists'])));
  }
}
