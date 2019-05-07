import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NTHeaderComponent } from '../ntheader/ntheader.component';

@NgModule({
  declarations: [NTHeaderComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NTHeaderComponent
  ],
  bootstrap: [NTHeaderComponent]
})
export class NTheaderModule { }
