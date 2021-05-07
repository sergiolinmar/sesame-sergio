import { Component, Input } from '@angular/core';
import { IDropdownConfig, EDropdownTypes } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() config: IDropdownConfig;
  public EDropdownTypes = EDropdownTypes;

  constructor() {}
}
