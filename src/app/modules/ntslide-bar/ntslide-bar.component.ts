import { Component, OnInit, Input } from '@angular/core';
import { Menu, MenuItem } from '../../interfaces/interfaces';

/**
 * NTSlideBarComponent
 * 
 * Custom menu with flexible data array and one level
 */
@Component({
  selector: 'app-ntslide-bar',
  templateUrl: './ntslide-bar.component.html',
  styleUrls: ['./ntslide-bar.component.css'],
  inputs: ['menuSettings']
})
export class NTSlideBarComponent implements OnInit {

  @Input() title: string;

  _menuSettings: Menu;

  constructor() {

  }

  ngOnInit() {

  }

  // Inputs properties
  get menuSettings() {
    return this._menuSettings;
  }

  set menuSettings(value: Menu) {
    this._menuSettings = value;
  }

}
