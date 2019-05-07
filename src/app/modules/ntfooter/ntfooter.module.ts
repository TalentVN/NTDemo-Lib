import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTFooterComponent } from '../ntfooter/ntfooter.component';

@NgModule({
  declarations: [NTFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTFooterComponent
  ]
})
export class NTFooterModule { }
