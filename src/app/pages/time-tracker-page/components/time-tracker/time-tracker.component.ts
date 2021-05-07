import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { EUserStatus } from 'src/app/shared/models/user.model';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { ITimeTrackerConfig } from './time-tracker.model';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnChanges{
  @Input() config: ITimeTrackerConfig;
  public EUserStatus = EUserStatus;
  private counter: any;
  
  constructor(
    private timeTrackerService: TimeTrackerService
  ) { }

  public ngOnChanges(): void {
    if (this.config && this.config.user.status !== EUserStatus.OFFLINE && !this.counter) {
      this.setCounter();
    }
  }

  public btnStart(): void {
    this.timeTrackerService.clockIn(this.config.user.id).subscribe(() => {
      this.config.user.status = EUserStatus.ONLINE;
      this.setCounter();
    });
  }

  public btnFinish(): void {
    this.timeTrackerService.clockOut(this.config.user.id).subscribe(() => {
      this.config.user.status = EUserStatus.OFFLINE;
      this.config.timeTracker.totalTime = this.config.timeTracker.actualTime;
      clearInterval(this.counter);
    });
  }

  public btnPause(): void {
    if (this.config.user.status === EUserStatus.PAUSED) {
      this.config.user.status = EUserStatus.ONLINE;
      this.setCounter();
      return;
    }
    this.config.user.status = EUserStatus.PAUSED;
    clearInterval(this.counter);
  }

  private setCounter(): void {
    this.counter = setInterval(() => {
      this.config.timeTracker.actualTime = moment(this.config.timeTracker.actualTime, 'HH:mm:ss').add(1, 'second').format("HH:mm:ss");
    }, 1000);
  }
}
