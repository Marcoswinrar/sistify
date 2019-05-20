import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { User } from '../models/user';

export abstract class UserGateway {
  
  abstract getMenus(): Observable<Menu[]>;
  abstract getUser(): Observable<User>;
}