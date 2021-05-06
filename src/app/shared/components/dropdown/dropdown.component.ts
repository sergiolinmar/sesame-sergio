import { Component, Input, OnInit } from '@angular/core';
import { IDropdownConfig, EDropdownTypes } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() config: IDropdownConfig;
  public EDropdownTypes = EDropdownTypes;

  constructor() {
    
  }

  public ngOnInit(): void {
    console.log(this.config);
  }
}
