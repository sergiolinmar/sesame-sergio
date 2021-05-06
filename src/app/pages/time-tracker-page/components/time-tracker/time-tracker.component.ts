import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {
  @Input() config: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
