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
  inputs: ['headerSettings']
})

export class NTHeaderComponent implements OnInit {

  @Input() title: string;
  

  _headerSettings: HeaderSettings;

  constructor() { }

  ngOnInit() {
  }

  // Inputs properties
  get headerSettings() {
    return this._headerSettings;
  }

  set headerSettings(value: HeaderSettings) {
    this._headerSettings = value;
  }

}
