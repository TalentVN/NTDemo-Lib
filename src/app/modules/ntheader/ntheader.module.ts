import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTHeaderComponent } from '../ntheader/ntheader.component';

@NgModule({
  declarations: [NTHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTHeaderComponent
  ]
})
export class NTheaderModule { }
