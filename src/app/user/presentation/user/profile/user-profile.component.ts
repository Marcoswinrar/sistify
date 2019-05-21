import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { User } from '../../../domain/models/user';
import { UserPresenter } from '../../../domain/boundaries/user.presenter';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sistify-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user: User;
  destroyed$ = new Subject<void>();
  constructor(private presenter: UserPresenter) { }

  ngOnInit() {
    this.presenter
      .loadUser().pipe(takeUntil(this.destroyed$)
    ).subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.destroyed$.complete();
    this.destroyed$.next();
  }

}
