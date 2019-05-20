import { Component, Input } from '@angular/core';
import { User } from '../../../domain/models/user';

@Component({
  selector: 'sistify-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User;

}

