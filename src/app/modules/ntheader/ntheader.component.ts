/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { HeaderSettings } from '../../interfaces/interfaces';

/**
 * NTHeaderComponent
 */
@Component({
  selector: 'NTHeader',
  templateUrl: './ntheader.component.html',
  styleUrls: ['./ntheader.component.scss'],
  inputs: ['HeaderSettings']
})

export class NTHeaderComponent implements OnInit {
  
  headerSettings: HeaderSettings;

  constructor() { }

  ngOnInit() {
  }

  // Inputs properties
  get HeaderSettings() {
    return this.headerSettings;
  }

  set HeaderSettings(value: HeaderSettings) {
    this.headerSettings = value;
  }

}
