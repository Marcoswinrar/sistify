import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../domain/models/user';
import { UserPresenter } from '../../domain/boundaries/user.presenter';

@Component({
  selector: 'sistify-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit { 

  user$: Observable<User>;

  constructor(private presenter: UserPresenter) { }

  ngOnInit() {
    this.user$ = this.presenter.loadUser();
  }

}