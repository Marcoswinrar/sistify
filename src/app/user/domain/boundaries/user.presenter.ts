import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { User } from '../models/user';

export abstract class UserPresenter {

  abstract loadMenus(): Observable<Menu[]>;
  abstract loadUser(): Observable<User>;
}