/**
 * @license
 * Orient Software © 2019 All Rights Reserved
 * Licensed under the MIT License.
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NTHeaderComponent } from '../ntheader/ntheader.component';

@NgModule({
  declarations: [NTHeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    NTHeaderComponent
  ],
  bootstrap: [NTHeaderComponent]
})
export class NTheaderModule { }
