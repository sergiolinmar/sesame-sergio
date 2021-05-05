import { Component, OnInit } from '@angular/core';
import { TimeTrackerService } from './services/time-tracker.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-time-tracker-page',
  templateUrl: './time-tracker-page.component.html',
  styleUrls: ['./time-tracker-page.component.scss']
})
export class TimeTrackerPageComponent implements OnInit {

  constructor(
    private timeTrackerService: TimeTrackerService
  ) {
    this.timeTrackerService.get().subscribe((data) => {
      const { employee, workEntryIn, workEntryOut } = _.max(data.data, function(el) { 
        return new Date(el.workEntryIn.createdAt).getTime();
      });
    })
  }

  ngOnInit(): void {
  }

}
