import { Component, OnInit, Input } from '@angular/core';
import { HeaderSettings } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ntheader',
  templateUrl: './ntheader.component.html',
  styleUrls: ['./ntheader.component.css'],
  inputs: ['headerSettings']
})

/**
 * NTHeaderComponent
 */
export class NTHeaderComponent implements OnInit {

  @Input() title: string;

  _headerSettings: HeaderSettings;

  constructor() { }

  ngOnInit() {
    console.log(this._headerSettings)
  }

  // Inputs properties
  get headerSettings() {
    return this._headerSettings;
  }

  set headerSettings(value: HeaderSettings) {
    this._headerSettings = value;
  }

}
