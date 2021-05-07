import { Component } from '@angular/core';
import { TimeTrackerService } from './services/time-tracker.service';
import { EDropdownTypes } from 'src/app/shared/components/dropdown/dropdown.model';
import { EUserStatus, IUser } from 'src/app/shared/models/user.model';
import { ITimeTrackerConfig } from './components/time-tracker/time-tracker.model';
import * as moment from 'moment';

@Component({
  selector: 'app-time-tracker-page',
  templateUrl: './time-tracker-page.component.html'
})
export class TimeTrackerPageComponent {
  public config: ITimeTrackerConfig;

  constructor(
    private timeTrackerService: TimeTrackerService
  ) {
    this.getInitialInfo();
  }

  private setConfig(params: {
    user: IUser,
    totalTime: string
  }): void {
    this.config = {
      user: params.user,
      dropdown: {
        items: [
          {
            label: 'Mis cuentas',
            items: [
              {
                type: EDropdownTypes.USER_ACCOUNT,
                extra: {
                  user: params.user,
                  timeToday: params.totalTime
                }
              },
              {
                type: EDropdownTypes.USER_ACCOUNT,
                extra: {
                  user: { 
                    ...params.user, 
                    avatar: 'https://i.pravatar.cc/32?img=2' 
                  },
                  timeToday: moment('00:00:00', 'HH:mm:ss').format("HH:mm:ss")
                }
              }
            ]
          },
          { label: 'Vista empleado' },
          { label: 'Mi perfil' },
          { label: 'Cerrar sesión' }
      ]},
      timeTracker: {
        actualTime: params.totalTime,
        totalTime: params.totalTime
      }
    };
  }

  private getInitialInfo(): void {
    this.timeTrackerService.get().subscribe((res) => {
      const { employee, workEntryIn, workEntryOut } = res.data.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
      let totalTime: string;

      switch (employee.workStatus) {
        case EUserStatus.OFFLINE:
          totalTime = workEntryOut?.date ? moment.utc(moment(workEntryOut.date).diff(moment(workEntryIn.date))).format("HH:mm:ss") : moment('00:00:00', 'HH:mm:ss').format("HH:mm:ss");
          break;
        case EUserStatus.PAUSED:
        case EUserStatus.ONLINE:
          if (workEntryOut?.date) {
            totalTime = moment.utc(moment(workEntryOut.date).diff(moment(workEntryIn.date))).format("HH:mm:ss");
          } else {
            totalTime = moment.utc(moment().diff(moment(workEntryIn.date))).format("HH:mm:ss");
          }
          break;
      }

      this.setConfig({
        user: {
          id: employee.id,
          name: `${employee.firstName} ${employee.lastName}`,
          avatar: 'https://i.pravatar.cc/32?img=1',
          status: employee.workStatus
        },
        totalTime: totalTime
      });
    });
  }

}
