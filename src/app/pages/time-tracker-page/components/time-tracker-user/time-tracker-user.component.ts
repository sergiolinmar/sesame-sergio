import { Component, Input, OnInit } from '@angular/core';
import { EUserStatus, IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-time-tracker-user',
  templateUrl: './time-tracker-user.component.html'
})
export class TimeTrackerUserComponent {
  @Input() user: IUser;

  constructor() { }
}
