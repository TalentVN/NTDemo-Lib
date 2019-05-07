/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../interfaces/interfaces';

/**
 * NTSlideBarComponent
 * 
 * Custom menu with flexible data array and one level
 * 
 * Example:
 * ```ts
 * <NTSlide-Bar title="{{title}}"
 *  [MenuSettings]="menuSettings">
 * 
 * </NTSlide-Bar>
 * ```
 */
@Component({
  selector: 'NTSlide-Bar',
  templateUrl: './ntslide-bar.component.html',
  styleUrls: ['./ntslide-bar.component.scss'],
  inputs: ['MenuSettings']
})
export class NTSlideBarComponent implements OnInit {

  /**
   * Input title of this SlideBar to show Slibar Name or detail
   * If you don't want to show then not input value
   * @type {string}
   */
  @Input() title: string = "";

  menuSettings: Menu;

  constructor() {

  }

  ngOnInit() {

  }

  // Inputs properties
  get MenuSettings() {
    return this.menuSettings;
  }

  set MenuSettings(value: Menu) {
    this.menuSettings = value;
  }

}
