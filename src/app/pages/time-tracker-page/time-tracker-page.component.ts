import { Component, OnInit } from '@angular/core';
import { TimeTrackerService } from './services/time-tracker.service';
import * as _ from 'lodash';
import { IDropdownConfig, EDropdownTypes } from 'src/app/shared/components/dropdown/dropdown.model';
import { EUserStatus, IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-time-tracker-page',
  templateUrl: './time-tracker-page.component.html',
  styleUrls: ['./time-tracker-page.component.scss']
})
export class TimeTrackerPageComponent implements OnInit {
  public config: {
    user: IUser,
    dropdown: IDropdownConfig
  };

  private user: IUser;

  constructor(
    private timeTrackerService: TimeTrackerService
  ) {
    this.timeTrackerService.get().subscribe((data) => {
      const { employee, workEntryIn, workEntryOut } = _.max(data.data, function(el) { 
        return new Date(el.workEntryIn.createdAt).getTime();
      });

      this.user = {
        id: employee.id,
        name: `${employee.firstName} ${employee.lastName}`,
        avatar: 'https://i.pravatar.cc/32?img=1',
        status: employee.workStatus
      };
      this.setConfig();
    })
  }

  ngOnInit(): void {
  }

  private setConfig(): void {

    const secondAccount: IUser = { 
      ...this.user, 
      avatar: 'https://i.pravatar.cc/32?img=2' 
    };

    this.config = {
      user: this.user,
      dropdown: {
        items: [
          {
            label: 'Mis cuentas',
            items: [
              {
                type: EDropdownTypes.USER_ACCOUNT,
                extra: {
                  user: this.user
                }
              },
              {
                type: EDropdownTypes.USER_ACCOUNT,
                extra: {
                  user: secondAccount
                }
              }
            ]
          },
          { label: 'Vista empleado' },
          { label: 'Mi perfil' },
          { label: 'Cerrar sesión', fn: () => { console.log('hola'); } }
      ]}
    };
  }

}
