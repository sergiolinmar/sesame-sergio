import { Component, Input } from '@angular/core';
import { IUser, EUserStatus } from '../../models/user.model';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() user: IUser;
  public EUserStatus = EUserStatus;

  constructor() { }
}
